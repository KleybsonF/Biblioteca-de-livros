import { ReactNode } from "react";
import Sidebar from "../ui/dashboard/sidebar/siderbar";
import Navbar from "@/ui/dashboard/navbar/navbar";
import styles from "@/ui/dashboard/dashboard.module.css"
import { Footer } from "../ui/dashboard/footer/footer";

export default function Layout({children}: { children: ReactNode}) {
  return (
    <div className={`flex ${styles.container}`}>
      <div className={`min-h-screen flex-1 bg-gray-800 p-4 h-full`}>
        <Sidebar />
      </div>
      <div className={`flex-[4] p-4`}>
        <Navbar />
        {children}
        <Footer />
      </div>
    </div>
  )
}
