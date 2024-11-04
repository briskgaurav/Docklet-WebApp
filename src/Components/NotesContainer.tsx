import Notes from "./Notes";
import SearchInput from "./SearchInput";

function NotesContainer() {
  return (
    <>
     <div className="h-auto w-[90%] flex-col items-start py-2 overflow-y-hidden px-10 justify-center">
      <SearchInput />
      <h1 className="text-5xl font-semibold mt-2">Notes</h1>
      
      <Notes />
      
    </div>
    <h1 className="text-2xl select-none uppercase absolute translate-x-[-50%] left-1/2 bottom-[10%] font-bold text-zinc-300 tracking-widest">Scroll Right</h1>

    </>
   
    
  );
}

export default NotesContainer;
