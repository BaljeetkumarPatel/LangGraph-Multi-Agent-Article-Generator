# 🚀 LangGraph Multi-Agent Article Generator

::: {align="center"}
### Intelligent Multi-Agent Content Generation using **LangGraph**, **LangChain**, **FastAPI**, **React**, **Mistral AI**, **Tavily Search**, and **Server-Sent Events (SSE)**

![Python](https://img.shields.io/badge/Python-3.11+-3776AB?logo=python)
![FastAPI](https://img.shields.io/badge/FastAPI-009688?logo=fastapi)
![React](https://img.shields.io/badge/React-61DAFB?logo=react)
![LangGraph](https://img.shields.io/badge/LangGraph-Multi--Agent-orange)
![LangChain](https://img.shields.io/badge/LangChain-Framework-success)
![License](https://img.shields.io/badge/License-MIT-yellow)
:::

------------------------------------------------------------------------

## 📌 Overview

This project demonstrates an **Agentic AI workflow** built with
**LangGraph**.

Instead of relying on a single LLM call, the system orchestrates
multiple specialized AI agents:

-   ✍️ Writer Agent
-   🧐 Reviewer Agent
-   🌐 Internet Search Agent
-   🔄 Automatic Rewrite Loop

The Reviewer validates every generated article against the original user
request. When factual verification is required, it invokes Tavily
Search. The Writer then rewrites the article using reviewer feedback and
retrieved information until the Reviewer approves it.

The frontend visualizes the execution in real time using **Server-Sent
Events (SSE)**.

------------------------------------------------------------------------

# ✨ Features

-   Multi-Agent Architecture
-   LangGraph State Management
-   Conditional Routing
-   Automatic Review & Rewrite
-   Internet Search Integration (Tavily)
-   Real-Time Workflow Streaming (SSE)
-   FastAPI REST API
-   React + Tailwind Frontend
-   Responsive UI
-   Modular Agent Design

------------------------------------------------------------------------

# 🏗 High-Level System Architecture

``` mermaid
graph TD

A[User]
A --> B[React Frontend]

B --> C[FastAPI Backend]

C --> D[LangGraph]

D --> W[Writer Agent]

W --> R[Reviewer Agent]

R --> DECISION{Need Latest Information?}

DECISION -->|Yes| S[Tavily Search]

S --> W

DECISION -->|No| F[Final Article]

F --> SSE[SSE Streaming]

SSE --> UI[Live Workflow UI]

UI --> A
```

------------------------------------------------------------------------

# 🤖 Multi-Agent Workflow

``` mermaid
graph LR

START --> Writer

Writer --> Reviewer

Reviewer --> Decision

Decision -->|Needs Search| Search

Search --> Writer

Decision -->|Needs Rewrite| Writer

Decision -->|Approved| END
```

------------------------------------------------------------------------

# 🔄 Runtime Execution

``` text
User Request
      │
      ▼
Writer Agent
      │
      ▼
Reviewer Agent
      │
      ├───────────────► Approved
      │                    │
      │                    ▼
      │                 Final Article
      │
      ▼
Internet Search
      │
      ▼
Writer Agent (Rewrite)
      │
      ▼
Reviewer Agent
      │
      ▼
Approved
```

------------------------------------------------------------------------

# 🧠 Agent Responsibilities

## ✍️ Writer Agent

-   Generates initial article
-   Rewrites article using reviewer feedback
-   Incorporates latest search results
-   Produces final article only

## 🧐 Reviewer Agent

-   Reviews generated article
-   Compares against original prompt
-   Detects missing requirements
-   Triggers Internet Search when needed
-   Approves final article

## 🌐 Internet Search Agent

-   Uses Tavily API
-   Retrieves latest factual information
-   Sends search results back to Writer Agent

------------------------------------------------------------------------

# 📡 Streaming Architecture (SSE)

``` mermaid
sequenceDiagram

participant User
participant React
participant FastAPI
participant LangGraph
participant Writer
participant Reviewer
participant Search

User->>React: Enter Topic

React->>FastAPI: GET /generate-stream

FastAPI->>LangGraph: Execute Graph

LangGraph->>Writer: Generate Article

Writer-->>React: Writer Started

Writer->>Reviewer: Review Article

Reviewer-->>React: Reviewer Started

Reviewer->>Search: Latest Information?

Search-->>React: Search Started

Search->>Writer: Search Result

Writer-->>React: Rewrite Started

Writer->>Reviewer: Review Again

Reviewer-->>React: Approved

FastAPI-->>React: Final Article
```

------------------------------------------------------------------------

# 🧩 Project Structure

``` text
LangGraph-Multi-Agent-Article-Generator

├── backend
│   ├── agent.py
│   ├── main.py
│   ├── schema.py
│   ├── requirements.txt
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

------------------------------------------------------------------------

# ⚙️ Tech Stack

  Layer             Technology
  ----------------- ----------------------
  Backend           FastAPI
  Frontend          React + Tailwind CSS
  Agent Framework   LangGraph
  LLM               Mistral AI
  Orchestration     LangChain
  Search            Tavily Search
  Streaming         Server-Sent Events
  Language          Python, JavaScript

------------------------------------------------------------------------

# 🚀 Installation

## Backend

``` bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

## Frontend

``` bash
cd frontend
npm install
npm run dev
```

------------------------------------------------------------------------

# 🔑 Environment Variables

``` env
MISTRAL_API_KEY=YOUR_KEY
TAVILY_API_KEY=YOUR_KEY
```

------------------------------------------------------------------------

# 📡 REST API

### Generate Article

``` http
POST /generate
```

``` json
{
  "topic":"Artificial Intelligence"
}
```

### Stream Workflow

``` http
GET /generate-stream?topic=Artificial%20Intelligence
```

Events:

``` json
{
 "type":"step",
 "step":"Writer Agent"
}
```

``` json
{
 "type":"article",
 "article":"..."
}
```

------------------------------------------------------------------------

# 📸 Screenshots

Replace these placeholders after uploading images.

    docs/
     ├── landing-page.png
     ├── workflow.png
     ├── article.png
     ├── architecture.png

------------------------------------------------------------------------

# 🚀 Future Roadmap

-   Authentication
-   Export to PDF/DOCX
-   Multiple LLM Providers
-   LangSmith Tracing
-   Docker
-   Kubernetes
-   CI/CD
-   Persistent History
-   Multi-user Support
-   Parallel Agent Execution

------------------------------------------------------------------------

# 👨‍💻 Author

**Baljeet Kumar Patel**

If you found this project useful, consider giving it a ⭐ on GitHub.
