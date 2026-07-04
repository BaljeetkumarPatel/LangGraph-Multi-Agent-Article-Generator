import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ArticleForm from "../components/ArticleForm";
import Loader from "../components/Loader";
import ArticleCard from "../components/ArticleCard";
import { generateArticle,generateArticleStream } from "../services/api";
import Workflow from "../components/Workflow";
import WorkflowDiagram from "../components/WorkflowDiagram";
import WorkflowStatus from "../components/WorkflowStatus";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [article, setArticle] = useState("");
  const [workflow, setWorkflow] = useState([]);
  const handleGenerate = (topic) => {
    setLoading(true);

    // Clear previous result
    setArticle("");
    setWorkflow([]);

    generateArticleStream(
      topic,

      // Workflow callback
      (workflow) => {
        setWorkflow(workflow);
      },

      // Final Article callback
      (article) => {
        setArticle(article);
        setLoading(false);
      },

      // Error callback
      (error) => {
        console.error(error);
        alert("Failed to generate article.");
        setLoading(false);
      }
    );
  };

  return (
    <div>
      <div className="min-h-screen bg-slate-100">
        <Navbar />

        <Hero />
        {/* <Workflow /> */}
        <WorkflowStatus
          workflow={workflow}
          loading={loading}
        />
        <ArticleForm
          onGenerate={handleGenerate}
          loading={loading}
        />

        {loading && <Loader />}

        {!loading && article && (
          <ArticleCard article={article} />
        )}
        
      </div>
      <WorkflowDiagram />
    </div>
    
  );
};

export default Home;