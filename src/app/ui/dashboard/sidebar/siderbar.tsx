import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout
} from "react-icons/md";
import MenuLink from "./menuLink/menuLink";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const menuItens = [
  {
    title: "Pages",
    list: [
      {
        title: "Pagina Inicial",
        path: "/dashboard/book",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Contribuintes",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Voltar",
        path: "/",
        icon: <MdLogout />
      },
    ]
  },

]

const Sidebar = () => {
  return (
  <div className="sticky top-5">
    <div className="flex items-center gap-[20px] mb-[20px]">
      <Image className="bg-white rounded-full object-cover" priority={true} src="/logo-wiki.png" alt="User Image" width={100} height={100} />

    </div>
    <ul className="list-none">
      {menuItens.map(cat => (
        <li key={cat.title}>
          <span className="text-gray-300 font-bold text-xs my-[10px] mx-0">{cat.title}</span>
          {cat.list.map(item => (
            <MenuLink key={item.title} item={item}></MenuLink>
          ))}
        </li>
      ))}
    </ul>
  </div>  
  )
}

export default Sidebar