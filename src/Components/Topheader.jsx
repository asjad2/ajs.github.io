import Typewriter from "typewriter-effect";
import asjad from "./../Images/topheader.png";
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
                "I am a Computer Engineer & MERN Developer",
                "Who Stuck in coding",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 1500,
            }}
          />
        </div>
        <div className="flex flex-row  space-x-4  p-8 text-white font-semibold text-sm mt-10">
          <button className=" rounded-3xl w-fit p-2 bg-gradient-to-l from-[#000000] to-[#33BD94] active:from-[#063527]">
            My CV
          </button>
          <button className="bg-white w-fit rounded-3xl p-2 bg-gradient-to-l from-[#000000] to-[#33BD94] active:from-[#063527]">
            Work With me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topheader;
