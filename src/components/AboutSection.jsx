import React from "react";
import Logo from "./Logo";
import about1 from "../assets/images/about/about-image-01.jpg";
import about2 from "../assets/images/about/about-image-02.jpg";
import HeroSvg from "./HeroSvg";
import AboutTitle from "./AboutTitle";
export default function AboutSection() {
  const dataSvg = [
    {
      id: 1,
      svg: (
        <HeroSvg>
          <svg
            width="106"
            height="144"
            viewBox="0 0 106 144"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.1"
              x="-67"
              y="47.127"
              width="113.378"
              height="131.304"
              transform="rotate(-42.8643 -67 47.127)"
              fill="url(#paint0_linear_1416_214)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1416_214"
                x1="-10.3111"
                y1="47.127"
                x2="-10.3111"
                y2="178.431"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </HeroSvg>
      ),
      className: "absolute left-0 top-0 -z-10",
    },
    {
      id: 2,
      svg: (
        <HeroSvg>
          <svg
            width="130"
            height="97"
            viewBox="0 0 130 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.1"
              x="0.86792"
              y="-6.67725"
              width="155.563"
              height="140.614"
              transform="rotate(-42.8643 0.86792 -6.67725)"
              fill="url(#paint0_linear_1416_215)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1416_215"
                x1="78.6495"
                y1="-6.67725"
                x2="78.6495"
                y2="133.937"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </HeroSvg>
      ),
      className: "absolute right-0 top-0 -z-10",
    },
    {
      id: 3,
      svg: (
        <HeroSvg>
          <svg
            width="175"
            height="104"
            viewBox="0 0 175 104"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.1"
              x="175.011"
              y="108.611"
              width="101.246"
              height="148.179"
              transform="rotate(137.136 175.011 108.611)"
              fill="url(#paint0_linear_1416_216)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1416_216"
                x1="225.634"
                y1="108.611"
                x2="225.634"
                y2="256.79"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </HeroSvg>
      ),
      className: "absolute bottom-0 right-0 -z-10",
    },
  ];
  return (
    <section
      id="about"
      className="bg-gray-1 pb-8 pt-20 dark:bg-dark-2 lg:pb-[70px] lg:pt-[120px]"
    >
      <div className="container">
        <div>
          <div className="-mx-4 flex flex-wrap items-center">
            <AboutTitle />
            <div className="w-full px-4 lg:w-1/2">
              <div className="-mx-2 flex flex-wrap sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[400px] md:h-[540px] lg:h-[400px] xl:h-[500px]">
                   <img src={about1} alt="" className="h-full w-full object-cover object-center" />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 sm:h-[220px] md:h-[346px] lg:mb-4 lg:h-[225px] xl:mb-8 xl:h-[310px]">
                   <img src={about2} alt="" className="h-full w-full object-cover object-center" />
                  </div>

                  <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-primary px-6 py-12 sm:mb-8 sm:h-[160px] sm:p-5 lg:mb-4 xl:mb-8">
                    <div>
                      <span className="block text-5xl font-extrabold text-white">
                        09
                      </span>
                      <span className="block text-base font-semibold text-white">
                        We have
                      </span>
                      <span className="block text-base font-medium text-white text-opacity-70">
                        Years of experience
                      </span>
                    </div>
                    <div>
                      {dataSvg.map((item) => (
                        <span key={item.id} className={`${item.className}`}>{item.svg}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
