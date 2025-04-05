import React, { useEffect, useState } from "react";

const MenuItems = ["Item1", "Item2", "Item3", "Item4"];

const Nav = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShow(false); // on descend => cacher la navbar
      } else {
        setShow(true); // on monte => montrer la navbar
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 bg-white ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
    </div>
  );
};

export default Nav;
