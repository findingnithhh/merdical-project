// components/CustomArrow.js

import { MouseEventHandler } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoArrowForwardOutline, IoArrowBack } from "react-icons/io5";

export function CustomLeftArrow(props: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div>
      <span
        className="absolute top-1/2 left-40 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75 border border-[#E6E6E6]"
        onClick={props.onClick}
      >
        <IoArrowBack size={20} />
      </span>
    </div>
  );
}

export function CustomRightArrow(props: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <div>
      <span
        className="absolute top-1/2 right-40 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-2 rounded-full hover:bg-opacity-75 border border-[#E6E6E6]"
        onClick={props.onClick}
      >
        <IoArrowForwardOutline size={16} />
      </span>
    </div>
  );
}
