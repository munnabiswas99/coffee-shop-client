import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="relative bg-[#3b2a23] text-white overflow-hidden mb-4">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between gap-3">
        <Link to={'/'}>Home</Link>

        {/* Title */}
        <Link to="/">
          <h1 className="text-3xl md:text-4xl font-bold font-serif tracking-wide">
            Espresso Emporium
          </h1>
        </Link>
        <Link to={'/addCoffee'}>Add Coffee</Link>
      </div>
    </header>
  );
};

export default Header;