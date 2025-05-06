import React from "react";
import { RiDeleteBack2Fill, RiDeleteBin5Line } from "react-icons/ri";
import { TiTick } from "react-icons/ti";

const Todo = ({ val, onDelete }) => {
  
  return (
    <>
        <div className="bg-blue-500 transition delay-2 duration-100 ease-in-out hover:-translate-y-1   hover:scale-101  hover:bg-cyan-800 :hover text-white w-full h-12 font-bold font-mono mt-1 flex flex-row justify-between items-center pr-10 pl-1.5 max-sm:h-10 ">
          {val.length>=65? val.slice(0,65):val}
          <div className=" flex gap-10 max-sm:gap-2">
            <TiTick className="text-3xl w-10 border-2  text-amber-300 hover:text-cyan-950 max-sm:h-5 border-none" />
            
            <RiDeleteBin5Line
              onClick={() => onDelete(val)}
              className='text-3xl border-2 drop-shadow-xs text-amber-300 hover:text-cyan-950  max-sm:h-5 border-none max:md'
            />
          </div>
        </div>
        {/* 'event' work  for handling event capturing */}
    </>
  );
};

export default Todo;
