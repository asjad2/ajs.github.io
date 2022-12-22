import React from "react";
import Technology from "./../Images/technology.svg";
import PManagement from "./../Images/pmanagement.svg";
import Relationship from "./../Images/relationship.svg";
import { Link } from "react-router-dom";
import FeaturesData from "./../Data/FeaturesData";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();
console.log(FeaturesData)
function Features(props) {
  return (
    <section
      className={`bg-${props.bgcolor} text-${props.txtcolor} font-Roboto body-font p-8 rounded-3xl shadow-lg shadow-[#000000] `}
      id="whyme"
    >
      <div className=" px-5  mx-auto">
        <h1 className="font-Poppins  text-center font-extrabold text-3xl pb-4 ">
          Why me?
        </h1>
        <section className="flex lg:flex-row flex-col gap-8">
          {FeaturesData.map((feature, index) => (
            <div className="flex bg-[#7ff0ce] p-5 shadow-lg  shadow-[#33BD94] items-center lg:w-2/6 mx-auto border-b pb-10 mb-10 border-[#33BD94] flex-col  rounded-3xl">
              <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center rounded-full border-[#33BD94] text-black flex-shrink-0">
                <img src={feature.img} alt="Technology Innovation" />
              </div>
              <div
                data-aos="fade-right"
                className=" flex-grow sm:text-left text-center mt-6 sm:mt-0"
              >
                <h2 className="font-Poppins text-Black text-lg font-bold title-font mb-2 text-black">
                  {feature.title}
                </h2>
                <p className="leading-relaxed text-base">
                  {feature.description}
                </p>
                <Link
                  to="/about"
                  className="mt-3 text-Black inline-flex items-center text-black"
                >
                  Learn More
                  <BsFillArrowRightCircleFill className="w-4 h-4 mt-1 ml-2 animate-pulse" />
                </Link>
              </div>
            </div>
          ))}
        </section>
      </div>
    </section>
  );
}

export default Features;
