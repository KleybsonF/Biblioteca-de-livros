import { fetchProducts } from "@/app/bd/data"
import { ProductInterface } from "@/app/interfaces/product.interface"
import { Pagination } from "@/app/ui/dashboard/pagination/pagination"
import { Search } from "@/app/ui/dashboard/search/search"
import styles from "@/app/ui/dashboard/user/user.module.css"
import Image from "next/image"
import Link from "next/link"

const ProductsPage = async ({searchParams}: {
  searchParams: {
    q:  string | null,
    page: number | null,
    take: number | null
  }
}) => {
  const q = searchParams?.q || '';
  const page = searchParams?.page || 1;
  const take = searchParams?.take || parseInt(process.env.NEXT_PUBLIC_TAKE!);
  const {count, products} = await fetchProducts({q, page, take});

  return (
    <div className="container bg-gray-800 p-5 rounded-md mt-5">
      <div className="top flex items-center justify-between">
        <Search placeholder="Search for a product ..." />
        <Link href="/dashboard/products/add">
         <button className="add-button p-2 bg-violet-500 text-white rounded-md border-none cursor-pointer">Add New</button>
        </Link>
      </div>
      <table className={`table w-full ${styles.table}`}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((p: ProductInterface, i: number) => (
            <tr key={i}>
              <td>
                <div className="use flex gap-2 items-center">
                  <Image src="/no-product.jpg" alt="" className="rounded-full object-cover" width={40} height={40} />
                  {p.title}
                </div>
              </td>
              <td>{p.description}</td>
              <td>{p.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
              <td>{p.createdat}</td>
              <td>{p.stock}</td>
              <td>
                <div className="buttons flex gap-2">
                  <Link href="/dashboard/products/Item-1">
                    <button className={`button py-2 px-5 rounded-md text-white border-none cursor-pointer bg-teal-500 view`}>View</button>
                  </Link>
                  <button className={`button py-2 px-5 rounded-md text-white border-none cursor-pointer bg-red-500 delete`}>Delete</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  )
}

export default ProductsPage