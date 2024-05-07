"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

interface itemProps {
  item: {
    icon: JSX.Element;
    title: string;
    path: string;
  }
}

const MenuLink = ({item}: itemProps) => {
  const pathName = usePathname()
  return (
    <Link className={`flex p-5 items-center gap-2 my-2 text-white rounded-md hover:bg-gray-700 no-underline ${pathName === item.path && 'bg-gray-700'}`} href={item.path}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink