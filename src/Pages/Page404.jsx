import { Link } from "react-router-dom";
import svg404 from "./../Images/404svg.svg";
const Page404 = (props) => {
  return (
    <section className={`bg-${props.bgcolor}  text-${props.txtcolor} container font-Roboto  body-font `}>
      <div className=" mx-auto container p-8">
        <div className=" flex flex-col p-8 bg-[#7ff0ce] w-fit mx-auto justify-center  shadow-lg shadow-[#7ff0ce] rounded-xl">
          <img src={svg404} alt="Not Found" className="flex w-96 mx-auto" />
          <div className=" flex flex-col gap-4 text-center font-bold items-center rounded-lg ">
            <h1 className={`font-Poppins mt-8 text-xl text-${props.headtxtcolor}`}>404 Not Found</h1>
            <p className={`text-md `}>
              The page you are looking for is no longer available, under
              maintenance or might never existed
            </p>
            <p className="text-sm">
              Click on Home Button to return to Home Page
            </p>
          </div>
          <Link to="/portfolio">
            <button className="bg-black text-white mt-6 flex mx-auto rounded-lg p-2 animate-bounce">
              Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page404;
