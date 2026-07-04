const ArticleCard = ({ article }) => {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(article);
      alert("Article copied successfully!");
    } catch (error) {
      alert("Failed to copy article.");
    }
  };

  const downloadArticle = () => {
    const blob = new Blob([article], { type: "text/plain" });

    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "article.txt";

    link.click();

    window.URL.revokeObjectURL(url);
  };

  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl rounded-2xl bg-white p-6 shadow-lg">

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

          <h2 className="text-2xl font-bold text-slate-800">
            Generated Article
          </h2>

          <div className="flex gap-3">

            <button
              onClick={copyToClipboard}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
            >
              Copy
            </button>

            <button
              onClick={downloadArticle}
              className="rounded-lg bg-emerald-600 px-4 py-2 text-white transition hover:bg-emerald-700"
            >
              Download
            </button>

          </div>

        </div>

        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
          <p className="whitespace-pre-wrap leading-8 text-slate-700">
            {article}
          </p>
        </div>

      </div>
    </section>
  );
};

export default ArticleCard;