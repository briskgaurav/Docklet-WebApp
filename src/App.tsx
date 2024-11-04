import { useDispatch } from "react-redux";
import NotesContainer from "./Components/NotesContainer";
import Sidebar from "./Components/Sidebar";
import { useEffect } from "react";
import { setInitialNotes } from "./Features/NotesSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");
    if (storedNotes) {
      dispatch(setInitialNotes(JSON.parse(storedNotes)));
    }
  }, [dispatch]);
  return (
    <div className="h-screen w-full flex items-center bg-blue-200 justify-center">
      <div className="w-[95%] flex  bg-white h-[90%] overflow-hidden rounded-3xl">
        <Sidebar />
        <NotesContainer />
      </div>
    </div>
  );
}

export default App;
