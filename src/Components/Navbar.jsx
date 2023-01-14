import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import profile from "./../Images/1.svg";
import {
  BsFillArrowRightCircleFill,
  BsMoonStars,
  BsPersonCircle,
} from "react-icons/bs";
function Navbar(props) {
  
  function colorsetting() {
    if (props.bgcolor === "black") {
      props.setbgcolor("white");
      props.settxtcolor("black");
      props.setheadtxtcolor("white");
    } else {
      props.setbgcolor("black");
      props.settxtcolor("white");
      props.setheadtxtcolor("black");
    }
  }
  return (
    <header className="container items center p-8 font-Roboto text-black hover:text-white text-xl bg-gradient-to-l from-[#dcfff4] to-[#33BD94]  hover:to-[#000000] ">
      <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
        <Link
          to="/portfolio"
          className="flex title-font font-medium items-center mb-4 md:mb-0"
        >
          <img
            className="w-14 rounded-full hover:animate-spin"
            src={profile}
            alt="soon"
          />
          <span className="ml-3 font-Poppins ">{`<Asjad Iftikahr/>`}</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link
            to="/portfolio"
            className="mr-5 hover:text-[#33BD94] hover:border-b-2 hover:transition-shadow border-white  "
          >
            Home
          </Link>
          <HashLink
            to="portfolio/#about"
            className="mr-5 hover:text-[#33BD94] hover:border-b-2 after:transition-transform border-white  sm:font-normal "
            smooth
          >
            About
          </HashLink>
          <HashLink
            to="portfolio/#services"
            className="mr-5 hover:text-[#33BD94] hover:border-b-2 border-white  "
            smooth
          >
            Services
          </HashLink>
          <HashLink
            to="portfolio/#contactus"
            className="mr-5 hover:text-[#33BD94] hover:border-b-2 border-white  sm:font-normal "
            smooth
          >
            Contact US
          </HashLink>
          <Link
            to="/portfolio/blog"
            className="mr-5 hover:text-[#33BD94] hover:border-b-2 border-white  "
          >
            Blogs
          </Link>

          <Link
            to="portfolio/projects "
            className="mr-5 hover:text-[#33BD94] hover:border-b-2 border-white  "
            data-dropdown-toggle="dropdown"
          >
            Projects
          </Link>
          <button>
            {" "}
            <BsMoonStars onClick={colorsetting} className={`w-10 h-10 p-2 rounded-xl text-${props.txtcolor} bg-${props.headtxtcolor}`} />
          </button>
        </nav>

        {props.auth ? (
          <Link to="/portfolio/profile">
            <BsPersonCircle className="w-8 h-8" />
          </Link>
        ) : (
          <Link to="/portfolio/login">
            <button className="inline-flex items-center text-white border-0 py-1 px-3 focus:outline-none mt-4 md:mt-0 btn">
              Login
              <BsFillArrowRightCircleFill className="m-1 mt-2" />
            </button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;
