"use client"
import { usePathname } from "next/navigation"
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md"

const Navbar = () => {
  const pathName = usePathname();

  const NAMES: any = {
    book:  'Livros',
    users: 'Contribuintes',
  }

  function replaceName(name:string = '') {
    let _replaceName = NAMES[name] ||  'Você não deveria estar aqui! 😈';
    return _replaceName;
  }

  return (
    <div className="flex justify-between items-center p-5 rounded-md bg-gray-800">
      <div className="capitalize font-bold text-gray-300">{replaceName(pathName.split('/').pop())}</div>
      <div className="flex gap-5 items-center">
        
        
      </div>
    </div>
  )
}

export default Navbar