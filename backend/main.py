from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from agent import generate_article,generate_article_stream
from schema import ArticleRequest, ArticleResponse
import json

app = FastAPI(
    title="LangGraph Article Generator"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "API Running Successfully"
    }


@app.post("/generate", response_model=ArticleResponse)
def generate(request: ArticleRequest):

    result = generate_article(request.topic)

    return result



@app.get("/generate-stream")
def generate_stream(topic: str):

    def event_generator():

        final_article = ""

        for event in generate_article_stream(topic):

            # Writer Node
            if "write_article" in event:

                final_article = event["write_article"]["article"]

                yield (
                    f"data: {json.dumps({
                        'type': 'workflow',
                        'workflow': event['write_article']['workflow']
                    })}\n\n"
                )

            # Reviewer Node
            elif "review_article" in event:

                review = event["review_article"]["review"]

                yield (
                    f"data: {json.dumps({
                        'type': 'workflow',
                        'workflow': event['review_article']['workflow']
                    })}\n\n"
                )

                if "does not need any changes" in review.content.lower():

                    yield (
                        f"data: {json.dumps({
                            'type': 'article',
                            'article': final_article
                        })}\n\n"
                    )

                    break

            # Search Node
            elif "internet_search" in event:

                yield (
                    f"data: {json.dumps({
                        'type': 'workflow',
                        'workflow': event['internet_search']['workflow']
                    })}\n\n"
                )

    return StreamingResponse(
        event_generator(),
        media_type="text/event-stream"
    )