import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { homeServices } from "../utils/Data";

const Home = () => {
    return (
        <>
            {/* Home Banner */}
            <Container wrapper="banner-wrapper py-5">
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner">
                            <img
                                className="img-fluid rounded-3"
                                src="/images/main-banner-1.jpg"
                                alt="Main Banner"
                            />
                            <div className="main-banner-content">
                                <h4>SUPERCHARGED FOR PROS.</h4>
                                <h5>iPad S13+ Pro.</h5>
                                <p>
                                    From $999.00 or $41.62/mo. <br />
                                    for 24 mo.*
                                </p>
                                <Link className="button">BUY NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                            <div className="small-banner ">
                                <img
                                    className="img-fluid rounded-3"
                                    src="/images/catbanner-01.jpg"
                                    alt="Small Banner"
                                />
                                <div className="small-banner-content">
                                    <h4>BEST SALES</h4>
                                    <h5>Laptops Max</h5>
                                    <p>
                                        From $1699.00 or
                                        <br /> $141.58/mo. for 12 mo.*
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner ">
                                <img
                                    className="img-fluid rounded-3"
                                    src="/images/catbanner-02.jpg"
                                    alt="Small Banner"
                                />
                                <div className="small-banner-content">
                                    <h4>15% OFF</h4>
                                    <h5>Smartwatch 7</h5>
                                    <p>
                                        Shop the latest band <br />
                                        styles and colors.
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner ">
                                <img
                                    className="img-fluid rounded-3"
                                    src="/images/catbanner-03.jpg"
                                    alt="Small Banner"
                                />
                                <div className="small-banner-content">
                                    <h4>NEW ARRIVAL</h4>
                                    <h5>IPad Air</h5>
                                    <p>
                                        From $599.00 or <br /> $49.91/mo. for 12
                                        mo.*
                                    </p>
                                </div>
                            </div>
                            <div className="small-banner ">
                                <img
                                    className="img-fluid rounded-3"
                                    src="/images/catbanner-04.jpg"
                                    alt="Small Banner"
                                />
                                <div className="small-banner-content">
                                    <h4>FREE ENGRAVING</h4>
                                    <h5>AirPods Max</h5>
                                    <p>
                                        High-fidelity playback & <br />
                                        ultra-low distortion.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Home Services */}
            <Container wrapper="home-wrapper py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            {homeServices?.map((i, j) => {
                                return (
                                    <div
                                        key={j}
                                        className="d-flex align-items-center gap-15">
                                        <img src={i.image} alt={i.tagline} />
                                        <div className="service-content">
                                            <h6>{i.tagline}</h6>
                                            <p>{i.title}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>

            {/* Home Category */}
            <Container wrapper="home-wrapper py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex flex-wrap  justify-content-between align-items-center rounded-3">
                            <div className="d-flex align-items-center gap-15">
                                <div className="categories-title">
                                    <h6>Computers & Laptop</h6>
                                    <p className="mb-0">10 Items</p>
                                </div>
                                <img
                                    src="/images/laptop.jpg"
                                    alt="Computers & Laptop"
                                />
                            </div>
                            <div className="d-flex align-items-center gap-10">
                                <div className="categories-title">
                                    <h6>Mobiles & Tablets</h6>
                                    <p className="mb-0">10 Items</p>
                                </div>
                                <img
                                    src="/images/mobile.png"
                                    alt="Mobiles & Tablets"
                                />
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <div className="categories-title">
                                    <h6>Apple Watch</h6>
                                    <p className="mb-0">10 Items</p>
                                </div>
                                <img
                                    src="/images/watch.jpg"
                                    alt="Apple Watch"
                                />
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <div className="categories-title">
                                    <h6>AirPods</h6>
                                    <p className="mb-0">10 Items</p>
                                </div>
                                <img src="/images/airpods.jpg" alt="AirPods" />
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <div className="categories-title">
                                    <h6>Smart Television</h6>
                                    <p className="mb-0">10 Items</p>
                                </div>
                                <img
                                    src="/images/tv.jpg"
                                    alt="Smart Television"
                                />
                            </div>
                            <div className="d-flex align-items-center gap-15">
                                <div className="categories-title">
                                    <h6>Cameras & Video</h6>
                                    <p className="mb-0">10 Items</p>
                                </div>
                                <img
                                    src="/images/camera.jpg"
                                    alt="Cameras & Video"
                                />
                            </div>

                            <div className="d-flex align-items-center gap-15">
                                <div className="categories-title">
                                    <h6>HomePod</h6>
                                    <p className="mb-0">10 Items</p>
                                </div>
                                <img
                                    src="/images/home-pod.jpg"
                                    alt="HeaHomePoddphones"
                                />
                            </div>

                            <div className="d-flex align-items-center gap-15">
                                <div className="categories-title">
                                    <h6>Accessories</h6>
                                    <p className="mb-0">10 Items</p>
                                </div>
                                <img
                                    src="/images/accessories.jpg"
                                    alt="Headphones"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Featured Collection */}
            <Container wrapper="featured-wrapper py-5 home-wrapper">
                <div className="row">
                    <div className="col-12">
                        <h4 className="section-heading">Featured Collection</h4>
                    </div>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>

            {/* Famous Product */}
            <Container wrapper="famous-wrapper py-5 home-wrapper">
                <div className="row">
                    <div className="col-12">
                        <p className="section-heading"></p>
                    </div>  
                    <div className="col-4">
                        <div className="famous-card">
                            <div className="famous-content">
                                <div className="famous-content-heading">
                                    <div className="famous-heading-wrapper">
                                        <div className="famous-heading-top">
                                            APPLE WATCH SERIES 9
                                        </div>
                                        <div className="famous-heading-title">
                                            Starlight Aluminum Case with
                                            Starlight Sport Loop
                                        </div>
                                    </div>

                                    <p className="famous-content-price">
                                        From $399.00 or $16.62/mo. for 24 mo.*
                                    </p>
                                </div>
                            </div>
                            <div className="famous-product-img p-4">
                                <img
                                    src="/images/famous-01.jpeg"
                                    alt=""
                                    className="img-fluid object-fit-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="famous-card">
                            <div className="famous-content">
                                <div className="famous-content-heading">
                                    <div className="famous-heading-wrapper">
                                        <div className="famous-heading-top">
                                            APPLE WATCH SE
                                        </div>
                                        <div className="famous-heading-title">
                                            Midnight Aluminum Case with Midnight
                                            Sport Loop
                                        </div>
                                    </div>

                                    <p className="famous-content-price">
                                        From $249.00 or $20.75mo. for 12 mo.*
                                    </p>
                                </div>
                            </div>
                            <div className="famous-product-img p-4">
                                <img
                                    src="/images/famous-02.jpeg"
                                    alt=""
                                    className="img-fluid object-fit-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="famous-card">
                            <div className="famous-content">
                                <div className="famous-content-heading">
                                    <div className="famous-heading-wrapper">
                                        <div className="famous-heading-top">
                                            APPLE WATCH ULTRA 2
                                        </div>
                                        <div className="famous-heading-title">
                                            Titanium Case with Indigo Alpine
                                            Loop
                                        </div>
                                    </div>

                                    <p className="famous-content-price">
                                        From $799.00 or $66.58/mo. for 12 mo.*
                                    </p>
                                </div>
                            </div>
                            <div className="famous-product-img p-4">
                                <img
                                    src="/images/famous-03.jpeg"
                                    alt=""
                                    className="img-fluid object-fit-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Special Products */}
            <Container wrapper="special-wrapper py-5 home-wrapper">
                <div className="row">
                    <div className="col-12">
                        <h4 className="section-heading">Special Products</h4>
                    </div>
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                    <SpecialProduct />
                </div>
            </Container>

            {/* Our Popular Products */}
            <Container wrapper="popular-wrapper py-5 home-wrapper">
                <div className="row">
                    <div className="col-12">
                        <h4 className="section-heading">
                            Our Popular Products
                        </h4>
                    </div>
                </div>
                <div className="row">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </Container>

            {/* Marquee Brand */}
            <Container wrapper="marquee-wrapper py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner rounded-3 card-wrapper ">
                            <Marquee className="d-flex d-flex align-items-center">
                                <div className="mx-3 w-25">
                                    <img src="/images/brand-01.png" alt="" />
                                </div>
                                <div className="mx-3 w-25">
                                    <img src="/images/brand-02.png" alt="" />
                                </div>
                                <div className="mx-3 w-25">
                                    <img src="/images/brand-03.png" alt="" />
                                </div>
                                <div className="mx-3 w-25">
                                    <img src="/images/brand-04.png" alt="" />
                                </div>
                                <div className="mx-3 w-25">
                                    <img src="/images/brand-05.png" alt="" />
                                </div>
                                <div className="mx-3 w-25">
                                    <img src="/images/brand-06png" alt="" />
                                </div>
                                <div className="mx-3 w-25">
                                    <img src="/images/brand-07png" alt="" />
                                </div>
                                <div className="mx-3 w-25">
                                    <img src="/images/brand-08.png" alt="" />
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Our Blog */}
            <Container wrapper="blog-wrapper py-5 home-wrapper">
                <div className="row">
                    <div className="col-12">
                        <h4 className="section-heading">Our Lastest Blogs</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-3">
                        <BlogCard />
                    </div>
                    <div className="col-3">
                        <BlogCard />
                    </div>
                    <div className="col-3">
                        <BlogCard />
                    </div>
                    <div className="col-3">
                        <BlogCard />
                    </div>
                </div>
            </Container>
        </>
    );
};
export default Home;
