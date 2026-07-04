import { useState } from "react";
import GenerateButton from "./GenerateButton";

const ArticleForm = ({ onGenerate, loading }) => {
  const [topic, setTopic] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!topic.trim()) return;

    onGenerate(topic);
  };

  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-lg">

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label
              htmlFor="topic"
              className="mb-2 block text-lg font-semibold text-slate-700"
            >
              Enter Topic
            </label>

            <textarea
              id="topic"
              rows={6}
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Example: Write an article about the future of Artificial Intelligence..."
              className="w-full resize-none rounded-xl border border-slate-300 p-4 text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
            />

            <div className="mt-2 flex justify-end">
              <span className="text-sm text-slate-500">
                {topic.length} Characters
              </span>
            </div>
          </div>

          <GenerateButton loading={loading} />

        </form>

      </div>
    </section>
  );
};

export default ArticleForm;