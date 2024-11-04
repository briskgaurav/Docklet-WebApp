import { MdDelete } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleFavourite,
  setWhoValue,
  searchNoteValue,
} from "../Features/NotesSlice";
import { useEffect, useState } from "react";
import { handleDelAnimation, filterNotes } from "../Functions/Gsap";
import { motion } from "framer-motion";
import gsap from "gsap";

function Notes() {
  const notes = useSelector((state: any) => state.notes.notes);
  const dispatch = useDispatch();
  const [animatingId, setAnimatingId] = useState<string | null>(null);
  const searchQuery = useSelector((state: any) => state.notes.searchQuery);
  const showFavourites = useSelector((state: any) => state.notes.showFavorite);
  const filteredNotes = filterNotes(notes, searchQuery, showFavourites);
  const NotePushingAnimationOrder = useSelector(
    (state: any) => state.notes.NotePushingAnimationOrder
  );
  console.log(NotePushingAnimationOrder);

  useEffect(() => {
    // Run the animation whenever the color changes
    gsap.from(".allnotes", {
      x: -200,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  }, [NotePushingAnimationOrder]);

  return (
    <div
      id="container"
      className="h-full mt-5 w-full flex items-start justify-start gap-6 overflow-x-auto py-4"
    >
      {filteredNotes.map((note: any) => (
        <div
          id={`note-${note.id}`}
          key={note.id}
          className={` allnotes relative h-[60%]  px-4 py-6 flex-col w-1/4 rounded-xl flex-shrink-0 ${note.selectedColor}`}
        >
          <textarea
            value={note.note}
            onChange={(e) =>
              dispatch(searchNoteValue({ id: note.id, value: e.target.value }))
            }
            className="h-[90%] w-[80%] resize-none text-xl outline-none font-bold placeholder:text-zinc-700 text-zinc-700 select-none bg-transparent"
            placeholder="Write Somethings here..."
          ></textarea>

          <div className="flex h-[10%] items-center justify-between">
            <input
              value={note.inputValue}
              onChange={(e) =>
                dispatch(setWhoValue({ id: note.id, value: e.target.value }))
              }
              className="text-sm outline-none font-bold placeholder:text-zinc-700 text-zinc-700 select-none bg-transparent"
              placeholder="Who're you?"
              type="text"
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              onClick={() =>
                handleDelAnimation(
                  note.id,
                  dispatch,
                  animatingId,
                  setAnimatingId
                )
              }
              className="flex items-center rounded-full cursor-pointer bg-black justify-center p-2"
            >
              <MdDelete className="text-lg text-white" />
            </motion.div>
          </div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            onClick={() => dispatch(toggleFavourite(note.id))}
            id="Fav"
            className="flex absolute top-0 right-0 m-4 items-center rounded-full bg-black justify-center p-2 cursor-pointer"
          >
            <FaStar
              className={`text-sm ${
                note.favourite ? "text-yellow-400" : "text-white"
              }`}
            />
          </motion.div>
        </div>
      ))}
    </div>
  );
}

export default Notes;
