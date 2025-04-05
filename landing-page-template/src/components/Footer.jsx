import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const MenuItems = ["Item1", "Item2", "Item3", "Item4"];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-start gap-4">
          <img src="/example-logo.png" alt="logo" className="w-32" />
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Tous droits réservés.
          </p>
        </div>

        {/* Menu Items */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Navigation</h3>
          <ul className="flex flex-col gap-2">
            {MenuItems.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-amber-400 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email : contact@monsite.com</li>
            <li>Téléphone : +213 555 66 77 88</li>
            <li>Adresse : 123 Rue Exemple, Alger</li>
          </ul>
        </div>

        {/* Réseaux Sociaux */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-500">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-blue-600">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
