import react from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
const schema = Yup.object().shape({
  email: Yup.string()
    .email("Please! Enter your Email")
    .required("Enter email address"),
  password: Yup.number().required("Enter Number Only "),
});

const Forms = () => {
  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={schema}
        onSubmit={(actions, values) => {
          console.log(actions);
          console.log(values);
        }}
      >
        {({ handleSubmit }) => {
          return (
            <div className="bg-teal-500 w-full h-screen flex justify-center items-center backdrop-blur-sm">
              <div className="w-8/12 h-fit  grid grid-cols-2  ">
                <div className="bg-[#ffffff] flex flex-col gap-7 py-7 pl-5 ">
                  <div className="">
                    <span className="text-4xl font-bold">Login Form</span>
                  </div>

                  <Form onSubmit={handleSubmit}>
                    <div className="grid  h-fit gap-1">
                      <label htmlFor="name" className="text-lg font-semibold">
                        Username:
                      </label>
                      <Field
                        type="text"
                        name="name"
                        className="w-80 h-10 rounded-xl pl-2 border-2 border-[#c1c1c1]"
                      />
                    </div>
                    <div className="grid gap-1">
                      <label htmlFor="email" className="text-lg font-semibold">
                        Email:
                      </label>
                      <Field
                        type="email"
                        name="email"
                        className="w-80 h-10 rounded-xl pl-2 border-2 border-[#c1c1c1]"
                      />
                    </div>
                    <div className="grid  gap-1">
                      <label
                        htmlFor="password"
                        className="text-lg font-semibold"
                      >
                        Password:
                      </label>
                      <Field
                        type="password"
                        name="password"
                        className="w-80 h-10 rounded-xl pl-2 border-2 border-[#c1c1c1]"
                      />
                    </div>
                    <div className="w-fit  flex justify-center mt-3">
                      <ReCAPTCHA
                        sitekey="6LdWSn0pAAAAAKUdYcPs6_Q65tQ2RdmeTC0duM7t"
                        className="w-96 "
                        // onChange={onChange}
                      />
                    </div>
                    <div className=" flex flex-col gap-1 mt-5">
                      <div>
                        <button className="text-xl w-80 rounded-lg h-fit p-2 transition-all delay-100 duration-700  ease-in-out text-white font-semibold hover:bg-teal-600 bg-teal-500">
                          Login
                        </button>
                      </div>
                      <div className="flex gap-1 items-center   ">
                        <div>
                          <Field
                            type="checkbox"
                            name="check"
                            id="checks"
                            className="text-lg "
                            align="center"
                          />
                        </div>
                        <div>
                          <label className="text-lg mt-2" for="checks">
                            Remember me
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <button className="w-28 h-fit bg-teal-500 hover:bg-teal-600 transition-all delay-100 duration-100 ease-in-out rounded-sm text-xl p-2 text-white font-semibold">
                        Cancel
                      </button>
                      <span className="text-lg font-semibold pr-4 cursor-pointer hover:text-teal-500 transition-all ease-in-out delay-100 duration-500">
                        Forget Password?
                      </span>
                    </div>
                  </Form>
                </div>
                <div className="bg-white flex flex-col justify-center items-center border-2 border-l-[#e4e4e4]">
                  <p className="text-6xl font-black text-teal-500">Welcome!</p>
                  {/* <span className="text-3xl font-bold">to my site.</span> */}
                </div>
              </div>
            </div>
          );
        }}
      </Formik>
    </>
  );
};

export default Forms;
