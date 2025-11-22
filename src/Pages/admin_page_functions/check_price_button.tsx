import { useState } from "react"
import AdminPage from "../admin_page"
import "../../src/CSS/check_price.css"

type Item = {
  id: number
  name: string
  sellingPrice: number
  buyingPrice: number
  location: string
  quantity: number
}

const itemsData: Item[] = [
  {
    id: 1,
    name: "Glass Sheet",
    sellingPrice: 250,
    buyingPrice: 180,
    location: "Rack A1",
    quantity: 20,
  },
  {
    id: 2,
    name: "Rubber Seal",
    sellingPrice: 50,
    buyingPrice: 30,
    location: "Rack B3",
    quantity: 100,
  },
  {
    id: 3,
    name: "Other Item",
    sellingPrice: 120,
    buyingPrice: 80,
    location: "Rack C2",
    quantity: 40,
  },
]

function Check_price() {
  const [currentPage, setCurrentPage] = useState("check_price")
  const [searchText, setSearchText] = useState("")
  const [selectedItem, setSelectedItem] = useState<Item | null>(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  const goback = () => {
    setCurrentPage("adminpage")
  }

  if (currentPage === "adminpage") {
    return <AdminPage />
  }

  // filter items while typing
  const filteredItems = itemsData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  )

  const handleItemClick = (item: Item) => {
    setSelectedItem(item)
    setIsPopupOpen(true)
  }

  const closePopup = () => {
    setIsPopupOpen(false)
    setSelectedItem(null)
  }

  return (
    <div className="check-price-page">
      <header className="check-price-header">
        <button
          type="button"
          className="back-button"
          aria-label="Go back to admin dashboard"
          onClick={goback}
        >
          ← Back
        </button>
        <h2 className="check-price-title">Check Price</h2>
      </header>

      <main className="check-price-content">
        {/* search bar */}
        <input
          className="search-input"
          type="text"
          placeholder="Search item..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* list of items as buttons */}
        <div className="item-list">
          {filteredItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="item-button"
              onClick={() => handleItemClick(item)}
            >
              <span className="item-name">{item.name}</span>
              <span className="item-price">₹{item.sellingPrice}</span>
            </button>
          ))}

          {filteredItems.length === 0 && (
            <p className="no-results">No items found</p>
          )}
        </div>
      </main>

      {/* popup */}
      {isPopupOpen && selectedItem && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className="popup-box"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <h3 className="popup-title">{selectedItem.name}</h3>
            <p>Quantity: {selectedItem.quantity}</p>
            <p>Selling Price: ₹{selectedItem.sellingPrice}</p>
            <p>Buying Price: ₹{selectedItem.buyingPrice}</p>
            <p>Location: {selectedItem.location}</p>

            <button
              type="button"
              className="close-button"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Check_price
