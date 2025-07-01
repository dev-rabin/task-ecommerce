import { useState } from "react";
import {
    FaChevronDown,
    FaSearch,
    FaUser,
    FaStore,
    FaEllipsisH,
    FaShoppingCart,
} from "react-icons/fa";
import Logo from "../assets/img/Frame 1.png";
import "../css/Navbar.css";

export default function Navbar({ onSearch }) {
    const [showSearch, setShowSearch] = useState(false);

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    return (
        <nav className="navbar">
            <section>
                <div className="primary-container">
                    <div>
                        <img className="logo" src={Logo} alt="Logo" />
                    </div>

                    {/* Search Container */}
                    <div
                        className={`search-container ${showSearch ? "show-on-mobile" : ""
                            }`}
                    >
                       
                        <input
                            className={`search-bar ${showSearch ? "visible" : ""
                                }`}
                            type="text"
                            placeholder="Search Here..."
                            onChange={(e) => onSearch(e.target.value)}
                        />
                    </div>
                </div>

                <div className="secondary-container">
                    <div className="links-container">
                        <span className="search-icon" onClick={toggleSearch}>
                            <FaSearch />
                        </span>
                        <div className="link-item">
                            <span className="link-text">Zoffi</span>
                            <FaUser className="link-icon" />
                            <FaChevronDown className="dropdown-icon" />
                        </div>
                        <div className="link-item">
                            <span className="link-text">Become a Seller</span>
                            <FaStore className="link-icon" />
                        </div>
                        <div className="link-item">
                            <span className="link-text">More</span>
                            <FaEllipsisH className="link-icon" />
                            <FaChevronDown className="dropdown-icon" />
                        </div>
                        <div className="link-item">
                            <span className="link-text">Cart</span>
                            <FaShoppingCart className="link-icon" />
                        </div>
                    </div>
                </div>
            </section>
        </nav>
    );
}
