import Image from "next/image"
import styles from "./transactions.module.css"

const transactions = [
  { name: 'Danilo Oliveira', status: 'pending', date: '23-03-2024', amount: 57.6 },
  { name: 'Danilo Oliveira', status: 'done', date: '23-03-2024', amount: 57.6 },
  { name: 'Danilo Oliveira', status: 'cancelled', date: '23-03-2024', amount: 57.6 },
  { name: 'Danilo Oliveira', status: 'pending', date: '23-03-2024', amount: 57.6 },
]

const Transactions = () => {
  return (
    <div className="container bg-gray-800 p-5 rounded-md">
      <h2 className="title mb-5 font-extralight">Latest Transaction</h2>
      <table className={`table w-full ${styles.table}`}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {transactions.map((t, i) => (
            <tr key={i}>
              <td>
                <div className="user flex gap-2 items-center">
                  <Image src="/no-avatar.png" alt="alt" width={40} height={40} className="userIamge object-cover rounded-full"/>
                  {t.name}
                </div>
              </td>
              <td>
                <span className={`status rounded p-1 text-sm text-white ${t.status} ${styles[t.status]}`}>{t.status}</span>
              </td>
              <td>
                {t.date}
              </td>
              <td>
                {t.amount.toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions