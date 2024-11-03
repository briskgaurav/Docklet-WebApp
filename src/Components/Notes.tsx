import { MdEdit } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {toggleFavourite} from "../Features/NotesSlice"
import { useState } from "react";

function Notes() {
  const notes = useSelector((state: any) => state.notes.notes);
  const [input, setInput] = useState('');
  
  
  
  
  const dispatch = useDispatch()

  return (
    <div className="h-full mt-5 w-full flex items-start justify-start gap-6 overflow-x-auto py-4">
      {notes.map((note: any) => (
        <div key={note.id} className={`relative h-[60%] px-4 py-6 flex-col w-1/4 rounded-xl flex-shrink-0 ${note.selectedColor}`} >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="h-[90%] w-[80%] resize-none text-xl outline-none font-bold placeholder:text-zinc-700 text-zinc-700 select-none bg-transparent"
            placeholder="Write Somethings here..."
          ></textarea>

          <div className="flex h-[10%]  items-center justify-between">
            {/* <h6 className="text-sm font-medium text-zinc-700"> {note.date} </h6> */}
            <input className="bg-transparent" placeholder="" type="text" name="" id="" />
            <div className="flex items-center rounded-full cursor-pointer bg-black justify-center p-2">
              <MdEdit className="text-lg text-white" />
            </div>
          </div>

          <div
            onClick={() =>dispatch(toggleFavourite(note.id))} id="Fav"
            className="flex  absolute top-0 right-0 m-4 items-center rounded-full bg-black justify-center p-2 cursor-pointer"
          >
            <FaStar
              className={`text-sm ${
                note.favourite ? "text-yellow-400" : "text-white"
              }`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
