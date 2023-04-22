import React from "react";
import Card from "@/components/card";

const values = [
  {
    id: 1,
    src: "/values/1.png",
    title: "CREATIVITY",
    description:
      "We believe that creativity is the key to success. We are always looking for new ideas and solutions to solve problems.",
  },
  {
    id: 2,
    src: "/values/2.png",
    title: "INNOVATION",
    description:
      "We believe that innovation is the key to success. We are always looking for new ideas and solutions to solve problems.",
  },

  {
    id: 3,
    src: "/values/3.png",
    title: "TEAMWORK",
    description:
      "We believe that teamwork is the key to success. We are always looking for new ideas and solutions to solve problems.",
  },
];

export default function OurValues() {
  return (
    <div className="w-full h-full min-h-screen bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-orange-500">
            Our Values
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            This is our way of living.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div className="w-full h-full">
            <Card props={values} />
          </div>
        </div>
      </div>
    </div>
  );
}
