import Dashboard from "./Components/Dashboard"
import Navbar from "./Components/Navbar"
import Orders from "./Components/Orders";
import Settings from "./Components/Settings";
import Sidebar from "./Components/Sidebar"
import Product from "./Components/Product";
import Customers from './Components/Customers';
import Users from "./Components/Users"
import ThemeContextProvider from "./Context/ThemeContextProvider"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <ThemeContextProvider>
      <Router>
    <div className=" flex">
      <Sidebar/> 
      <div className=" grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white ">
        <Navbar/>
        <Routes>
                <Route path="/" element={<Dashboard />} />           {/* Default route */}
                <Route path="/home" element={<Dashboard />} />
                <Route path="/orders" element={<Orders />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/products" element={<Product/>} /> 
                <Route path="/customers" element={<Customers/>} /> 
                <Route path="/users" element={<Users/>}/> 
                <Route path="*" element={<h1>404 - Page Not Found</h1>} /> {/* Optional: Catch-all for undefined routes */}
              </Routes>
      </div>
      
    </div>
      </Router>
    </ThemeContextProvider>
  )
}

export default App
