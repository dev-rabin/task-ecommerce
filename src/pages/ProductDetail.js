import "../css/ProductDetail.css"
import { IoShareOutline } from "react-icons/io5"
import { FaRegHeart, FaStar } from "react-icons/fa"
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import { useEffect, useState } from "react"
import api from "../api"
import { useParams } from "react-router-dom"
import Loader from "../components/Loader"


export default function ProductDetail() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedColor, setSelectedColor] = useState('');
    const { id } = useParams();
    const [productDetail, setProductDetail] = useState(null);

    const fetchProductDetails = async () => {
        try {
            const response = await api.get(`/products/${id}`);
            setProductDetail(response.data);
            setError(null);
        } catch (error) {
            console.error("Error during fetching product details:", error);
            setError("Failed to load product details.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProductDetails();
    }, [id]);

    if (loading) return <div><Loader/></div>;
    if (error) return <div style={{ color: 'red' }}>{error}</div>;
    if (!productDetail) return <div>No product found.</div>;

    return (
        <>
            <main className="product-detail-detail">
                <div className="routing">Homepage {">"} <span>
                    {productDetail.title}
                </span>
                </div>
                <section className="detail-container">
                    <aside className="left-box">
                        <div style={{display:"flex"}}>
                            <div className="product-detail-img">
                                <img src={productDetail.image} alt="" />
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
                      </div>

                        <div className="more-images">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <img key={index} src={productDetail?.image} alt={`product-${index}`} />
                            ))}
                        </div>
                    </aside>

                    <aside className="right-box">
                        <div>

                            <div className="product-detail-company">
                                {productDetail?.category}
                            </div>

                            <div className="product-detail-title">
                                {productDetail?.title}
                            </div>
                        </div>

                        <div className="other-details">
                            <div className="price-details">
                                <div className="actual-price">
                                    $29
                                </div>
                                <div className="discounted-price">
                                    {productDetail?.price}
                                </div>
                            </div>
                            <div className="secondary-details">
                                <div className="solded-quantity">1250 Sold</div>
                                <div className="ratings"><FaStar color="#FFA439" />{productDetail?.rating?.rate}
                                </div>
                            </div>
                        </div>
                        <hr className="dotted-line" />
                        <div>
                            <div className="desc">Description : </div>
                            <p>
                                {productDetail?.description}
                            </p>
                        </div>

                        <div className="color">
                            <div>
                                Color : <span className="color-name">{selectedColor}</span>

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


               
            </main>
        </>
    )
}
