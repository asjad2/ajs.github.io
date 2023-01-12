import Typewriter from "typewriter-effect";
import asjad from "./../Images/topheader.png";
import { Link } from "react-router-dom";
const Topheader = () => {
  return (
    <div className="container flex flex-col lg:flex-row-reverse lg:justify-between p-8  items-center  bg-gradient-to-l from-[#dcfff4] to-[rgb(51,189,148)] "> 
      <img
        src={asjad}
        alt="developer"
        className="lg:w-96 lg:h-96 w-60 h-60 "
      />

      <div className="text-white p-12  text-2xl font-bold  lg:text-left  ">
        <h1>My Name is Asjad Iftikhar</h1>
        <div className="h-20 w-96 ">
          <Typewriter
            options={{
              strings: [
                "Computer Engineer & MERN Developer",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 1500,
            }}
          />
        </div>
        <div className="flex flex-row  space-x-4  p-8 text-white font-semibold text-sm mt-10">
          <button className=" btn">
            My CV
          </button>
          <Link to="/portfolio/projects">
          <button className="btn">
            Work With me
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topheader;
