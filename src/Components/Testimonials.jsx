import React, { useState, useEffect } from "react";
import { getMessages } from "../Service/api";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function Testimonial(props) {
  const [getMessage, setgetMessage] = useState([]);

  const showMessages = async () => {
    const result = await getMessages();
    setgetMessage(result.data);
  };

  useEffect(() => {
    showMessages();
  }, [getMessage]);

  const { height, width } = getWindowDimensions();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesToShow: width > 1000 ? 3 : 1,
  };

  return (
    <div
      className={` bg-${props.bgcolor} text-${props.txtcolor} text-${props.txtxolor} w-full space-y-4 `}
    >
      <h1 className={`font-bold text-2xl text-center`}>Testimonials</h1>
      <div className=" rounded-xl space-y-4 ">
        <div className="lg:w-5/5  md:w-3/3 md:pr-10 md:py-6 p-6 bg-[#7ff0ce]   shadow-black shadow-lg rounded-3xl mx-auto ">
          <Slider {...settings}>
            {getMessage.map((info, id) => {
              return (
                <div className=" w-fit  p-4  rounded-2xl ">
                  <h3 className={`text-sm w-fit rounded-2xl p-1 text-black`}>
                    {`${info.FullName}`}
                  </h3>
                  <h3 className="text-sm bg-gray-500 w-fit rounded-3xl p-1">{`${info.Email}`}</h3>
                  <h3 className="">{`${info.Message}`}</h3>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
