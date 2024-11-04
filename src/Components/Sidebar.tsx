import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetColorPicker } from "../Features/NotesSlice";
import { animatePlusButton } from "../app/Functions/Gsap";

function Sidebar() {
  const [condition, setCondition] = useState(true);
  const dispatch = useDispatch();
  const colors = useSelector((state: any) => state.notes.colors);
  const handlePlus = () => {
    animatePlusButton(condition, setCondition, dispatch);
  };
  
  const handleColorPick = (color: string) => {
    dispatch(SetColorPicker(color));
  };

  return (
    <>
      <div className="w-[10%] h-full flex-col justify-center px-10 p-8 border-r-[5px] border-zinc-200">
        <h2 className="font-bold text-gray-800 text-lg">Docklet</h2>
        <div
          id="plus"
          onClick={handlePlus}
          className={`${
            condition ? "bg-black" : "bg-zinc-700"
          } w-[40px] h-[40px] ml-2 cursor-pointer flex justify-center items-center rounded-full mt-8`}
        >
          <GoPlus className="text-white text-2xl" />
        </div>

        {colors.map((color: string, index: number) => (
          <div
            key={index}
            onClick={() => handleColorPick(color)}
            id="colors"
            className={`w-[20px] opacity-0 ${color} h-[20px] mt-5 -translate-x-[-80%] rounded-full`}
          ></div>
        ))}
      </div>
    </>
  );
}

export default Sidebar;
