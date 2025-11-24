
import './App.css'
import AdminPage from './Pages/admin_page' // make sure admin_page.tsx has a default export
import Login_page from './Pages/Auth_pages/Auth_pages_configuration'
function App() {
  return (
    <div className='Main'>
      {/* Render the admin page as the first (and only) content */}
      {/* <AdminPage /> */}
      <Login_page/>
    </div>
  )
}

export default App
