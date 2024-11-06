import { GoPlus } from "react-icons/go";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { animatePlusButton, handleColorPick } from "../Functions/Gsap";

function Sidebar() {
  const [condition, setCondition] = useState(true);
  const dispatch = useDispatch();
  const colors = useSelector((state: any) => state.notes.colors);
  const handlePlus = () => {
    animatePlusButton(condition, setCondition);
  };
  const NotePushingAnimationOrder = useSelector(
    (state: any) => state.notes.NotePushingAnimationOrder
  );

  const onColorPick = (color: string) => {
    if (!condition) {
      handleColorPick(color, dispatch, setCondition, NotePushingAnimationOrder);
    }
  };

  return (
    <>
      <div className="lg:w-[10%]  relative w-full h-auto lg:h-full flex-col items-center justify-center px-10 lg:border-b-0 py-4 lg:p-8 border-b-[5px] lg:border-r-[5px] border-zinc-200">
        <h2 className="font-bold lg:text-justify text-center text-gray-800 text-2xl lg:text-lg">
          Docklet
        </h2>

        <div className="w-full flex lg:flex-col gap-5 lg:gap-0 items-center">
          <div className="w-fit">
            <div
              id="plus"
              onClick={handlePlus}
              className={`${
                condition ? "bg-black" : "bg-zinc-700"
              } w-[40px] h-[40px] lg:ml-2 cursor-pointer flex justify-center items-center rounded-full mt-4 lg:mt-8`}
            >
              <GoPlus className="text-white text-2xl" />
            </div>
          </div>

          <div className="lg:flex-col lg:mt-0 lg:ml-0  flex lg:gap-0 gap-5 w-fit">
            {colors.map((color: string, index: number) => (
              <div
                key={index}
                onClick={() => onColorPick(color)}
                id="colors"
                className={`w-[20px] opacity-0 ${color} border cursor-pointer shadow-sm border-zinc-700  h-[20px] mt-5 rounded-full`}
              ></div>
            ))}
          </div>
          
        </div>
      </div>
    </>
  );
}

export default Sidebar;
