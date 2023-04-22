import React from "react";

function Index({ props }) {
  return (
    <>
      <div className="flex flex-wrap justify-center">
        {props.map((item) => (
          <div
            key={item.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded-lg shadow-md m-3 bg-orange-500"
          >
            <div className="flex items-center justify-center">
              <img
                src={item.src}
                alt="profile"
                className="w-10 h-10 rounded-full my-4"
              />
            </div>
            <div className="text-center px-8 pb-3">
              <p className="text-white text-md font-semibold ">{item.title}</p>
            </div>
            <div className="text-center px-8 pb-6">
              <p className="text-white text-sm font-normal ">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Index;
