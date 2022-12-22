import React from "react";
import * as yup from "yup";
import signupsvg from "./../Images/signup.svg";
import { useFormik, Formik, ErrorMessage } from "formik";

const validationSchema = yup.object({
  FullName: yup.string().required("Name is Required!"),

  Password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    )
    .required("Password is Required!"),

  PhoneNumber: yup.string().required("Phone is Required!"),

  Email: yup.string().required("Email is Required!"),
  Username: yup.string().required("Email is Required!"),

  ConfirmPassword: yup
    .string()
    .oneOf([yup.ref("Password"), null], "Passwords must match"),
});
const renderError = (message) => <p className="help is-danger">{message}</p>;

function Signup(props) {
  const formik = useFormik({
    initialValues: {
      FullName: "",
      Username: "",
      Password: "",
      ConfirmPassword: "",
      Email: "",
      PhoneNumber: "",
    },

    // onSubmit: async (values, { resetForm }) => {
    //   await addApplicant(values);
    //   resetForm({ values: "" });
    // },
  });

  return (
    
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        FullName: "",
        Username: "",
        Password: "",
        ConfirmPassword: "",
        Email: "",
        PhoneNumber: "",
      }}
    >
      <div className={`bg-${props.bgcolor} text-${props.txtcolor} container `}>
      <h1 className="text-center pb-6 text-3xl font-bold py-4 ">Join us!!!</h1>
      <div className=" p-8 flex flex-col lg:flex-row container mx-auto">
        <img src={signupsvg} alt="soon" className="lg:w-[40rem]" />
        <div className="  bg-[#7ff0ce] lg:ml-auto w-fit p-8 flex mx-auto rounded-3xl shadow-lg shadow-[#7ff0ce]">
          <form onSubmit={formik.handleSubmit}>
            <div className=" grid  lg:grid-cols-2 lg:gap-8 text-lg font-bold ">
              <div className="flex flex-col ">
                <label className="text-center" for="fullname">
                  Full Name
                </label>
                <input
                  type="text"
                  name="FullName"
                  onChange={formik.handleChange}
                  value={formik.values.FullName}
                  className="p-2 rounded-3xl text-center"
                  id="exampleFormControlInput1"
                />
              </div>

              <div className="flex flex-col">
                <label className="text-center" for="username">
                  Username
                </label>
                <input
                  type="text"
                  name="Username"
                  onChange={formik.handleChange}
                  value={formik.values.Username}
                  className="p-2 rounded-3xl text-center"
                  id="exampleFormControlInput1"
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
                  onChange={formik.handleChange}
                  value={formik.values.Password}
                />

                <ErrorMessage name="name" render={renderError} />
              </div>

              <div className="flex flex-col  ">
                <label className="text-center" for="confirmpassword">
                  Confirm Password
                </label>
                <input
                  name="ConfirmPassword"
                  type="password"
                  id="confirmpassword"
                  className="p-2 rounded-3xl text-center"
                  onChange={formik.handleChange}
                  value={formik.values.ConfirmPassword}
                />

                <ErrorMessage name="name" render={renderError} />
              </div>

              <div className="flex flex-col ">
                <label className="text-center" for="EmailAddress">
                  Email
                </label>
                <input
                  type="email"
                  id="emailAddress"
                  name="Email"
                  onChange={formik.handleChange}
                  value={formik.values.Email}
                  className="p-2 rounded-3xl text-center"
                  aria-describedby="emailHelp"
                />

                {/* <NErrorMessage name="email" /> */}
              </div>

              <div className="flex flex-col  ">
                <label className="text-center" for="phoneNumber">
                  Phone Number
                </label>
                <input
                  name="PhoneNumber"
                  type="tel"
                  id="phoneNumber"
                  className="p-2 rounded-3xl text-center"
                  onChange={formik.handleChange}
                  value={formik.values.PhoneNumber}
                />
              </div>
              <div className="flex flex-col  ">
                <label className="text-center" for="phoneNumber">
                  Phone Number
                </label>
                <input
                  name="PhoneNumber"
                  type="tel"
                  id="phoneNumber"
                  className="p-2 rounded-3xl text-center"
                  onChange={formik.handleChange}
                  value={formik.values.PhoneNumber}
                />
              </div>
            </div>

            <div className="my-4 flex justify-center">
              <input
                type="submit"
                value="Submit"
                className="bg-black rounded-xl  text-white p-2 active:bg-gray-800 "
              />
            </div>
          </form>
        </div>
      </div>
      </div>
    </Formik>
  );
}

export default Signup;
