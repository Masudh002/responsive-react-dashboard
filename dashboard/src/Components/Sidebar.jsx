import { FaTachometerAlt, FaShoppingCart, FaUsers, FaUser, FaBox, FaCog} from "react-icons/fa";
import { NavLink } from "react-router-dom";


const Sidebar = () => {
  return (
    <div className=" bg-gray-100 text-gray-800 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white ">
      <h1 className=' text-2xl font-bold hidden md:block mt-4 text-center italic'>MSD Shop</h1>
      <ul className=" flex flex-col mt-5 text-xl">
        <NavLink to='/home' className={({isActive}) => `flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white ${isActive && "bg-orange-400 hover:rounded font-bold"}`} > <FaTachometerAlt/> <span className=" hidden md:inline">Dashboard</span></NavLink>
        <NavLink to='/orders' className={({isActive}) => `flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white ${isActive && "bg-orange-400 hover:rounded font-bold"}`}> <FaShoppingCart/> <span className=" hidden md:inline">Orders</span></NavLink>
        <NavLink to='/customers' className={({isActive}) => `flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white ${isActive && "bg-orange-400 hover:rounded font-bold"}`}> <FaUsers/> <span className=" hidden md:inline">Customers</span></NavLink>
        <NavLink to='/users' className={({isActive}) => `flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white ${isActive && "bg-orange-400 hover:rounded font-bold"}`}> <FaUser/> <span className=" hidden md:inline">Users</span></NavLink>
        <NavLink to='/products' className={({isActive}) => `flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white ${isActive && "bg-orange-400 hover:rounded font-bold"}`}> <FaBox/> <span className=" hidden md:inline">Products</span></NavLink>
        <NavLink to='/settings' className={({isActive}) => `flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:bg-blue-600 hover:text-white ${isActive && "bg-orange-400 hover:rounded font-bold"}`}> <FaCog/> <span className=" hidden md:inline">Settings</span></NavLink>
      </ul>
    </div>
  )
}

export default Sidebar

