import { FaBox, FaCog, FaShoppingCart, FaUser } from "react-icons/fa"
import Card from "./Card"
import { dataLine, dataBar } from "../assets/charData" 
import {Line, Bar} from 'react-chartjs-2'
import { Chart as ChartJs, LineElement, BarElement, CategoryScale, LinearScale, PointElement } from "chart.js"
ChartJs.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement)

const Dashboard = () => {
  return (
    <div className=" grow p-8">
      <h1 className=" text-2xl mb-4">Dashboard</h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <Card icon={<FaShoppingCart/>} title="Orders" value="140"/>
        <Card icon={<FaBox/>} title="Products" value="120"/>
        <Card icon={<FaUser/>} title="Users" value="30"/>
        <Card icon={<FaCog/>} title="Settings" value="11"/>
      </div>
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className=" bg-white p-4 rounded-lg shadow-md">
          <h2 className=" text-lg font-bold mb-4">Sales Data</h2>
          <Line data={dataLine}/>
        </div>
        <div className=" bg-white p-4 rounded-lg shadow-md">
          <h2 className=" text-lg font-bold mb-4">Projects Data</h2>
          <Bar data={dataBar}/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
