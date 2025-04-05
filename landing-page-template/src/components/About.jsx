import React from "react";

const About = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center gap-16">
      <div className="max-w-1/4">
        <img src="/about.png" alt="" srcset="" />
      </div>
      <div className="flex flex-col">
        <p className="text-3xl font-semibold text-blue-700">
          Qui sommes nous ?
        </p>
        <p class="text-gray-700 mt-4 max-w-2xl mx-auto">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero qui
          ut expedita ipsa nulla? Nobis ipsum dignissimos voluptate nam debitis,
          ea laboriosam magni. Autem laborum praesentium nostrum est, recusandae
          nobis?
        </p>
      </div>
    </div>
  );
};

export default About;
