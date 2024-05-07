import Image from "next/image"
import style from "./rightbar.module.css"

const Rightbar = () => {
  return (
    <div className="container">

      <div className={`item relative p-5 rounded-md mb-5 ${style.item}`}>
        <div className="bg-container absolute object-contain bottom-0 right-0 w-1/2 h-1/2">
          <Image src="/logo.svg" alt="" fill className="opacity-15" />
        </div>
        <div className="text flex flex-col gap-6">
          <span className="notification font-bold">🔥 Available Now</span>
          <h3 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <span className="subtitle text-xs">Takes 4 minutes to learn</span>
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolor numquam corrupti ducimus sequi aspernatur est atque incidunt aut beatae optio, commodi aperiam veniam ad id ipsum reiciendis autem fuga.
          </p>
          <button className="button p-2 px-6 flex items-center border-none justify-center text-white bg-violet-500 cursor-pointer rounded-md gap-2 w-max">
            View
          </button>
        </div>
      </div>

      <div className={`item relative p-5 rounded-md mb-5 ${style.item}`}>
        <div className="text flex flex-col gap-6">
          <span className="notification font-bold">🔥 Available Now</span>
          <h3 className="title">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <span className="subtitle text-xs">Takes 4 minutes to learn</span>
          <p className="description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima dolor numquam corrupti ducimus sequi aspernatur est atque incidunt aut beatae optio, commodi aperiam veniam ad id ipsum reiciendis autem fuga.
          </p>
          <button className="button p-2 px-6 flex items-center border-none justify-center text-white bg-violet-500 cursor-pointer rounded-md gap-2 w-max">
            View
          </button>
        </div>
      </div>

    </div>
  )
}

export default Rightbar