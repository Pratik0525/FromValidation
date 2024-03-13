import React from "react";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const schema = Yup.object().shape({
  name: Yup.string().required("Username is required "),
  email: Yup.string().required("email is requirred "),
  password: Yup.string().required("Password is required "),
});
const Fun = () => {
  return (
    <>
      <Toaster />
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          console.log("actions");
          console.log("values");

          try {
            axios
              .post("")
              .then((res) => {
                console.log("Pratik", res);
                resetForm();
              })
              .catch((err) => {
                console.log(err);
              });
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit} className="bg-green-500">
              <div>
                <label htmlFor="name">Username:</label>
                <Field name="course" type="text" id="name" />
                <ErrorMessage name="course" component="span" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <Field name="email" type="email" id="email" />
                <ErrorMessage name="email" component="span" />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <Field name="password" type="Password" id="password" />
                <ErrorMessage
                  name="password"
                  component="span"
                  className="text-red-500"
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Fun;
