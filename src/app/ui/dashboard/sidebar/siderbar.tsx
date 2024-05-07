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
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />
      },
      {
        title: "Livros",
        path: "/dashboard/book",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />
      },
      {
        title: "Porducts",
        path: "/dashboard/products",
        icon: <MdShoppingBag />
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />
      },
    ]
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "/dashboard/revenue",
        icon: <MdWork />
      },
      {
        title: "Reports",
        path: "/dashboard/reports",
        icon: <MdAnalytics />
      },
      {
        title: "Teams",
        path: "/dashboard/teams",
        icon: <MdPeople />
      },
    ]
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />
      },
    ]
  }
]

const Sidebar = () => {
  return (
  <div className="sticky top-5">
    <div className="flex items-center gap-[20px] mb-[20px]">
      <Image className="bg-white rounded-full object-cover" priority={true} src="/icon-user.png" alt="User Image" width={50} height={50} />
      <div className="flex flex-col">
        <span className="font-medium">Kleybson Felipe</span>
        <span className="font-light text-xs text-gray-300">Administrator</span>
      </div>
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
    <button className={`flex p-5 my-1 text-base items-center gap-2 cursor-pointer rounded-md bg-transparent border-none w-full text-white hover:bg-gray-700 ${inter.className}`}>
      <MdLogout size={20} />
      Logout
    </button>
  </div>
  )
}

export default Sidebar