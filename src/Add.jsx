import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, ErrorMessage, Form, Field } from "formik";
import * as Yup from "yup";
import { FaCloudUploadAlt } from "react-icons/fa";
import UploadImage from "./assets/upload.jpg";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
const schema = Yup.object().shape({
  name: Yup.string().required("This section is necessary"),
  Duration: Yup.string().required("Please! fill the Duration"),
  category: Yup.string().required("Select the category"),
  instructor: Yup.string().required("This section is necessary"),
});

const Add = () => {
  const Navigation = useNavigate();

  const Data = [
    {
      title: "Course Name:",
      type: "text",
      placeholder: "Enter Name",
      name: "course",
    },
    {
      title: "Duration:",
      type: "text",
      placeholder: "Enter Duration",
      name: "duration",
    },
    {
      title: "Select Category:",
      type: "text",
      placeholder: "Select Category",
      name: "category",
    },
    {
      title: "Instructor:",
      type: "text",
      placeholder: "Select...",
      name: "instructor",
    },
  ];
  return (
    <>
      <Toaster />
      <Formik
        initialValues={{
          course: "",
          duration: "",
          category: "",
          instructor: "",
          image: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          console.log("values");
          console.log("actions");
          try {
            const formData = new FormData();
            formData.append("image", values.image);
            formData.append("course", values.course);
            formData.append("duration", values.duration);
            formData.append("category", values.category);
            formData.append("instructor", values.instructor);

            axios
              .post("http://localhost:3000/courses", formData)
              .then((res) => {
                console.log(res);
                resetForm();
                toast.success("data has been added");
              })
              .catch((err) => {
                console.log(err);
              });
          } catch (err) {
            console.log(err);
          }
        }}
      >
        {({ handleSubmit, values, setFieldValue }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <div className="w-full bg-gray-200 h-fit py-5">
                <div className="w-10/12 mx-auto h-fit  pl-4  bg-white flex flex-col gap-2 py-3">
                  <div>
                    <header className=" font-semibold text-xl text-pink-700">
                      Add Course
                    </header>
                    <p className="text-gray-800">
                      All users must filled the input fields.
                    </p>
                  </div>
                  <div className="grid gap-7 w-full py-3 h-fit">
                    {Data.map((val, i) => {
                      return (
                        <div className="grid">
                          <label
                            for="title"
                            className="text-blue-800 font-bold"
                          >
                            {val.title}
                          </label>
                          <Field
                            type={val.type}
                            name={val.name}
                            id="title"
                            placeholder={val.placeholder}
                            className="border-[1px] placeholder:text-sm border-[#b8b8b8] w-56 h-9 
                            rounded-lg pl-2 mt-1 placeholder:text-md"
                          />
                          <ErrorMessage
                            name={val.name}
                            component={"div"}
                            className="text-red-500 "
                          />
                        </div>
                      );
                    })}
                  </div>
                  <div className=" bg-gray-20 h-96 w-11/12 overflow-clip">
                    <p className="font-semibold text-lg text-blue-700">
                      Course Image:
                    </p>
                    <div className="mt-5 w-8/12 mx-auto  ">
                      <label htmlFor="images" className="h-44 w-44 ">
                        {values.image ? (
                          <img
                            src={URL.createObjectURL(values.image)}
                            className="h-96 w-96 object-contain"
                          />
                        ) : (
                          <div className="h-80 w-full  flex flex-col justify-center items-center border-2 border-gray-300 border-dashed ">
                            <FaCloudUploadAlt className="h-64 w-64 text-gray-500" />
                            <b className="text-2xl ">Drag to upload file</b>
                          </div>
                        )}
                      </label>
                      <input
                        id="images"
                        type="file"
                        src=""
                        alt=""
                        onChange={(e) => {
                          setFieldValue("image", e.target.files[0]);
                        }}
                        className="hidden"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4 h-fit py-3">
                    <div
                      onClick={() => {
                        Navigation("/");
                      }}
                      className="w-20 h-10 bg-red-700 flex justify-center items-center cursor-pointer rounded-lg text-white font-bold p-1 hover:bg-red-800"
                    >
                      Cancel
                    </div>
                    <button
                      type="submit"
                      className="w-20 h-10 bg-blue-700 rounded-lg text-white font-bold p-1 hover:bg-blue-800"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default Add;
