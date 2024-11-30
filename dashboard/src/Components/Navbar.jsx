import { FaMoon, FaSun } from "react-icons/fa"
import { ThemeContext } from "../Context/ThemeContextProvider"
import { useContext } from "react"


const Navbar = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div className=' border-b border-gray-300 p-4 flex justify-between items-center bg-gray-100  text-gray-900  dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
        <h1>Dashboard</h1>
        <button className=" text-2xl text-black" onClick={toggleTheme}>
          {theme == "light" ? <FaMoon/> : <FaSun/>}
        </button>
    </div>
  )
}

export default Navbar
