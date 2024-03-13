import React from "react";

const Card = ({ image, course, duration, description }) => {
  return (
    <div
      className=" grid grid-rows-2  w-full h-full rounded-md text-lg  font-semibold bg-gray-200 border-b-2 shadow-md
                   shadow-gray-300 border-gray-300 group
                   hover:bg-pink-700 hover:text-white transition-all ease-in-out line-clamp-1 
                    duration-200 cursor-pointer "
    >
      <div className="">
        <img
          src={`http://localhost:3000/public/${image}`}
          alt=""
          className="w-full h-52  "
        />
      </div>
      <div className="pl-2">
        <div>
          <p className={`text-xl group-hover:text-white  text-black `}>
            {course}
          </p>
        </div>
        <div className=" text-sm font-light group-hover:text-white text-black">
          {duration}
        </div>
        <div className=" text-sm font-light group-hover:text-white text-black">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
