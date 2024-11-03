import { GoPlus } from "react-icons/go";
import gsap from "gsap";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNotes, SetColorPicker } from "../Features/NotesSlice";

function Sidebar() {
  const [condition, setCondition] = useState(true);
  const dispatch = useDispatch();
  const colors = useSelector((state: any) => state.notes.colors);



  // console.log(useSelector((state:any) => state.notes.colorPicker));
  
  

  const handlePlus = () => {
    if (condition) {
      const tl = gsap.timeline();
      tl.to("#plus", {
        scale: 1.1,
        rotate: "230deg",
        ease: "elastic",
        duration: 0.5,
      });
      tl.to("#colors", {
        opacity: 1,
        y: 10,
        ease: "elastic.inOut",
        duration: 1,
        stagger: 0.2,
      });
      setCondition(false);
    }
    if (condition === false) {
      const tl = gsap.timeline();

      tl.to("#plus", {
        scale: 1,
        rotate: "180deg",
        ease: "bounce.inOut",
        duration: 0.2,
      });

      tl.to("#colors", {
        opacity: 0,
        y: -100,
        ease: "elastic.inOut",
        duration: 1,
        stagger: 0.2,
      });

      setCondition(true);
    }
  };

  const handleColorPick = (color: string) => {
    if (condition === false) {
      dispatch(SetColorPicker(color));
      dispatch(addNotes(color));

      const tl = gsap.timeline();

      tl.to("#colors", {
        opacity: 0,
        y: -100,
        ease: "elastic.inOut",
        duration: 1,
        stagger: 0.2,
      });

      tl.to("#plus", {
        rotate: "180deg",
        ease: "bounce.inOut",
        duration: 0.2,
      });
    }
    setCondition(true);
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
