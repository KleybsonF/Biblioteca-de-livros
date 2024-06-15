import { delUser } from "@/app/bd/actions"
import { fetchBooks } from "@/app/bd/data"
import { BookInterface } from "@/app/interfaces/book.interface"
import { Pagination } from "@/app/ui/dashboard/pagination/pagination"
import { Search } from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/user/user.module.css"
import Image from "next/image"
import Link from "next/link"

const BookPage = async ({searchParams}: {
  searchParams: {
    q:  string | null,
    page: number | null,
    take: number | null
  }
}) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  const take = searchParams?.take || parseInt(process.env.NEXT_PUBLIC_TAKE!);
  const {count, books} = await fetchBooks({q, page, take});

  return (
    <div className="container bg-gray-800 p-5 rounded-md mt-5">
      <div className="top flex items-center justify-between">
        <Search placeholder="Search for a user ..." />
        <Link href="/dashboard/book/add">
        <button className="add-button p-2 bg-violet-500 text-white rounded-md border-none cursor-pointer">Add New</button>
        </Link>
      </div>
      <table className={`table w-full ${styles.table}`}>
        <thead>
          <tr>
            <td>Título</td>
            <td>Gênero</td>
            <td>Autor</td>
            <td>Action</td>
            <td>Description</td>
          </tr>
        </thead>
        <tbody>
          {books.map((u: BookInterface, i: number) => (
            <tr key={u.id}>
              <td>{u.titulo}</td>
              <td>{u.genero}</td>
              <td>{u.autor}</td>
              <td>
                <div className="text-ellipsis overflow-hidden whitespace-nowrap	w-[200px]">
                  {u.descricao}
                </div>
              </td>
              <td>
                <div className="buttons flex gap-2">
                  <Link href={`/dashboard/book/${u.id}`}>
                    <button className={`button py-2 px-5 rounded-md text-white border-none cursor-pointer bg-teal-500 view`}>View</button>
                  </Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count}/>
    </div>
  )
}

export default BookPage