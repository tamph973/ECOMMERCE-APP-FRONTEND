import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import tab from "../images/tab.jpg";
const SpecialProduct = () => {
    return (
        <>
            <div className="col-4 mb-4">
                <div className="special-product-card">
                    <div className="d-flex justify-content-between">
                        <div className="special-product-img">
                            <img
                                src={tab}
                                alt="Product"
                                className="img-fluid"
                            />
                        </div>
                        <div className="special-product-content">
                            <p className="special-product-brand">Sony</p>
                            <h5 className="special-product-title">
                                Honor T1 7.0 1 GB 8 RAM 256 ROM 7.00-inch
                                display offering a resolution of 600x1024 pixels
                                at a pixel density of 169 pixels per inch (ppi).
                            </h5>
                            <ReactStars
                                count={5}
                                value={3}
                                size={16}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <div className="special-product-price d-flex gap-10 my-2">
                                <span className="price-sale">$100</span>
                                <strike className="original-price">$200</strike>
                            </div>

                            <div className="discount-countdown d-flex align-items-center  mb-3 gap-10">
                                <p className="discount-day mb-0">
                                    <b>5 </b>Days
                                </p>
                                <div className="discount-time d-flex align-items-center">
                                    <span className="badge  discount-time-item mx-1">
                                        1
                                    </span>
                                    :
                                    <span className="badge  discount-time-item mx-1">
                                        1
                                    </span>
                                    :
                                    <span className="badge  discount-time-item mx-1">
                                        1
                                    </span>
                                </div>
                            </div>
                            <div className="special-product-count my-4">
                                <p>Product: 100</p>
                                <div
                                    className="progress"
                                    role="progressbar"
                                    aria-label="Basic example"
                                    aria-valuenow="25"
                                    aria-valuemin="0"
                                    aria-valuemax="100">
                                    <div
                                        className="progress-bar"
                                        style={{ width: "100px" }}></div>
                                </div>
                            </div>
                            <Link className="button">Add to cart</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default SpecialProduct;
