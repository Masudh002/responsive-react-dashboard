import { FaBox, FaCog, FaShoppingCart, FaUser } from "react-icons/fa"
import Card from "./Card"

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
    </div>
  )
}

export default Dashboard
