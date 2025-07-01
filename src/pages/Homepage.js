import "../css/Homepage.css";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import api from "../api";
import { useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";

export default function Homepage({ searchQuery }) {
  const [loading, setLoading] = useState(false);
  const didFetchRef = useRef(false);
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(1000);
  const [sortOption, setSortOption] = useState("Relevance");

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error during products fetching!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!didFetchRef.current) {
      fetchProducts();
      didFetchRef.current = true;
    }
  }, []);

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((cat) => cat !== value)
    );
  };

  const handlePriceChange = (e) => {
    setPriceRange(parseInt(e.target.value));
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category.toLowerCase());
      const matchesPrice = product.price <= priceRange;
      const matchesSearch =
        product.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesPrice && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortOption) {
        case "Price: Low to High":
          return a.price - b.price;
        case "Price: High to Low":
          return b.price - a.price;
        case "Newest First":
          return b.id - a.id;
        default:
          return 0;
      }
    });

  if (loading) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  return (
    <section className="homepage">
      <main className="container">
        {/* LEFT FILTER PANEL */}
        <aside className="left-container">
          <header className="filter-title">Filter</header>
          <div className="filter-section">
            <label className="filter-label">Category</label>
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="electronics"
                  className="custom-checkbox"
                  onChange={handleCategoryChange}
                />
                Electronics
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="jewelery"
                  className="custom-checkbox"
                  onChange={handleCategoryChange}
                />
                Jewelry
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="men's clothing"
                  className="custom-checkbox"
                  onChange={handleCategoryChange}
                />
                Men's Clothing
              </label>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  value="women's clothing"
                  className="custom-checkbox"
                  onChange={handleCategoryChange}
                />
                Women's Clothing
              </label>
            </div>

            <div className="price-section">
              <label className="filter-label">Price Range</label>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange}
                className="price-range"
                onChange={handlePriceChange}
              />
              <div>${priceRange}</div>
            </div>
          </div>

          <div className="sort-section">
            <label className="filter-label">Sort By</label>
            <select
              className="filter-select"
              value={sortOption}
              onChange={handleSortChange}
            >
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest First</option>
            </select>
          </div>
        </aside>

        {/* RIGHT PRODUCT LIST PANEL */}
        <aside className="right-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <Link
                to={`/product-detail/${product.id}`}
                key={product.id || index}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="product">
                  <div className="product-heading">
                    <div className="product-stock">25 Stock</div>
                    <div className="add-fvrt">
                      <FaRegHeart />
                    </div>
                  </div>
                  <div className="product-img">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="horizontal-line"></div>
                  <div className="product-title">{product.title}</div>
                  <div className="product-desc">{product.description}</div>
                  <div className="product-bottom">
                    <div className="product-price">
                      ${product.price}{" "}
                      <span className="actual-price">$2400</span>
                    </div>
                    <div className="product-rating">
                      {product.rating?.rate} <FaStar className="star-icon" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div style={{ padding: "20px" }}>No products match the filters or searching.</div>
          )}
        </aside>
      </main>
    </section>
  );
}
