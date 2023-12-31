import React from "react";
import MetaTitle from "../components/MetaTitle";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const WishList = () => {
    return (
        <>
            <MetaTitle title={"Wish List"} />
            <BreadCrumb title="Wish List" />
            <Container wrapper="wish-list-wrapper home-wrapper py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="wishlist-card mb-2">
                            <div className="wishlist-icon-close">
                                <img
                                    src="images/cross.svg"
                                    alt="Close"
                                    className="cross img-fluid"
                                />
                            </div>

                            <div className="wishlist-product-img">
                                <img
                                    src="images/tab.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="wishlist-card-detail">
                            <div className="wishlist-card-title">
                                <p className="mb-0">
                                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 inch With
                                    Wi-Fi+3G Tablet
                                </p>
                            </div>
                            <div className="wishlist-card-price">
                                <span>$100.00</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="wishlist-card mb-2">
                            <div className="wishlist-icon-close">
                                <img
                                    src="images/cross.svg"
                                    alt="Close"
                                    className="cross img-fluid"
                                />
                            </div>

                            <div className="wishlist-product-img">
                                <img
                                    src="images/famous-01.jpeg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>
                        <div className="wishlist-card-detail">
                            <div className="wishlist-card-title">
                                <p className="mb-0">
                                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 inch With
                                    Wi-Fi+3G Tablet
                                </p>
                            </div>
                            <div className="wishlist-card-price">
                                <span>$100.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default WishList;
