import React from "react";

export default function MenuLink() {
  const menuLink = [
    {
      id: 1,
      name: "Home",
      link: "#home",
    },
    {
      id: 2,
      name: "About",
      link: "#about",
    },
    {
      id: 3,
      name: "Pricing",
      link: "#pricing",
    },
    {
      id: 4,
      name: "Blog",
      link: "#blog",
    },
  ];
  return (
    <div>
      <ul className="hidden lg:flex ">
        {menuLink.map((item) => (
          <li key={item.id} className="group relative px-6 py-3">
            <a
              href={item.link}
              className="inline-flex items-center justify-between w-full font-medium text-white group-hover:text-white-600"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      
    </div>
  );
}
