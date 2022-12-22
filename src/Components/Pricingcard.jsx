import React from "react";

function Pricingcard({ item }) {
  const {
    category,
    title,
    description1,
    description2,
    description3,
    description4,
    description5,
    description6,
    description7,
    message,
  } = item;
  return (
    <section className="text-black bg-black body-font overflow-hidden">
      <div className="p-4  w-full ">
        <div className="bg-[#7ff0ce] shadow-lg  shadow-[#7ff0ce]  rounded-3xl h-full p-6 flex flex-col">
          <h2 className="text-sm tracking-widest bg-white w-fit p-2 rounded-3xl text-red-400 title-font mb-1 font-mono">
            {category}
          </h2>
          <h1 className="text-2xl text-black pb-4 mb-4 border-b leading-none">
            {title}
          </h1>
          <p className="flex items-center text-gray-600 mb-6">
            <input
              type="checkbox"
              className="rounded-full w-4 h-4 mr-2 inline-flex items-center justify-center bg-white text-white  flex-shrink-0"
            />
            {description1}
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <input
              type="checkbox"
              className="rounded-full w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white  flex-shrink-0"
            />
            {description2}
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <input
              type="checkbox"
              className="rounded-full w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white  flex-shrink-0"
            />
            {description3}
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <input
              type="checkbox"
              className="rounded-full w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white  flex-shrink-0"
            />
            {description4}
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <input
              type="checkbox"
              className="rounded-full w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white  flex-shrink-0"
            />
            {description5}
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            <input
              type="checkbox"
              className="rounded-full w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white  flex-shrink-0"
            />

            {description6}
          </p>
          <p className="flex items-center text-gray-600 mb-6">
            {description7}
            <input
              type="file"
              className="rounded-full   mr-2  items-center justify-center bg-gray-400 text-white "
            />
          </p>
          <button className="flex  w-fit items-center  mx-auto text-white bg-black  border-0 py-2 px-4 focus:outline-none active:bg-gray-800 rounded-xl ">
            Hire
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 ml-auto"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <p className="text-xs text-gray-500 mt-3">{message}</p>
        </div>
      </div>
    </section>
  );
}

export default Pricingcard;
