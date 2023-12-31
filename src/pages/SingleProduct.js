/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import MetaTitle from "../components/MetaTitle";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import Container from "../components/Container";

const SingleProduct = () => {
    const [orderProduct] = useState(true);
    const props = {
        width: 450,
        height: 600,
        zoomWidth: 600,
        img: "/images/tab.jpg",
    };
    const copyToClipboard = (text) => {
        var textField = document.createElement("textarea");
        textField.innerText = text;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand("copy");
        textField.remove();
    };
    return (
        <>
            <MetaTitle title={"Product Name"} />
            <BreadCrumb title="Product Name" />
            <Container wrapper="single-product-wrapper home-wrapper py-5">
                <div className="row">
                    <div className="col-6">
                        <div className="single-product-img d-flex gap-15 flex-column">
                            <div className="main-product-img">
                                <ReactImageZoom {...props} />
                            </div>
                            <div className="single-product-other-img d-flex gap-15 flex-wrap">
                                <div>
                                    <img
                                        src="/images/tab1.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/images/tab2.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/images/tab3.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                                <div>
                                    <img
                                        src="/images/tab.jpg"
                                        alt=""
                                        className="img-fluid"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="single-product-details">
                            <div className="single-product-title">
                                <h3 className="product-title">
                                    Honor T1 7.0 1 GB 8 RAM 256 ROM 7.00-inch
                                </h3>
                            </div>
                            <div className="single-product-second">
                                <div className="single-product-price">
                                    <span className="product-price">
                                        $100.00
                                    </span>
                                </div>

                                <div className="single-product-rating d-flex align-items-center gap-10">
                                    <div className="product-rating-star">
                                        <ReactStars
                                            count={5}
                                            value={3}
                                            size={16}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div className="product-rating-count">
                                        <span>(2 reviews)</span>
                                    </div>
                                </div>

                                <div className="write-reviews-link">
                                    <a href="#reviews">Write a reviews</a>
                                </div>
                            </div>

                            <div className="single-product-info py-3 d-flex flex-column gap-15">
                                <div className="product-info-type d-flex align-items-center gap-10">
                                    <h5 className="product-info-title mb-0">
                                        Type :
                                    </h5>
                                    <span className="product-type">Tablet</span>
                                </div>

                                <div className="product-info-brand d-flex align-items-center gap-10">
                                    <h5 className="product-info-title mb-0">
                                        Brand :
                                    </h5>
                                    <span className="product-brand">Sony</span>
                                </div>

                                <div className="product-info-cate d-flex align-items-center gap-10">
                                    <h5 className="product-info-title mb-0">
                                        Categories :
                                    </h5>
                                    <span className="product-cate">Tablet</span>
                                </div>

                                <div className="product-info-tags d-flex align-items-center gap-10">
                                    <h5 className="product-info-title mb-0">
                                        Tags :
                                    </h5>
                                    <ul className="product-tags-list d-flex align-items-center gap-10">
                                        <li className="product-tags-item">
                                            tablet
                                        </li>
                                        <li className="product-tags-item">
                                            ipad
                                        </li>
                                        <li className="product-tags-item">
                                            mobile-devices
                                        </li>
                                        <li className="product-tags-item">
                                            sony
                                        </li>
                                        <li className="product-tags-item">
                                            honor
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-info-sku d-flex align-items-center gap-10">
                                    <h5 className="product-info-title mb-0">
                                        SKU :
                                    </h5>
                                    <span className="product-sku">SKU001</span>
                                </div>
                                <div className="product-info-availability d-flex align-items-center gap-10 ">
                                    <h5 className="product-info-title mb-0">
                                        In Stock :
                                    </h5>
                                    <span className="product-instock">
                                        10 Products
                                    </span>
                                </div>
                                <div className="product-info-size d-flex flex-column gap-10 ">
                                    <h5 className="product-info-title mb-0">
                                        Size
                                    </h5>
                                    <ul className="product-sizes-list d-flex align-items-center gap-10">
                                        <li className="product-sizes-item">
                                            S
                                        </li>
                                        <li className="product-sizes-item">
                                            M
                                        </li>
                                        <li className="product-sizes-item">
                                            L
                                        </li>
                                        <li className="product-sizes-item">
                                            XL
                                        </li>
                                        <li className="product-sizes-item">
                                            XXL
                                        </li>
                                    </ul>
                                </div>
                                <div className="product-info-color d-flex flex-column gap-10 ">
                                    <h5 className="product-info-title mb-0">
                                        Color
                                    </h5>
                                    <div className="product-colors">
                                        <Color />
                                    </div>
                                </div>
                                <div className="product-info-quantity d-flex align-items-center gap-10 ">
                                    <h5 className="product-info-title mb-0">
                                        Quantity :
                                    </h5>
                                    <div className="product-quantity">
                                        <input
                                            type="number"
                                            name=""
                                            id=""
                                            style={{ width: "70px" }}
                                            min={1}
                                            max={100}
                                            className="form-control"
                                        />
                                    </div>
                                </div>

                                <div className="product-purchase d-flex align-items-center gap-30 py-2">
                                    <button className="button">
                                        Add to cart
                                    </button>
                                    <button className="button buy-it">
                                        Buy it now
                                    </button>
                                </div>

                                <div className="d-flex align-items-center gap-30">
                                    <div className="add-wishlist d-flex align-items-center gap-10">
                                        <img src="/images/wish.svg" alt="" />
                                        <a href="/">Add to wishlist</a>
                                    </div>
                                    <div className="add-compare d-flex align-items-center gap-10">
                                        <img
                                            src="/images/prodcompare.svg"
                                            alt=""
                                        />
                                        <a href="/">Add to compare</a>
                                    </div>
                                </div>

                                <div className="product-info-shipping d-flex flex-column gap-10 py-3">
                                    <h5 className="product-info-title mb-0">
                                        Shipping & Returns :
                                    </h5>
                                    <p className="shipping-desc">
                                        Free shipping and returns available on
                                        all orders! <br />
                                        We ship all US domestic orders within{" "}
                                        <b>5-10 business days!</b>
                                    </p>
                                </div>
                                <div className="product-share-link d-flex gap-10 align-items-center">
                                    <h5 className="product-info-title mb-0">
                                        Product link :
                                    </h5>
                                    <a
                                        onClick={() => {
                                            copyToClipboard(
                                                "https://www.youtube.com/watch?v=eu0rExO_C3A&list=PL0g02APOH8okXhOQLOLcB_nifs1U41im5&index=8"
                                            );
                                        }}>
                                        Copy Link Product
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container wrapper="description-wrapper home-wrapper py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="desc-inner">
                            <h4 className="title-common">Description</h4>
                            <div className="desc-details">
                                <p className="mb-0">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Commodi culpa rerum
                                    mollitia ad vitae itaque? Sunt et, tempora
                                    numquam voluptatibus sequi aperiam, nostrum
                                    commodi nisi suscipit laudantium incidunt?
                                    Obcaecati, perferendis!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container wrapper="reviews-wrapper home-wrapper">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h4 id="reviews" className="title-common">
                                Reviews
                            </h4>
                            <div className="reviews-inner">
                                <div className="reviews-head d-flex align-items-end justify-content-between">
                                    <div className="reviews-head-details">
                                        <h5>Customer Reviews</h5>
                                        <div className="d-flex gap-10 align-items-center">
                                            <div className="reviews-star">
                                                <ReactStars
                                                    count={5}
                                                    value={3}
                                                    size={16}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                            <p className="reviews-count mb-0">
                                                Base on 2 reviews
                                            </p>
                                        </div>
                                    </div>
                                    {orderProduct && (
                                        <div>
                                            <a
                                                href="/"
                                                className="text-decoration-underline write-a-reviews">
                                                Write a reviews
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <div className="reviews-form py-4">
                                    <h5>Write A Reviews</h5>
                                    <form action="">
                                        <div className="contact-form-comment mb-4">
                                            <div className="reviews-star">
                                                <ReactStars
                                                    count={5}
                                                    value={0}
                                                    size={16}
                                                    edit={true}
                                                    activeColor="#ffd700"
                                                />
                                            </div>

                                            <textarea
                                                name=""
                                                placeholder="Comment"
                                                id=""
                                                cols="30"
                                                rows="4"
                                                className="w-100 form-control"></textarea>
                                        </div>
                                        <div className="contact-form-send d-flex justify-content-end">
                                            <button className="button border-0">
                                                Submit Review
                                            </button>
                                        </div>
                                    </form>
                                </div>
                                <div className="reviews-user-write mt-4">
                                    <div className="reviews-users py-3">
                                        <div className="reviews-user-rating d-flex align-items-center gap-10">
                                            <h6 className="user-rating mb-0">
                                                User
                                            </h6>
                                            <div className="reviews-star">
                                                <ReactStars
                                                    count={5}
                                                    value={3}
                                                    size={16}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                        </div>
                                        <div className="reviews-users-comment mt-2">
                                            <p>
                                                Great staff, I will get more
                                                orders from you guys
                                            </p>
                                        </div>
                                    </div>
                                    <div className="reviews-users py-3">
                                        <div className="reviews-user-rating d-flex align-items-center gap-10">
                                            <h6 className="user-rating mb-0">
                                                User 1
                                            </h6>
                                            <div className="reviews-star">
                                                <ReactStars
                                                    count={5}
                                                    value={3}
                                                    size={16}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                        </div>
                                        <div className="reviews-users-comment mt-2">
                                            <p>
                                                Great staff, I will get more
                                                orders from you guys
                                            </p>
                                        </div>
                                    </div>
                                    <div className="reviews-users py-3">
                                        <div className="reviews-user-rating d-flex align-items-center gap-10">
                                            <h6 className="user-rating mb-0">
                                                User 2
                                            </h6>
                                            <div className="reviews-star">
                                                <ReactStars
                                                    count={5}
                                                    value={3}
                                                    size={16}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                        </div>
                                        <div className="reviews-users-comment mt-2">
                                            <p>
                                                Great staff, I will get more
                                                orders from you guys
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container wrapper="popular-wrapper py-5 home-wrapper">
                <div className="row">
                    <div className="col-12">
                        <h4 className="section-heading">You May Also Like</h4>
                    </div>
                </div>
                <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>
        </>
    );
};

export default SingleProduct;
