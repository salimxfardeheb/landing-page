import React from "react";

const MenuItems = ["Item1", "Item2", "Item3", "Item4"];

const Nav = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center px-12 shadow-2xl">
        {/* Logo */}
        <div className="max-w-60">
          <img src="/example-logo.png" alt="logo" />
        </div>
        <div className="flex items-center gap-20">
          {/* Menu Items */}
          <div>
            <ul className="flex justify-between items-center gap-8">
              {MenuItems.map((data, index) => {
                return (
                  <li key={index}>
                    <a href="#" className="text-xl hover:opacity-65">
                      {data}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/*button contact */}
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-400 text-lg">
            Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
