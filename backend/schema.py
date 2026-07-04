from pydantic import BaseModel
from typing import List

class ArticleRequest(BaseModel):
    topic: str


class ArticleResponse(BaseModel):
    article: str
    workflow: List[str]