import Notes from "./Notes";
import SearchInput from "./SearchInput";

function NotesContainer() {
  return (
    <>
      <div className="h-auto w-full lg:w-[90%] relative flex-col items-start py-2 px-5 lg:px-10 justify-center">
        <SearchInput />
        <h1 className="text-5xl select-none font-semibold mt-2">Notes</h1>

        <Notes />
      </div>
      <h1 className="text-2xl hidden lg:flex select-none uppercase absolute translate-x-[-50%] left-1/2 bottom-[10%] font-bold text-zinc-300 tracking-widest">
        Scroll Right
      </h1>
    </>
  );
}

export default NotesContainer;
