import { useState } from 'react'
import '../CSS/admin_page.css'
import stockIcon from '../images/stock_icon.jpeg'
import Add_stock from '../Pages/admin_page_functions/add_stock-button'
import Check_price from './admin_page_functions/check_price_button'
import User_Page from "../Pages/User_page_functions/User_price_checker"

function AdminPage() {
  // which screen to show: dashboard, add_stock, or check_prisce
  const [currentPage, setCurrentPage] = useState('dashboard')

  const handleAddStock = () => {
    // show Add_stock component
    setCurrentPage('add_stock')
  }

  const handleCheckPrice = () => {
    // show Check_price component
    setCurrentPage('check_price')
  }


//  This is a dummy remove this from the code until the first if condition  
const userPage = () => {
    // show Check_price component
    console.log("Working")
    setCurrentPage('userpage')
}
  // if user clicked "Check Price"
  if (currentPage === 'userpage') {
    return <User_Page />
  }
  

  // until here

  // if user clicked "Add Stock"
  if (currentPage === 'add_stock') {
    return <Add_stock />
  }

  // if user clicked "Check Price"
  if (currentPage === 'check_price') {
    return <Check_price />
  }

  // default view: admin dashboard with 2 cards
  return (
    <div className="admin-page">
      <h2 className="admin-title">Admin Dashboard</h2>

      {/* Card 1: Add Stock */}
      <button className="admin-card" onClick={handleAddStock}>
        <div className="admin-icon_1">
          <img src={stockIcon} alt="Stock icon" />
        </div>
        <div className="admin-card-text">Add Stock</div>
      </button>

      {/* Card 2: Check Price */}
      <button className="admin-card" onClick={handleCheckPrice}>
        <div className="admin-icon_2">$</div>
        <div className="admin-card-text">Check Price</div>
      </button>




      {/* Card 3:Just Testing the userpage */}
      <button className="admin-card" onClick={userPage}>
        <div className="admin-icon_2">++++</div>
        <div className="admin-card-text">User Page</div>
      </button>
    </div>
  )
}

export default AdminPage
