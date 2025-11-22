import { useState } from "react"
import AdminPage from "../admin_page"
import "../../CSS/add_stock-button.css"

function Add_stock() {
  const [currentPage, setCurrentPage] = useState("add_stock")

  // form values
  const [mode, setMode] = useState("addQuantity")
  const [productType, setProductType] = useState("")
  const [productName, setProductName] = useState("")
  const [quantity, setQuantity] = useState("")
  const [price, setPrice] = useState("")
  const [priceLocation, setPriceLocation] = useState("")
  const [purchasePrice, setPurchasePrice] = useState("")
  const [sellingPrice, setSellingPrice] = useState("")

  const goback = () => {
    setCurrentPage("adminpage")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // for now just show a simple message
    alert("Form submitted")
  }

  if (currentPage === "adminpage") {
    return <AdminPage />
  }

  return (
    <div className="add-stock-page">
      <header className="add-stock-header">
        <button
          type="button"
          className="back-button"
          aria-label="Go back to admin dashboard"
          onClick={goback}
        >
          ← Back
        </button>
        <h2 className="add-stock-title">Stock Management</h2>
      </header>

      <main className="add-stock-content">
        <form className="add-stock-form" onSubmit={handleSubmit}>
          {/* Mode */}
          <label className="form-label">
            Mode
            <select
              className="form-input"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option value="addQuantity">Add Quantity</option>
              <option value="addProduct">Add Product</option>
            </select>
          </label>

          {/* Product Type */}
          <label className="form-label">
            Product Type
            <select
              className="form-input"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
            >
              <option value="">Select type</option>
              <option value="glass">Glass</option>
              <option value="rubber">Rubber</option>
              <option value="other">Other</option>
            </select>
          </label>

          {/* When mode is Add Quantity */}
          {mode === "addQuantity" && (
            <>
              <label className="form-label">
                Product Name
                <select
                  className="form-input"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                >
                  <option value="">Select product</option>
                  <option value="product1">Product 1</option>
                  <option value="product2">Product 2</option>
                </select>
              </label>

              <label className="form-label">
                Quantity
                <input
                  className="form-input"
                  type="number"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </label>
            </>
          )}

          {/* When mode is Add Product */}
          {mode === "addProduct" && (
            <>
              <label className="form-label">
                Product Name
                <input
                  className="form-input"
                  type="text"
                  placeholder="Enter product name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                />
              </label>

              <label className="form-label">
                Product Quantity
                <input
                  className="form-input"
                  type="number"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </label>

              <label className="form-label">
                Price
                <input
                  className="form-input"
                  type="number"
                  placeholder="Enter price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>

              <label className="form-label">
                Price Location
                <input
                  className="form-input"
                  type="text"
                  placeholder="Enter location"
                  value={priceLocation}
                  onChange={(e) => setPriceLocation(e.target.value)}
                />
              </label>

              <label className="form-label">
                Purchase Price
                <input
                  className="form-input"
                  type="number"
                  placeholder="Enter purchase price"
                  value={purchasePrice}
                  onChange={(e) => setPurchasePrice(e.target.value)}
                />
              </label>

              <label className="form-label">
                Selling Price
                <input
                  className="form-input"
                  type="number"
                  placeholder="Enter selling price"
                  value={sellingPrice}
                  onChange={(e) => setSellingPrice(e.target.value)}
                />
              </label>
            </>
          )}

          <div className="form-actions">
            <button className="primary-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </main>
    </div>
  )
}

export default Add_stock
