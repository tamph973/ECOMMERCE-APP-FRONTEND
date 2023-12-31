/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import tab from "../images/tab.jpg";
import Container from "../components/Container";
const Checkout = () => {
    return (
        <>
            <Container wrapper="checkout-wrapper home-wrapper py-5">
                <div className="row">
                    <div className="col-7">
                        <div className="checkout-left-data">
                            <h4 className="website-name">MT Store</h4>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <Link to="/cart" className="text-dark">
                                            Cart
                                        </Link>
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page">
                                        Information
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page">
                                        Shipping
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        aria-current="page">
                                        Payment
                                    </li>
                                </ol>
                            </nav>
                            <div className="py-3">
                                <h4 className="checkout-title">
                                    Contact Information
                                </h4>
                                <div className="checkout-user-details my-2">
                                    Pham Minh Tam (lmht.tg94az@gmail.com)
                                </div>
                                <div className="d-flex align-self-center gap-10">
                                    <input
                                        type="checkbox"
                                        name=""
                                        id="form-checkbox"
                                        className="form-check-input"
                                    />
                                    <label
                                        htmlFor="form-checkbox"
                                        className="form-check-label">
                                        Email me with news and offers
                                    </label>
                                </div>
                            </div>

                            <div>
                                <form
                                    action=""
                                    className="d-flex flex-column gap-15">
                                    <div className="d-flex align-items-center gap-15 justify-content-between">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Full Name"
                                        />
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            placeholder="Your Email"
                                        />
                                    </div>
                                    <div className="d-flex align-items-center gap-15 justify-content-between">
                                        <select
                                            className="form-select form-control w-100 form-floating"
                                            name="address"
                                            id="address" defaultValue="selected" >
                                            <option value="selected" disabled>
                                                Select Province/City
                                            </option>
                                            <option value="">New Delhi</option>
                                            <option value="">Istanbul</option>
                                            <option value="">Jakarta</option>
                                        </select>
                                        <select
                                            className="form-select form-control w-100 "
                                            name="address"
                                            id="address" defaultValue="selected">
                                            
                                            <option value="selected" disabled>
                                                Select District
                                            </option>
                                            <option value="">New Delhi</option>
                                            <option value="">Istanbul</option>
                                            <option value="">Jakarta</option>
                                        </select>
                                        <select
                                            className="form-select form-control w-100 "
                                            name="address"
                                            id="address" defaultValue="selected">
                                            <option value="selected"  disabled>
                                                Select Ward/Commune
                                            </option>
                                            <option value="">New Delhi</option>
                                            <option value="">Istanbul</option>
                                            <option value="">Jakarta</option>
                                        </select>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Address"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Other notes (If any)"
                                        />
                                    </div>

                                    <div className="d-flex align-items-baseline justify-content-between mt-2">
                                        <Link
                                            to="/cart"
                                            className="d-flex align-items-center gap-10 text-secondary">
                                            <BsArrowLeft className="fs-4 " />
                                            <span>Return to cart</span>
                                        </Link>
                                        <Link to="" className="button">
                                            Continue to Payment
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="checkout-right-data">
                            <div className="checkout-product py-3 d-flex align-items-center justify-content-between gap-15">
                                <div className="checkout-product-img ">
                                    <img
                                        className="img-fluid"
                                        src={tab}
                                        alt="Image"
                                    />
                                    <span className="checkout-product-count">
                                        1
                                    </span>
                                </div>

                                <div className="checkout-product-info">
                                    <h5 className="checkout-product-title">
                                        Honor T1 7.0 1 GB 8 RAM 256 ROM
                                        7.00-inch
                                    </h5>
                                    <span className="checkout-product-style">
                                        S / Black
                                    </span>
                                </div>
                                <span className="checkout-product-price">
                                    $100.00
                                </span>
                            </div>
                            <div className="checkout-product checkout-border-bottom py-3 d-flex align-items-center justify-content-between gap-15">
                                <div className="checkout-product-img ">
                                    <img
                                        className="img-fluid "
                                        src={tab}
                                        alt="Image"
                                    />
                                    <span className="checkout-product-count">
                                        1
                                    </span>
                                </div>
                                <div className="checkout-product-info">
                                    <h5 className="checkout-product-title">
                                        Honor T1 7.0 1 GB 8 RAM 256 ROM
                                        7.00-inch
                                    </h5>
                                    <div className="checkout-product-style">
                                        S / Black
                                    </div>
                                </div>
                                <span className="checkout-product-price">
                                    $100.00
                                </span>
                            </div>
                            <div className="checkout-sub-total checkout-border-bottom py-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5>Subtotal</h5>
                                    <span>$200.00</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <h5>Shipping</h5>
                                    <span>$19.65</span>
                                </div>
                            </div>
                            <div className="checkout-price-total mt-4 d-flex align-items-center justify-content-between">
                                <h5>Total Price</h5>
                                <span>$219.65</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Checkout;
