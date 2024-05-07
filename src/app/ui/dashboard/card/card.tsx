import { MdSupervisedUserCircle } from "react-icons/md"

const Card = () => {
  return (
    <div className={`container bg-gray-800 hover:bg-gray-700 p-5 rounded-md flex gap-5 cursor-pointer w-full`}>
      <MdSupervisedUserCircle size={24} />
      <div className={`texts flex flex-col gap-5`}>
        <span className={`title `}>Total Users</span>
        <span className={`number text-2xl font-medium`}>10.273</span>
        <span className={`detail text-sm font-light`}>
          <span className={`positive text-lime-300`}>12%</span> more than previous week
        </span>
      </div>
    </div>
  )
}

export default Card