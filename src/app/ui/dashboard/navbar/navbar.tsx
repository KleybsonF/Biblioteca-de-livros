"use client"
import { usePathname } from "next/navigation"
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md"

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="flex justify-between items-center p-5 rounded-md bg-gray-800">
      <div className="capitalize font-bold text-gray-300">{pathName.split('/').pop()}</div>
      <div className="flex gap-5 items-center">
        
        
      </div>
    </div>
  )
}

export default Navbar