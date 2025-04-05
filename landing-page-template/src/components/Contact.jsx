import React from "react";

const Contact = () => {
  return (
    <div className="bg-blue-600 py-16 px-6 text-center text-white flex flex-col justify-center items-center h-screen">
      <h2 className="text-3xl font-semibold">Contact</h2>
      <p className="mt-4 max-w-xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing el
      </p>
      <form className="mt-6 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Nom"
          className="data-form"
        />
        <input
          type="email"
          placeholder="Email"
          className="data-form"
        />
        <textarea
          placeholder="Votre message"
          className="data-form"
        ></textarea>
        <button className="bg-yellow-400 px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500">
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default Contact;
