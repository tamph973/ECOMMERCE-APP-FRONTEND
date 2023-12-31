import React from "react";
import MetaTitle from "../components/MetaTitle";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import Container from "../components/Container";

const CompareProduct = () => {
    return (
        <>
            <MetaTitle title={"Compare Products"} />
            <BreadCrumb title="Compare Products" />
            <Container wrapper="compare-product-wrapper home-wrapper py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="compare-product-card mb-2">
                            <div className="compare-icon-close">
                                <img
                                    src="/images/cross.svg"
                                    alt="Close"
                                    className="cross img-fluid"
                                />
                            </div>

                            <div className="compare-product-img">
                                <img
                                    src="/images/tab.jpg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                        <div className="compare-product-details">
                            <div className="compare-product-title">
                                <p className="mb-0">
                                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 inch With
                                    Wi-Fi+3G Tablet
                                </p>
                            </div>
                            <div className="product-detail-info">
                                <span className="mb-0">$100.00</span>
                            </div>
                            <div className="product-detail-info">
                                <span>Brand:</span>
                                <p className="product-brand-name mb-0">Sony</p>
                            </div>
                            <div className="product-detail-info">
                                <span>Type:</span>
                                <p className="mb-0">Tablet</p>
                            </div>
                            <div className="product-detail-info">
                                <span>SKU:</span>
                                <p className="mb-0">SKU001</p>
                            </div>
                            <div className="product-detail-info">
                                <span>Availability:</span>
                                <p className="mb-0">In Stock</p>
                            </div>
                            <div className="product-detail-info">
                                <span>Color:</span>
                                <ul className="color-list mb-0 d-flex align-items-center gap-10">
                                    <Color />
                                </ul>
                            </div>
                            <div className="product-detail-info">
                                <span>Size:</span>

                                <ul className="size-list d-flex align-items-center gap-10">
                                    <li>S</li>
                                    <li>M</li>
                                    <li>L</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card mb-2">
                            <div className="compare-icon-close">
                                <img
                                    src="/images/cross.svg"
                                    alt="Close"
                                    className="cross img-fluid"
                                />
                            </div>

                            <div className="compare-product-img">
                                <img
                                    src="/images/famous-01.jpeg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                        <div className="compare-product-details">
                            <div className="compare-product-title">
                                <p className="mb-0">
                                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 inch With
                                    Wi-Fi+3G Tablet
                                </p>
                            </div>
                            <div className="product-detail-info">
                                <span className="mb-0">$100.00</span>
                            </div>
                            <div className="product-detail-info">
                                <span>Brand:</span>
                                <p className="product-brand-name mb-0">Sony</p>
                            </div>
                            <div className="product-detail-info">
                                <span>Type:</span>
                                <p className="mb-0">Tablet</p>
                            </div>
                            <div className="product-detail-info">
                                <span>SKU:</span>
                                <p className="mb-0">SKU001</p>
                            </div>
                            <div className="product-detail-info">
                                <span>Availability:</span>
                                <p className="mb-0">In Stock</p>
                            </div>
                            <div className="product-detail-info">
                                <span>Color:</span>
                                <ul className="color-list mb-0 d-flex align-items-center gap-10">
                                    <Color />
                                </ul>
                            </div>
                            <div className="product-detail-info">
                                <span>Size:</span>

                                <ul className="size-list d-flex align-items-center gap-10">
                                    <li>S</li>
                                    <li>M</li>
                                    <li>L</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="compare-product-card mb-2">
                            <div className="compare-icon-close">
                                <img
                                    src="/images/cross.svg"
                                    alt="Close"
                                    className="cross img-fluid"
                                />
                            </div>

                            <div className="compare-product-img">
                                <img
                                    src="/images/famous-02.jpeg"
                                    alt=""
                                    className="img-fluid"
                                />
                            </div>
                        </div>

                        <div className="compare-product-details">
                            <div className="compare-product-title">
                                <p className="mb-0">
                                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 inch With
                                    Wi-Fi+3G Tablet
                                </p>
                            </div>
                            <div className="product-detail-info">
                                <span className="mb-0">$100.00</span>
                            </div>
                            <div className="product-detail-info">
                                <span>Brand:</span>
                                <p className="product-brand-name mb-0">Sony</p>
                            </div>
                            <div className="product-detail-info">
                                <span>Type:</span>
                                <p className="mb-0">Tablet</p>
                            </div>
                            <div className="product-detail-info">
                                <span>SKU:</span>
                                <p className="mb-0">SKU001</p>
                            </div>
                            <div className="product-detail-info">
                                <span>Availability:</span>
                                <p className="mb-0">In Stock</p>
                            </div>
                            <div className="product-detail-info">
                                <span>Color:</span>
                                <ul className="color-list mb-0 d-flex align-items-center gap-10">
                                    <Color />
                                </ul>
                            </div>
                            <div className="product-detail-info">
                                <span>Size:</span>

                                <ul className="size-list d-flex align-items-center gap-10">
                                    <li>S</li>
                                    <li>M</li>
                                    <li>L</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default CompareProduct;
