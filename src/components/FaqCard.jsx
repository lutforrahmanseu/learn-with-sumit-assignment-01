import React from "react";

export default function FaqCard({ title, descriptions, svg }) {
  return (
    <div className="w-full px-4 lg:w-1/2">
      <div className="mb-12 flex lg:mb-[70px]">
        {svg}
        <div className="w-full">
          <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </h3>
          <p className="text-base text-body-color dark:text-dark-6">
            {descriptions}
          </p>
        </div>
      </div>
    </div>
  );
}
