import React from "react";
import { useState } from "react";
import { addMessages } from "../Service/api";

function ContactUs(props) {
  let [message, setMessage] = useState("");
  let [user, setUser] = useState({
    FullName: "",
    Email: "",
    Message: "",
  });

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setMessage(e.currentTarget.value);
    for (let letters in message) {
      let letterResult = Number(letters) + 1;
      props.setletterCounter(letterResult);
    }
    for (let words in message.split(" ")) {
      let wordResult = Number(words) + 1;
      props.setwordCounter(wordResult);
    }
  };
  const messagner = async (e) => {
     e.preventDefault();
    await addMessages(user);
    setUser({
      FullName: "",
      Email: "",
      Message: "",
    });
    setMessage("")
  };

  return (
    <section
      className={`text-black bg-${props.bgcolor} body-font shadow-lg shadow-[#000000] rounded-3xl p-8`}
      id="contactus"
    >
      <h1 className={`font-bold text-3xl text-center text-${props.txtcolor}`}>
        Contact US
      </h1>
      <div className="container px-5 py-8 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-white  rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{ filter: "grayscale(1) contrast(1.2) opacity(.4)" }}
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54735.15261170903!2d72.43668631288882!3d30.97196012232446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39230fcd3cedea4f%3A0xfe1c69fc6dc3525a!2sToba%20Tek%20Singh%2C%20Toba%20Tek%20Singh%20District%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1661031374316!5m2!1sen!2s"
          />
          <div className="bg-[#7ff0ce] relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">Toba Tek Singh, Punjab, Pakistan</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                EMAIL
              </h2>
              <a href className="text-grey-500 leading-relaxed">
                webwithaj@gmail.com
              </a>
              <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">+93-347-300-3142</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-[#7ff0ce] p-4 shadow-lg rounded-3xl shadow-[#7ff0ce] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className=" text-lg mb-1 font-medium title-font text-black">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Kindly provide constructive feedback regarding services or website
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={user.FullName}
              onChange={handleInputs}
              name="FullName"
              className="w-full bg-white rounded border focus:border-500 focus:ring-2 focus:ring-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              value={user.Email}
              onChange={handleInputs}
              id="email"
              name="Email"
              className="w-full bg-white rounded border  focus:border-500 focus:ring-2 focus:ring-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              name="Message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="Message"
              value={user.Message}
              onChange={handleInputs}
              className="w-full bg-white rounded border focus:border-500 focus:ring-2 focus:ring-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
            <h2 className="text-right">
              {props.letterCounter}/{props.wordCounter}
            </h2>
          </div>
          <button
            onClick={messagner}
            className="text-white bg-black border-0 py-2 px-6 focus:outline-none w-fit mx-auto rounded-2xl hover:bg-orange-700 text-lg"
          >
            Submit
          </button>
          <p className="text-xs text-gray-500 mt-3">
            Thankyou for taking your time.
          </p>
        </div>
      </div>
    </section>
  );
}
export default ContactUs;
