import { Link } from "react-router-dom";
import gameicon from "./../Images/Sidebar/gameicon.svg";
import rps from "./../Images/Sidebar/rps.svg";
import superhero from "./../Images/Sidebar/superhero.svg";
import fightgame from "./../Images/Sidebar/fightgame.svg";

const Sidebar = ({open,setOpen}) => {
  
  const Menus = [
    { path: "projects/rps", title: "RPS", img: rps, gap: true },
    { path: "projects/weather", title: "Weather", img: superhero, gap: true },
    { path: "projects/superhero", title: "Super Heroes", img: fightgame, gap: true },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-52" : "w-10"
        } bg-black h-full  pt-8 relative duration-300`}
      >
        <img
          src={gameicon}
          className={`absolute cursor-pointer animate-bounce -right-10 top-9 w-10 border-black
           border-2 rounded-full  ${!open}`}
          onClick={() => setOpen(!open)}
        alt="Soon" />
        <div className="flex gap-x-4 items-center">
          <img
            src={gameicon}
            className={`cursor-pointer duration-500  ${
              open && "rotate-[360deg] w-2/3 flex mx-auto"
            }`}
            alt="Soon" />
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md cursor-pointer text-sm w-10 hover:bg-light-white text-white items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} `}
            >
              
              <img
                key={index}
                src={Menu.img}
                className={`${open && "bg-[#33BD94] rounded-full p-1 w-10 h-10"}
                w-8 h-8 bg-[#33BD94] rounded-full 
                `}
                alt="Soon"/>
              <Link to={`/${Menu.path}/`}>
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-lg hover:text-xl`}
                >
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen"> </div>

    </div>
  );
};
export default Sidebar;
