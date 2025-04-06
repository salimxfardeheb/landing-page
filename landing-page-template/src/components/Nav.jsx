import React, { useState } from "react";

const MenuItems = ["Item1", "Item2", "Item3", "Item4"];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="max-w-60">
          <img src="/example-logo.png" alt="logo" className="h-10" />
        </div>

        {/* Burger Icon (mobile only) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-3xl focus:outline-none"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Menu (desktop only) */}
        <div className="hidden md:flex items-center gap-20">
          <ul className="flex gap-8">
            {MenuItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="text-xl hover:opacity-65">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-400 text-lg">
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Menu (visible only when open) */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4">
            {MenuItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="text-lg block hover:opacity-65">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-400 text-lg">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
};

export default Nav;
