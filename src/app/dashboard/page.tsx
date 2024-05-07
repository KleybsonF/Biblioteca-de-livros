import Card from "../ui/dashboard/card/card";
import Chart from "../ui/dashboard/chart/chart";
import Rightbar from "../ui/dashboard/rightbar/rightbar";
import Transactions from "../ui/dashboard/transactions/transactions";
import styles from '../ui/dashboard/dashboard.module.css'

const DashboardPage = () => {
  return (
    <div className={`wrapper flex gap-5 mt-5`}>
      <div className={`main gap-5 flex flex-col ${styles.main}`}>
        <div className={`cards flex gap-5 justify-between`}>
          <Card />
          <Card />
          <Card />
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={`side flex-1`}>
        <Rightbar />
      </div>
    </div>
  );
};

export default DashboardPage;
