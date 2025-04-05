import React from "react";

const section = () => {
  const itemsSection = [
    {
      title: "title 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis",
    },
    {
      title: "title 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis",
    },
    {
      title: "title 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis",
    },
  ];
  return (
    <div
      id="program"
      class="py-16 px-6 text-center flex justify-center items-center flex-col h-screen"
    >
      <h2 class="text-3xl font-semibold text-blue-700">Big Title</h2>
      <p class="text-gray-700 mt-4 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error quis
        deserunt autem voluptatem saepe placeat, doloribus voluptas dolorum
        nesciunt fugiat laboriosam modi voluptate nemo? Placeat ea vel cumque
        veniam explicabo..
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-6">
        {itemsSection.map((data) => {
          return (
            <div className="bg-white p-6 rounded-lg shadow-md w-72">
              <h3 className="text-xl font-bold text-blue-600">{data.title}</h3>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default section;
