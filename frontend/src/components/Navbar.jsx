const Navbar = () => {
  return (
    <nav className="w-full bg-slate-900 text-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        
        <h1 className="text-lg font-bold tracking-wide sm:text-xl md:text-2xl">
          AI Article Generator
        </h1>

        <span className="text-xs text-slate-300 sm:text-sm">
          Made by Baljeet Kumar Patel
        </span>

      </div>
    </nav>
  );
};

export default Navbar;