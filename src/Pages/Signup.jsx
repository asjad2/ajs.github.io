import React, { useState } from "react";
import signupsvg from "./../Images/signup.svg";
import { addMembers } from "../Service/api";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  FullName: yup.string().required("Name is Required!"),

  UserName: yup.number().required("UserName is Required!"),

  Password: yup
    .string()
    .matches(
      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is Required!"),
    confirmPassword: yup
    .string()
    .matches(
      /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is Required!"),

  PhoneNumber: yup.number().required("Phone is Required!"),

  Email: yup.string().required("Email is Required!"),
});

function Signup(props) {
  let [member, setMember] = useState({
    FullName: "",
    UserName: "",
    Email: "",
    PhoneNumber: "",
    Password: "",
    confirmPassword: "",
  });

  const handleMembers = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };
  const memberMessagner = async (e) => {
    e.preventDefault();
    await addMembers(member);
    setMember({
      FullName: "",
      UserName: "",
      Email: "",
      PhoneNumber: "",
      Password: "",
      confirmPassword: "",
    });
  };
  return (
    <div className={`bg-${props.bgcolor} text-${props.txtcolor} container `}>
      <h1 className="text-center pb-6 text-3xl font-bold py-4 ">Join us!!!</h1>
      <div className=" p-8 flex flex-col lg:flex-row container mx-auto">
        <img src={signupsvg} alt="soon" className="lg:w-[40rem]" />
        <div className="  bg-[#7ff0ce] lg:ml-auto w-fit p-8 flex mx-auto rounded-3xl shadow-lg shadow-[#7ff0ce]">
          <form>
            <div className=" grid  lg:grid-cols-2 lg:gap-8 text-lg font-bold ">
              <div className="flex flex-col ">
                <label className="text-center" for="fullname">
                  Full Name
                </label>
                <input
                  type="text"
                  name="FullName"
                  onChange={handleMembers}
                  value={member.FullName}
                  className="p-2 rounded-3xl text-center"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-center" for="username">
                  Username
                </label>
                <input
                  type="text"
                  name="UserName"
                  onChange={handleMembers}
                  value={member.UserName}
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
                  id="password"
                  className="p-2 rounded-3xl text-center"
                  onChange={handleMembers}
                  value={member.Password}
                />
              </div>

              <div className="flex flex-col  ">
                <label className="text-center" for="confirmpassword">
                  Confirm Password
                </label>
                <input
                  name="confirmPassword"
                  type="password"
                  className="p-2 rounded-3xl text-center"
                  value={member.confirmPassword}
                  onChange={handleMembers}
                />
              </div>

              <div className="flex flex-col ">
                <label className="text-center" for="EmailAddress">
                  Email
                </label>
                <input
                  type="email"
                  name="Email"
                  onChange={handleMembers}
                  value={member.Email}
                  className="p-2 rounded-3xl text-center"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="flex flex-col  ">
                <label className="text-center" for="phoneNumber">
                  Phone Number
                </label>
                <input
                  name="PhoneNumber"
                  type="tel"
                  className="p-2 rounded-3xl text-center"
                  onChange={handleMembers}
                  value={member.PhoneNumber}
                />
              </div>
            </div>

            <button
              className="my-4 flex mx-auto bg-black rounded-xl  text-white p-2 active:bg-gray-800 "
              onClick={memberMessagner}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
