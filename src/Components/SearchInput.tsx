import { IoSearchSharp } from "react-icons/io5";

function SearchInput() {
  return (
  <div className='h-[10%] flex items-center gap-2 justify-start w-full'>
    <IoSearchSharp className="text-lg text-zinc-500" />
    <input className="outline-none border-none text-zinc-500 text-md font-semibold" type="text" placeholder="Search..." />
  </div>
  )
}

export default SearchInput