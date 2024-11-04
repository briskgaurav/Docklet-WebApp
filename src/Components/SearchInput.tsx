import { IoSearchSharp } from "react-icons/io5";
import {
  setSearchQuery,
  toggleShowfavorite,
  deletAll,
} from "../Features/NotesSlice";
import { useDispatch, useSelector } from "react-redux";

function SearchInput() {
  const dispatch = useDispatch();
  const search = useSelector((state: any) => state.notes.searchQuery);
  const showFavourites = useSelector((state: any) => state.notes.showFavorite);
  const notes = useSelector((state: any) => state.notes.notes);

  const handleChange = (e: any) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <div className="h-[10%] flex items-center gap-2 justify-between w-full">
      <div className="flex items-center gap-2 w-[50%]">
        <IoSearchSharp className="text-lg text-zinc-500" />
        <input
          value={search}
          onChange={handleChange}
          className="w-[50%] p-1 border-none outline-none text-zinc-500 text-md font-semibold"
          type="text"
          placeholder="Search by name..."
        />
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(toggleShowfavorite(showFavourites))}
          className="bg-black py-2 font-bold px-5 rounded-lg text-white"
        >
          {showFavourites ? "Show all" : "Show ⭐"}
        </button>
        <button
          onClick={() => dispatch(deletAll(notes))}
          className="bg-black py-2 font-bold px-5 rounded-lg text-white"
        >
          Delete all
        </button>
      </div>
    </div>
  );
}

export default SearchInput;
