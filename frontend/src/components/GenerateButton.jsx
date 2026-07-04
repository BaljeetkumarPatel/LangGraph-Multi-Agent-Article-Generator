const GenerateButton = ({ loading }) => {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg disabled:cursor-not-allowed disabled:bg-slate-400"
    >
      {loading ? "Generating..." : "Generate Article"}
    </button>
  );
};

export default GenerateButton;