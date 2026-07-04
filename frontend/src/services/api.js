import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Existing POST API
export const generateArticle = async (topic) => {
  try {
    const response = await API.post("/generate", {
      topic,
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};

// NEW SSE API
export const generateArticleStream = (
  topic,
  onWorkflow,
  onArticle,
  onError
) => {
  const eventSource = new EventSource(
    `http://127.0.0.1:8000/generate-stream?topic=${encodeURIComponent(topic)}`
  );

  eventSource.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === "workflow") {
      onWorkflow(data.workflow);
    }

    if (data.type === "article") {
      onArticle(data.article);
      eventSource.close();
    }
  };

  eventSource.onerror = (error) => {
    console.error(error);
    eventSource.close();

    if (onError) {
      onError(error);
    }
  };

  return eventSource;
};