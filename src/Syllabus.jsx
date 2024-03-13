import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
import Formss from "./Formss";
import Card from "./UI/Card";
const Syllabus = () => {
  const navigation = useNavigate();
  const [Data, setData] = useState([]);
  const getData = () => {
    try {
      axios
        .get("http://localhost:3000/courses")
        .then((res) => {
          console.log("Pratik", res);
          setData([...res.data.data]);
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="w-full bg-[#ededed]">
        <div className="w-10/12 mx-auto">
          <div className="text-5xl my-3 font-bold flex justify-center items-center text-pink-700 ">
            Course
          </div>
          <div className=" ">
            <button
              onClick={() => {
                navigation("/Add");
              }}
              className="bg-pink-700 w-24 h-12  text-white rounded-xl hover:bg-blue-700 transition-all delay-0 duration-300 hover:scale-105 ease-in-out flex items-center text-md p-2 
          "
            >
              <IoIosAdd className="w-7 h-10" />
              <p className="text-md">Add</p>
            </button>
          </div>
          <div className="mt-10 grid grid-cols-3  gap-7 ">
            {Data.map((val, i) => {
              return (
                <Link key={i} to={`/syllabus/${val.id}?title=${val.course}`}>
                  <Card
                    course={val.course}
                    image={val.image}
                    duration={val.duration}
                    description={val.description}
                  />
                </Link>
              );
            })}
          </div>
          <div className="flex justify-end items-center">
            <button
              onClick={() => {
                navigation("/Add");
              }}
              className="bg-pink-600 h-12 w-32 text-xl rounded-md hover:scale-105 hover:bg-pink-700 transition-all ease-in-out delay-50 duration-200 font-bold  text-white mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Syllabus;
