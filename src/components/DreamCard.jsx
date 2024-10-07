import React from "react";

export default function DreamCard({
  title,
  description,
  price,
  image,
  svg,
  svg2,
}) {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-600/10">
      <img src={image} alt="property" />
      <div className="p-6">
        <h4 className="text-2xl font-bold cursor-pointer">{title}</h4>
        <div>{description}</div>
        <div className="mt-2">
          <span className="text-xl font-extrabold text-blue-600">{price}</span> /M
        </div>
      </div>
      <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
        <div className="flex items-center">
          {svg}
          <p>
            <span className="font-bold text-gray-900">3</span> Bedrooms
          </p>
        </div>
        <div className="flex items-center">
          {svg2}
          <p>
            <span className="font-bold text-gray-900">2</span> Bathrooms
          </p>
        </div>
      </div>
    </div>
  );
}
