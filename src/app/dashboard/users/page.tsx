import { delUser } from "@/app/bd/actions"
import { fetchUsers } from "@/app/bd/data"
import { UserInterface } from "@/app/interfaces/user.interface"
import { Pagination } from "@/app/ui/dashboard/pagination/pagination"
import { Search } from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/user/user.module.css"
import Image from "next/image"
import Link from "next/link"

const UsersPage = async ({searchParams}: {
  searchParams: {
    q:  string | null,
    page: number | null,
    take: number | null
  }
}) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  const take = searchParams?.take || parseInt(process.env.NEXT_PUBLIC_TAKE!);
  const {count, users} = await fetchUsers({q, page, take});

  return (
    <div className="container bg-gray-800 p-5 rounded-md mt-5">
      <div className="top flex items-center justify-between">
        <Search placeholder="Search for a user ..." />
        <Link href="/dashboard/users/add">
        <button className="add-button p-2 bg-violet-500 text-white rounded-md border-none cursor-pointer">Add New</button>
        </Link>
      </div>
      <table className={`table w-full ${styles.table}`}>
        <thead>
          <tr>
            <td>User</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users.map((u: UserInterface, i: number) => (
            <tr key={u.id}>
              <td>
                <div className="use flex gap-2 items-center">
                  <Image src={u.img || "/no-avatar.png"} alt="" className="rounded-full object-cover" width={40} height={40} />
                  {u.username}
                </div>
              </td>
              <td>{u.email}</td>
              <td>{u.createdAt.toString().slice(4,16)}</td>
              <td>{u.isAdmin ? "Admin" : "Client"}</td>
              <td>{u.isActive ? "Active" : "Passive"}</td>
              <td>
                <div className="buttons flex gap-2">
                  <Link href={`/dashboard/users/${u.id}`}>
                    <button className={`button py-2 px-5 rounded-md text-white border-none cursor-pointer bg-teal-500 view`}>View</button>
                  </Link>
                  <form action={delUser}>
                    <button name="id" value={u.id} className={`button py-2 px-5 rounded-md text-white border-none cursor-pointer bg-red-500 delete`}>Delete</button>
                  </form>
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

export default UsersPage