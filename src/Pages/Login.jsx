import React, { useState } from "react";
import signupsvg from "./../Images/login.svg";
import { loginMembers } from "../Service/api";
import { Link } from "react-router-dom";

function Login(props) {
  const [isAuthentic,setIsAuthentic]=useState(false);
  let [loginmember, setloginMember] = useState({
    User: "",
    Password: "",
  });

  const handleMembers = (e) => {
    setloginMember({ ...loginmember, [e.target.name]: e.target.value });
  };
  const loginMessagner = async (e) => {
    e.preventDefault();
    let res = await loginMembers(loginmember);
    setloginMember({
      User: "",
      Password: "",
    });
    if ((res.status = 200)) {
      setIsAuthentic(!props.auth);
     
    } else {
      setIsAuthentic(!props.auth);
      
    }
    
  };
  props.authentication(isAuthentic);

  return (
    <div className={`bg-${props.bgcolor} text-${props.txtcolor} container `}>
      <h1 className="text-center pb-6 text-3xl font-bold py-4 ">Log in!!!</h1>
      <div className=" p-8 flex flex-col lg:flex-row container mx-auto">
        <img src={signupsvg} alt="soon" className="lg:w-[40rem]" />
        <div className="  bg-[#7ff0ce] lg:ml-auto w-fit p-8 flex mx-auto rounded-3xl shadow-lg shadow-[#7ff0ce]">
          <form>
            <div className=" grid grid-flow-row lg:gap-8 text-lg font-bold ">
              <div className="flex flex-col">
                <label className="text-center" for="username">
                  Username/Email
                </label>
                <input
                  type="text"
                  name="User"
                  onChange={handleMembers}
                  value={loginmember.User}
                  className="p-2 rounded-3xl text-center"
                />
              </div>

              <div className="flex flex-col  ">
                <label className="text-center" for="password">
                  Password
                </label>
                <input
                  name="Password"
                  type="password"
                  className="p-2 rounded-3xl text-center"
                  onChange={handleMembers}
                  value={loginmember.Password}
                />
              </div>
            </div>
            <div className="flex flex-row space-x-6 justify-center mt-4">
              <button
                className=" bg-black rounded-xl  text-white p-2 active:bg-gray-800 "
                onClick={loginMessagner}
              >
                Log in
              </button>
              <Link to="/portfolio/signup">
                <button className="  bg-black rounded-xl  text-white p-2 active:bg-gray-800 ">
                  {" "}
                  Sign Up
                </button>
              </Link>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
