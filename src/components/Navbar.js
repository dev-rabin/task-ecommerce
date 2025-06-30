import { FaChevronDown, FaSearch } from "react-icons/fa"
import Logo from "../assets/img/Frame 1.png"
import "../css/Navbar.css"

export default function Navbar() {
    return (
        <>
            <nav className="navbar">
                <section>
                    <div className="primary-container">
                        <div>
                            <img className="logo" src={Logo} alt="" />
                        </div>
                        <div className="search-container">
                            <span className="search-icon">
                                <FaSearch />
                            </span>
                            <input
                                className="search-bar"
                                type="text"
                                placeholder="Search Here..."
                            />
                        </div>
                    </div>

                    <div className="secondary-container">
                        <div className="links-container">
                            <div className="link-item">
                                Zoffi <FaChevronDown className="dropdown-icon" />
                            </div>
                            <div>Become a Seller</div>
                            <div className="link-item">
                                More <FaChevronDown className="dropdown-icon" />
                            </div>
                            <div>Cart</div>
                        </div>
                    </div>
                </section>
            </nav>
        </>
  )
}
