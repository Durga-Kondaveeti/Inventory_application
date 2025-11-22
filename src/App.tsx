
import './App.css'
import AdminPage from './Pages/admin_page' // make sure admin_page.tsx has a default export

function App() {
  return (
    <div className='Main'>
      {/* Render the admin page as the first (and only) content */}
      <AdminPage />
    </div>
  )
}

export default App
