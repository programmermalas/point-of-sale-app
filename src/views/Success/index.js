import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Success = () => {
  return (
    <div className="min-h-screen h-screen flex justify-center items-center between-center bg-gray-200">
      <div className="w-3/5 h-104 flex flex-col justify-center items-center bg-green-500 shadow-lg border">
        <div className="mb-5">
          <p className="font-bold text-2xl text-center text-gray-100">
            Thank You
          </p>
          <p className="font-bold text-2xl text-center text-gray-100">
            For Ordering
          </p>
          <p className="font-bold text-2xl text-center text-gray-100">
            Please wait for the order
          </p>
        </div>

        <Link to="/">
          <button className="flex items-center font-semibold text-gray-700 bg-gray-100 shadow-lg py-2 px-5 focus:outline-none">
            <FontAwesomeIcon className="text-sm mr-1" icon={faArrowLeft} />
            Back to Menu
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
