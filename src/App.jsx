import React, { useEffect, useState } from "react";
import Todo from "./component/Todo";
import { TbClearAll } from "react-icons/tb";
import { VscClearAll } from "react-icons/vsc";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";
import { IoReorderFourOutline } from "react-icons/io5";
import { getItem, setItem } from "./component/Storage";

const App = () => {
  /* setInputValue is function */
  const [inputValue, setInputValue] = useState("");

  /* getitem for local storage */
  const [task, setTask] = useState(() => getItem());
  const [dateTime, setDateTime] = useState("");

  /*create useState for dark mode  */
  const [mode, setMode] = useState(false);

  const handleInputValue = (value) => {
    setInputValue(value);
  };

  const handleTask = (e) => {
    e.preventDefault();
    if (!inputValue) return;
    if (task.includes(inputValue)) return;
    setTask((prev) => [...prev, inputValue]);
    setInputValue("");
  };

  /* setitem also for loacl storage */
  setItem(task);

  const handleDelete = (taskToDelete) => {
    setTask(task.filter((curr) => curr !== taskToDelete));
  };

  const handleClear = () => {
    setTask([]);
  };

  /* for timing */
  useEffect(() => {
    setInterval(() => {
      let date = new Date().toDateString();
      let time = new Date().toLocaleTimeString();
      setDateTime(`${date} - ${time}`);
    }, 1000);
    console.log("useeffect");
  }, []);

  return (
    <div
      className={`w-[50%]  ml-[25%] border-2  ${
        mode ? "bg-cyan-950" : "bg-amber-50 max-md: w-100"
      }`}
    >
      <div className="flex items-center justify-end p-4 ">
        <div
          onClick={() => setMode(!mode)}
          className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition duration-300  bg-white max-sm:w-8 ${ mode ?  " border-2 border-white":  "border-2 border-black"}` } 
        >
          <div
            className={` transform transition-transform duration-300  ${
              mode ? "translate-x-8 max-sm:translate-x-0" : "translate-x-0"
            }`}
          >
            {mode ? (
              <MdOutlineWbSunny className="text-yellow-500 h-6 text-xl" />
            ) : (
              <FaRegMoon className="text-black w-5 h-6" />
            )}
          </div>
        </div>
      </div>
      <h1 className="w-full h-20 bg-amber-400 text-6xl font-black flex justify-center items-center ">
        <p className={`animate-bounce max-sm:text-xl max-md:text-2xl ${mode? "text-indigo-700":"text-black"}`}>To-do List</p>
      </h1>

      <h1
        className={`text-center w-full ${mode ? "text-white" : "text-black"}`}
      >
        {dateTime}
      </h1>

      <form
        className="w-full h-15  bg-cyan-500 flex gap-8 items-center p-5"
        onSubmit={handleTask}
      >
        {/* when we deal with form tag then we creae onsubmit */}
        <input
          className="bg-white w-full h-8 p-2 max-sm:w-full"
          type="text"
          placeholder="Enter Your Task"
          value={inputValue}
          onChange={(event) => handleInputValue(event.target.value)}
        />
        <button
          type="submit"
          className="w-15 h-7  bg-sky-600 outline-none drop-shadow-xl/50 text-black font-bold justify-center"
        >
          Add+
        </button>
      </form>
      <div className="  h-[50vh] overflow-y-scroll overflow-x-none">
        {/* for scrolling */}
        {task.map((curTask, index) => {
          return (
            <Todo
              key={index}
              val={curTask}
              onDelete={handleDelete}
              onClear={handleClear}
            />
          );
        })}
      </div>
      <button
        onClick={() => handleClear()}
        className="bg-red-600 w-full h-12 text-white font-semibold text-xl flex  flex-col items-center max-sm:flex-row justify-center"
      >
        Clear All
        {task.length ? <VscClearAll /> : <IoReorderFourOutline />}
      </button>
    </div>
  );
};

export default App;
