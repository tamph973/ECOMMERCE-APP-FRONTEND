import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
import wish from "../images/wish.svg";
import tab from "../images/tab.jpg";
import tab1 from "../images/tab1.jpg";
import view from "../images/view.svg";
import prodcompare from "../images/prodcompare.svg";
import addcart from "../images/add-cart.svg";

const ProductCard = (props) => {
    const { grid } = props;
    let location = useLocation();

    return (
        <>
            <div
                className={`${
                    location.pathname === "/store" ? `grid-${grid}` : "col-3"
                }`}>
                <Link to="/product/:id" className="product-card">
                    <div className="wishlist-icon">
                        <button className="border-0 bg-transparent">
                            <img src={wish} alt="WishList" />
                        </button>
                    </div>

                    <div className="card-image">
                        <img
                            src={tab}
                            alt="Product"
                            className="img-fluid object-fit-contain"
                        />
                        <img
                            src={tab1}
                            alt="Product"
                            className="img-fluid object-fit-contain"
                        />
                    </div>

                    <div className="product-content">
                        <p className="product-brand">Sony</p>
                        <h5 className="product-title">
                            Honor T1 7.0 1 GB 8 RAM 256 ROM 7.00-inch
                        </h5>
                        <ReactStars
                            count={5}
                            value={3}
                            size={24}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p
                            className={` product-description ${
                                grid === 12 ? "d-block" : "d-none"
                            }`}>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Repellendus amet molestias in, at aperiam qui
                            esse. Corporis, qui fugiat! Soluta libero veritatis
                            ad facilis quaerat quidem nulla, consequatur eveniet
                            recusandae...
                        </p>
                        <p className="product-price">$100.00</p>
                    </div>
                    <div className="action-bar">
                        <div className="d-flex flex-column align-items-center gap-15">
                            <button
                                to="/product/:id"
                                className="action-bar-view text-center border-0">
                                <img src={view} alt="View" />
                            </button>
                            <button className="action-bar-compare text-center border-0 ">
                                <img src={prodcompare} alt="Compare" />
                            </button>
                            <button
                                to="/product/:id"
                                className="action-bar-addcart text-center border-0 ">
                                <img src={addcart} alt="Add-cart" />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default ProductCard;
