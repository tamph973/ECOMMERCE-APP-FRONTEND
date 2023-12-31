import React from "react";
import MetaTitle from "../components/MetaTitle";
import BreadCrumb from "../components/BreadCrumb";
import tab from "../images/tab.jpg";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
    return (
        <>
            <MetaTitle title={"Cart"} />
            <BreadCrumb title="Cart" />

            <Container wrapper="cart-wrapper home-wrapper py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="cart-heading py-3 d-flex align-items-center justify-content-between">
                            <h5 className="head-title cart-col-1">Product</h5>
                            <h5 className="head-title cart-col-2">Price</h5>
                            <h5 className="head-title cart-col-3">Quantity</h5>
                            <h5 className="head-title cart-col-4">Total</h5>
                        </div>

                        <div className="cart-data py-3 d-flex align-items-center justify-content-between">
                            <div className="cart-col-1 d-flex align-items-center gap-15">
                                <div className="cart-product-img ">
                                    <img
                                        src={tab}
                                        alt="Tablet"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="cart-product-info w-75 d-flex flex-column gap-10">
                                    <h5 className="cart-product-title">
                                        Honor T1 7.0 1 GB 8 RAM 256 ROM
                                        7.00-inch
                                    </h5>
                                    <div className="cart-product-size">
                                        Size: S
                                    </div>
                                    <div className="cart-product-color">
                                        Color: Black
                                    </div>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <span className="cart-product-price">
                                    $100.00
                                </span>
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    className="form-control w-50"
                                    min={1}
                                    max={100}
                                />
                                <div className="delete-button">
                                    <MdDelete className="fs-4    text-white" />
                                </div>
                            </div>
                            <div className="cart-col-4">
                                <span className="cart-total-price">
                                    $100.00
                                </span>
                            </div>
                        </div>
                        <div className="cart-data py-3 d-flex align-items-center justify-content-between">
                            <div className="cart-col-1 d-flex align-items-center gap-15">
                                <div className="cart-product-img">
                                    <img
                                        src={tab}
                                        alt="Tablet"
                                        className="img-fluid"
                                    />
                                </div>
                                <div className="cart-product-info w-75 d-flex flex-column gap-10">
                                    <h5 className="cart-product-title">
                                        Honor T1 7.0 1 GB 8 RAM 256 ROM
                                        7.00-inch
                                    </h5>
                                    <div className="cart-product-size">
                                        Size: S
                                    </div>
                                    <div className="cart-product-color">
                                        Color: Black
                                    </div>
                                </div>
                            </div>
                            <div className="cart-col-2">
                                <span className="cart-product-price">
                                    $100.00
                                </span>
                            </div>
                            <div className="cart-col-3 d-flex align-items-center gap-15">
                                <input
                                    type="number"
                                    name=""
                                    id=""
                                    className="form-control w-50"
                                    min={1}
                                    max={100}
                                />
                                <div className="delete-button">
                                    <MdDelete className="fs-4    text-white" />
                                </div>
                            </div>
                            <div className="cart-col-4">
                                <span className="cart-total-price">
                                    $100.00
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 py-3 mt-3">
                        <div className="cart-bottom d-flex align-items-baseline justify-content-between">
                            <Link to="/store" className="button">
                                Continue Shopping
                            </Link>
                            <div className="d-flex flex-column gap-10 align-items-end">
                                <div className="cart-sub-total d-flex align-items-center gap-15">
                                    <span>SubTotal:</span>
                                    <span className="sub-total-price">
                                        $200.00
                                    </span>
                                </div>

                                <p className="cart-fee-desc">
                                    Taxes and shipping caculated at checkout
                                </p>
                                <Link to="/checkout" className="button">
                                    Check Out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Cart;
