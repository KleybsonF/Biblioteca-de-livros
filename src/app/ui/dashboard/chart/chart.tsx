"use client"
import styles from "./chart.module.css"
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Chart = () => {
  const data = [
    {
      name: 'DOM',
      Visits: 3490,
      Clicks: 4300,
    },
    {
      name: 'SEG',
      Visits: 4000,
      Clicks: 2400,
    },
    {
      name: 'TER',
      Visits: 3000,
      Clicks: 1398,
    },
    {
      name: 'QUA',
      Visits: 2000,
      Clicks: 9800,
    },
    {
      name: 'QUI',
      Visits: 2780,
      Clicks: 3908,
    },
    {
      name: 'SEX',
      Visits: 1890,
      Clicks: 4800,
    },
    {
      name: 'SAB',
      Visits: 2390,
      Clicks: 3800,
    },
  ];

  return (
    <div className="container h-[450px] bg-gray-800 p-5 rounded-md">
      <h2 className="title font-extralight mb-5">Weekly Review</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip contentStyle={{background: '#111827', border: 'none'}} />
          <Legend />
          <Line type="monotone" dataKey="Visits" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="Clicks" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Chart