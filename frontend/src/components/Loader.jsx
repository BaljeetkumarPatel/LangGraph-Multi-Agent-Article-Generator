const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12">

      <div className="h-14 w-14 animate-spin rounded-full border-4 border-slate-300 border-t-blue-600"></div>

      <h2 className="mt-6 text-xl font-semibold text-slate-700">
        Generating Your Article...
      </h2>

      <p className="mt-2 text-center text-sm text-slate-500 sm:text-base">
        Our AI Writer, Reviewer, and Search Agent are collaborating to create
        the best possible article.
      </p>

    </div>
  );
};

export default Loader;