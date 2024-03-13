import React, { useState } from "react";
import { Link, useNavigate, useNavigation, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useEffect } from "react";
const Courses = () => {
  const NAvigation = useNavigate();

  const params = useParams(); // slash in url
  const [Data, setData] = useState([]);
  const getData = (id) => {
    try {
      axios
        .get(`http://localhost:3000/courses/${id}`)
        .then((res) => {
          console.log("Pratik", res);
          setData([res.data.result]);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (params) {
      getData(params.id);
    }
  }, [params]);

  return (
    <>
      <Toaster />
      <div className=" w-full h-screen  bg-gray-200 ">
        {Data.map((val, i) => {
          return (
            <div className="w-10/12 mx-auto flex flex-col gap-5 bg-[#e0dfdf] pl-4">
              <div className="bg-gray-800 h-20 flex justify-center items-center text-white">
                <Link
                  to={"/syllabus"}
                  className="text-3xl font-bold rounded-lg "
                >
                  Course Info
                </Link>
              </div>
              <div className=" mt-10">
                <img
                  src="./src/assets/mountains-8573646_1280.jpg"
                  alt=""
                  className=" w-60 h-36 rounded-xl"
                />
              </div>
              <div className="  grid grid-cols-2 gap-4 h-fit">
                <div className="">
                  <p>Courses Title</p>
                  <b>{val.course}</b>
                </div>
                <div className="">
                  <p>Courses Duration</p>
                  <b>{val.duration}</b>
                </div>
                <div className="">
                  <p className="">Instructor</p>
                  <div className=" flex gap-2 mt-2">{val.instructor}</div>
                </div>
                <div>
                  <p>Category</p>
                  <b>{val.category}</b>
                </div>
              </div>
              <div className="">
                <p>Reviews</p>
                <b>0</b>
              </div>
              <div className=" flex gap-4">
                <div
                  onClick={() => {
                    NAvigation("/Add");
                  }}
                  className="flex justify-center items-center bg-pink-700 w-24 h-10 text-lg font-bold text-white rounded-lg"
                >
                  Edit
                </div>
                <div
                  onClick={() => {
                    try {
                      axios
                        .delete(`http://localhost:3000/courses/${val.id}`)
                        .then((res) => {
                          console.log("Pratik", res);

                          toast.error("data has been deleted");
                          NAvigation("/");
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    } catch (err) {
                      console.log(err);
                    }
                  }}
                  className="flex justify-center items-center bg-red-700 w-24 h-10 text-lg font-bold text-white rounded-lg"
                >
                  Delete
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Courses;
