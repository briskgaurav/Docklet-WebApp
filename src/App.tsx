import NotesContainer from "./Components/NotesContainer"
import Sidebar from "./Components/Sidebar"

function App() {
  return (
    <div className="h-screen w-full flex items-center bg-blue-200 justify-center" >
      <div className="w-[95%] flex  bg-white h-[90%] overflow-hidden rounded-3xl">
        <Sidebar />
        <NotesContainer />
      </div>
    </div>
  )
}

export default App