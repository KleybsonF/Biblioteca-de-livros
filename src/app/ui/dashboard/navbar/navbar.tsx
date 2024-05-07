"use client"
import { usePathname } from "next/navigation"
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md"

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="flex justify-between items-center p-5 rounded-md bg-gray-800">
      <div className="capitalize font-bold text-gray-300">{pathName.split('/').pop()}</div>
      <div className="flex gap-5 items-center">
        <div className="flex items-center gap-3 bg-gray-700 p-2 rounded-md">
          <MdSearch />
          <input className="bg-transparent border-none text-gray-300" type="text" placeholder="Search..." />
        </div>
        <div className="flex gap-5">
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  )
}

export default Navbar