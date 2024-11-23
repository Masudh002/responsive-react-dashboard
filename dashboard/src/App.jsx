import Dashboard from "./Components/Dashboard"
import Navbar from "./Components/Navbar"
import Sidebar from "./Components/Sidebar"

const App = () => {
  return (
    <div className=" flex">
      <Sidebar/>
      <div className=" grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900">
        <Navbar/>
        <div>
           <Dashboard/>
        </div>
      </div>
      
    </div>
  )
}

export default App
