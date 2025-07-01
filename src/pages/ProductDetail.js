import ProductImg from "../assets/img/samsung.png"
import "../css/ProductDetail.css"
import { IoShareOutline } from "react-icons/io5"
import { FaRegHeart, FaStar } from "react-icons/fa"
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import { useState } from "react"


export default function ProductDetail() {
    const [selectedColor, setSelectedColor] = useState('');

    return (
        <>
            <main className="product-detail-detail">
                <section className="detail-container">
                    <aside className="left-box">
                        <div className="product-detail-img">
                            <img src={ProductImg} alt="" />
                        </div>
                        <div className="share-detail">
                            <div>
                                <div className="icon-style" style={{ marginBottom: "14px" }}>
                                    <IoShareOutline />
                                </div>
                                <div className="icon-style">
                                    <FaRegHeart />
                                </div>
                            </div>
                            <div>
                                <div className="icon-style" style={{ marginBottom: "14px" }}>
                                    <MdNavigateNext />
                                </div>
                                <div className="icon-style">
                                    <MdNavigateBefore />
                                </div>
                            </div>
                        </div>                        
                    </aside>

                    <aside className="right-box">
                        <div>

                        <div className="product-detail-company">
                            John Lewis ANYDAY
                        </div>

                        <div className="product-detail-title">
                            Long Sleeve Overshirt, Khaki, 6
                        </div>
                        </div>

                        <div className="other-details">
                            <div className="price-details">
                                <div className="actual-price">
                                    $29
                                </div>
                                <div className="discounted-price">
                                    $25
                                </div>
                            </div>
                            <div className="secondary-details">
                                <div className="solded-quantity">1250 Sold</div>
                                <div className="ratings"><FaStar color="#FFA439" /> 4.5</div>
                            </div>
                        </div>
                            <hr className="dotted-line" />
                        <div>
                            <div className="desc">Description : </div>
                            <p>Boba etiam ut bulla tea est potus dilectus singulari compositione saporum et textuum, quae in Taiwan annis 1980 orta sunt. Boba refert ad pilas masticas tapiocas in fundo potus inventas, quae typice lacte tea nigro sapiuntur. Boba phaenomenon. <strong>See More....</strong></p>
                        </div>

                        <div className="color">
                            <div>
                                Color : <span className="color-name">{ selectedColor}</span>

                            </div>
                            <div className="color-box-group">
                                {['Blue', 'Green', 'Brown', 'Red'].map((color, index) => (
                                    <div
                                        key={index}
                                        className={`color-box ${selectedColor === color ? 'selected' : ''}`}
                                        onClick={() => setSelectedColor(color)}
                                    >
                                        <div className="color-fill" style={{ backgroundColor: color }}></div>
                                    </div>
                                ))}
                            </div>
                        </div>

                      

                        <div className="size-container">
                            <div className="size">
                                Size : <span className="size-number">8</span>
                            </div>

                            <div className="size-chart">
                                View Size Chart
                            </div>
                        </div>
                        
                        <div className="main-buttons">
                            <div className="add-to-cart-btn">
                                Add to Cart
                            </div>
                            <div className="checkout-btn">
                                Checkout Now
                            </div>
                        </div>

                        <div className="terms-conditions">
                            Delivery Terms & Conditions
                        </div>
                    </aside>

                </section>


                <div className="more-images">
                    <img src={ProductImg} alt="" />
                    <img src={ProductImg} alt="" />
                    <img src={ProductImg} alt="" />
                    <img src={ProductImg} alt="" />
                    <img src={ProductImg} alt="" />
                </div>
            </main>
        </>
    )
}
