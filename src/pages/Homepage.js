import "../css/Homepage.css"
import ProductImage from "../assets/img/samsung.png"
import { FaRegHeart, FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function Homepage() {
  return (
    <section className="homepage">
      <main className="container">
        <aside className="left-container">
          <header className="filter-title">Filter</header>
          <div className="filter-section">
            <label className="filter-label">Category</label>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" value="electronics" className="custom-checkbox" />
                Electronics
              </label>
              <label className="checkbox-label">
                <input type="checkbox" value="clothing" className="custom-checkbox" />
                Clothing
              </label>
              <label className="checkbox-label">
                <input type="checkbox" value="home" className="custom-checkbox" />
                Home
              </label>
            </div>
            <div className="price-section">
              <label className="filter-label">Price Range</label>
              <input type="range" min="0" max="1000" className="price-range" />
            </div>
          </div>

          <div className="sort-section">
            <label className="filter-label">Sort By</label>
            <select className="filter-select">
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </aside>

        <aside className="right-container">
          {
            [...Array(6)].map((_, index) => (
              <Link to="/product-detail" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="product" >
                  <div className="product-heading">
                    <div className="product-stock">25 Stock</div>
                    <div className="add-fvrt"><FaRegHeart /></div>
                  </div>
                  <div className="product-img">
                    <img src={ProductImage} alt="" />
                  </div>
                  <div className="horizontal-line"></div>
                  <div className="product-title">
                    GoPro HERO6 4K Action Camera - Black
                  </div>
                  <div className="product-desc">
                    Your perfect pack for everyday use and walks in the forest....
                  </div>
                  <div className="product-bottom">
                    <div className="product-price">
                      $2200 <span className="actual-price">$2400</span>
                    </div>
                    <div className="product-rating">
                      4.3 <FaStar className="star-icon" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
        }

        </aside>
      </main>
    </section>
  )
}


