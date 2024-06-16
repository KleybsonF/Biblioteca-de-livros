import { fetchUsers } from "@/app/bd/data"
import { UserInterface } from "@/app/interfaces/user.interface"
import { Pagination } from "@/app/ui/dashboard/pagination/pagination"
import styles from "@/app/ui/dashboard/user/user.module.css"

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
      <table className={`table w-full ${styles.table}`}>
        <thead>
          <tr>
            <td>Membros</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>
          {users.map((u: UserInterface, i: number) => (
            <tr key={u.id}>
              <td>{u.username}
              </td>
              <td>{u.email}</td>
              <td>
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