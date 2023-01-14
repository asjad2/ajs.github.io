import { Link } from "react-router-dom";
import gameicon from "./../Images/Sidebar/gameicon.svg";
import rps from "./../Images/Sidebar/rps.svg";
import superhero from "./../Images/Sidebar/superhero.svg";
import fightgame from "./../Images/Sidebar/fightgame.svg";

const Sidebar = ({open,setOpen,video,setVideo}) => {
  
  const Menus = [
    { path: "portfolio/projects/rps", title: "RPS", img: rps, gap: true },
    { path: "portfolio/projects/weather", title: "Weather", img: superhero, gap: true },
    { path: "portfolio/projects/superhero", title: "Super Heroes", img: fightgame, gap: true },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-52 h-full" : "w-10 h-full"
        } bg-black   pt-8 relative duration-300`}
      >
        <img
          src={gameicon}
          className={`absolute cursor-pointer animate-bounce -right-10 top-9 w-10 border-black
           border-2 rounded-full `}
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
           <li
              
              className={`flex  rounded-md cursor-pointer text-sm w-10 hover:bg-light-white text-white items-center gap-x-4 
              ${true ? "mt-9" : "mt-2"} `}
            >
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEDElEQVR4nO1YS0gVYRT+WnRNCqLu9ZE93PggelgitKp9ZEK7ICiLzBaBRERGtewdVka1zwo0qSAkaxH5SioiWpWVkouspIWYj3zeOPD9cRrmee+1JOaDYeacOf8/8835//MYIESIECFChAjx/yEe4PhXeALgDYCNf5NIDMBuAHcAvALQB2CMZ5EbAJTTzi/iPKYBHPYy8nvthEIAjQAmfX6USZItCEAkzqNqJoikAagFMEGbEQAPAOwFUAxgCYAIzyJX8P4o7ccBXOI8XkRO8SweXpdKIlkAOtTkQigD/pAJ4ArHyfh26tyICG7zujlVRIRED/UfAaxCYlgNoJvzdDuQ0c/PBjBIeWWyRNKUJ+RLRi0PzgVwHEAbgH4A9z3IyHgzXxuXotM7Cm5SPpEskVrlCU1iPoDzXPd6cz6EN2LKwxc9iOyg/DgZIoXc2GOW5SRL4gXt5H4dgM1cCn6xlh9BjnwXInnqQ9oaiVtbba61TSOvxSsG8wC8pP4dgDVIHFc5T4MLkQWUh/TAH1SmO0wcUWE1g/F/xLIpa2jTZbNfgiKLoXlCzWUlkq7e6Te6qHRKTLm838OMHWceMFgB4CcJJuMJjSY+Z5cDkXzKn/Sg61SehD2qeL+OmTjOZGdwjLobSB32WZaXlcgeyvescXyCX1SyrsY2AMOscTaxVoozQxu0U7clhURKOOdbByLNlGWF/IGDyni/Yj1N3QXq+ihLuWHwhbog0ckLOZxz0IZIjoqai+wGV9C4l3Iv5UPKxpQTEQ9dUEjYNhFSB5hJGyJHeS3L3BFeZYmdRz7b6BL5+t98esTkqrJkiNjtkTbqShMkUsrxT33ukSE/S9mLSAN1OihUUyf1TyIw1Wy10lW6RC279wpMpNwmjyxnApP1XBSQRDHHyT6Teax5ZOdMEYnxwaOWzH6Oth8CZPYY7WXcaaXP9sjsKSEClRSlKdK1Vqci4+WZ9QDe077TUh5do74+4HsFJlLA6nSMydRAPPSMY6YA3AKwlRHItLpl3BNTtHtu6SiLVPWbN9NEBJdVRxe1NFxnVT/udIzSLs2hH6lJ8L0CD4io0qTD5teObNwjAFqYZ8zvoBZGp2UWexlvvNnq0SGmlIhZSrrXlqYoERQpT3Q79OzmF9NctXRdYX7pmHpfZDdkqoQ4zqZI+gk/yObGHleeyHSwHabNYp6lbXCFyZpLeZamywsR9tjjav03sRQvUZs9h3Il7+v/WrIn3Gq17+qvSZyyK/ppuIHnr/CPfIbMIH8a6y3RyQmvVaOlSxdHtNLwjHJ3UET5wAb27wOca4ByPTN2NIEyppNn8agrzC9Jc4g8G7Dd8l4HvAZIo/KITb10YQsxOzCHuUu8epfRK0SIECFChEAq8AtncyQoEdBvhQAAAABJRU5ErkJggg==" className={`${open && "bg-[#33BD94] rounded-full p-1 w-10 h-10"}
                w-8 h-8 bg-[#33BD94] rounded-full 
                `}/>
           
              <a href="https://asjad2.github.io/ichirakuramen/" target="_blank">
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-lg hover:text-xl`}
                >
                  Ichiraku Ramen
                </span>
              </a>
            </li>
            <li
              
              className={`flex  rounded-md cursor-pointer text-sm w-10 hover:bg-light-white text-white items-center gap-x-4 
              ${true ? "mt-9" : "mt-2"} `}
            >
              
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACdUlEQVR4nO2Yu2sVQRTGf4mvItpFDRrxAWKjYGFlY1IIaUQUOyWiUfwLRFPG2IsgCAEJBA3RIAlqZSWx0sIHWKnRQrAQBPPykagjA9/V4XJz3b2Zdc/KfjAQdr/55nz3TM6cHSjxf6IdGAWmAZdweO5tYDuGTHxMYaB6+LkbMYBRBXQ3ZUCee09zb2IA0wqmkV91k+Z+wgCcRl7zo6E0knVG1gH9wFNgdgnVKPaYBZ4AF4C1fzNxJOVZkNeYAg7XM/FTxDFgH9CCHbQAHcC4YvwBHKq1nSqZOIt9nAvKdmv4oj/IRFFwRzH3hQ+f6aHfTkVBp2L2BeA3ZvRwNcXBmqD5zKyWb1PKHwAfgG/AfaCZuHDVcccy4gO9CMzXKZu+dd+JcSNXpfMdGAaOAXuAo8DnYB3/9wGrRjqlMVOnaGwFbgQn9WaLRkZSnEOVQ+2KRSPvpLElAXeXuJMWjXyVxsoE3FXifrFo5E2KjLSL6+eYMzIojTMJuN3iXrdo5Lk0Dibg7hf3pUUjk9LYnYC7Q9z3Fo0MSOOt/pkXw3JlwnOHLBppBV4k6KL3iuO34nqrLUqfdG4lODh7I6znsjKyAZiTVk+N9z1Br9Vm2YjHiSDYalQax5PEgcvSSD29zNdxERfokJZvWRZrYzzHpJFmoEs38wvSulSDd1nvFsTtWuJXo4tp5DjwOtCY122gPy+qsUI3NuEX5Cu1LI0gipEm4Fow15/s5xNWozZxK92Ak1ZTHkZOB9/h3Q1ukWWaOyWtU3kYeRzxYOuV1qM8jISXCbHGXB5GHmZgZCIPIxbgSiPG4MqMFCUjrqAj01L6r8bEHxslMINfUhMWFHEy3bQAAAAASUVORK5CYII=" className={`${open && "bg-[#33BD94] rounded-full p-1 w-10 h-10"}
                w-8 h-8 bg-[#33BD94] rounded-full 
                `}/>
                
              
                <span
                  className={`${
                    !open && "hidden"
                  } origin-left duration-200 text-lg hover:text-xl`} onClick={()=>setVideo(!video)}
                >
                  Portfolio MERN
                </span>
              
            </li>
        </ul>
      </div>
      <div className="h-screen"> </div>

    </div>
  );
};
export default Sidebar;
