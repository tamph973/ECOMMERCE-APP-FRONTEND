import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import MetaTitle from "../components/MetaTitle";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import ProductCard from "../components/ProductCard";
import Color from "../components/Color";
import Container from "../components/Container";
const OurStore = () => {
    const [grid, setGrid] = useState(3);
    return (
        <>
            <MetaTitle title={"Our Store"} />
            <BreadCrumb title="Our Store" />
            <Container wrapper="store-wrapper home-wrapper py-4">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-4">
                            <div className="filter-card-heading">
                                <h3 className="filter-card-title">
                                    Shop By Categories
                                </h3>
                            </div>
                            <div className="filter-card-categories">
                                <ul className="filter-cate-list ps-0">
                                    <li className="filter-cate-item">
                                        <Link>Mac</Link>
                                    </li>
                                    <li className="filter-cate-item">
                                        <Link>iPad</Link>
                                    </li>
                                    <li className="filter-cate-item">
                                        <Link>iPhone</Link>
                                    </li>
                                    <li className="filter-cate-item">
                                        <Link>Watch</Link>
                                    </li>
                                    <li className="filter-cate-item">
                                        <Link>AirPod</Link>
                                    </li>
                                    <li className="filter-cate-item">
                                        <Link>Accessories</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="filter-card mb-4">
                            <div className="filter-card-heading">
                                <h3 className="filter-card-title">Filter By</h3>
                            </div>
                            <div className="filter-card-content">
                                <div className="filter-card-subtitle">
                                    Availability
                                </div>

                                <div className="filter-tick-checked">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="">
                                            Instock (1)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="">
                                            Ouf of Stock (0)
                                        </label>
                                    </div>
                                </div>

                                <div className="filter-card-subtitle">
                                    Price
                                </div>

                                <div
                                    className="filter-card-price d-flex
                                    align-items-center gap-10">
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingInputValue"
                                            placeholder="From"
                                        />
                                        <label htmlFor="floatingInputValue">
                                            From
                                        </label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="floatingInputValue"
                                            placeholder="To"
                                        />
                                        <label htmlFor="floatingInputValue">
                                            To
                                        </label>
                                    </div>
                                </div>

                                <div className="filter-card-subtitle">
                                    Colors
                                </div>

                                <div className="filter-card-color">
                                    <Color />
                                </div>

                                <div className="filter-card-subtitle">Size</div>

                                <div className="filter-size-checked">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="">
                                            S (10)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="">
                                            M (10)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="">
                                            L (10)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="">
                                            M (10)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="">
                                            XL (10)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            value=""
                                            id=""
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="">
                                            XXL (10)
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-4">
                            <div className="filter-card-heading">
                                <h3 className="filter-card-title">
                                    Product Tags
                                </h3>
                            </div>
                            <div className="filter-card-tags d-flex flex-wrap align-items-center">
                                <div className="filter-tag-wrapper ">
                                    <Link className="filter-tags-link">
                                        Mac
                                    </Link>
                                </div>
                                <div className="filter-tag-wrapper ">
                                    <Link className="filter-tags-link">
                                        iPhone
                                    </Link>
                                </div>
                                <div className="filter-tag-wrapper">
                                    <Link className="filter-tags-link">
                                        iPad
                                    </Link>
                                </div>
                                <div className="filter-tag-wrapper ">
                                    <Link className="filter-tags-link">
                                        AirPod
                                    </Link>
                                </div>
                                <div className="filter-tag-wrapper ">
                                    <Link className="filter-tags-link">
                                        Watch
                                    </Link>
                                </div>
                                <div className="filter-tag-wrapper ">
                                    <Link className="filter-tags-link">TV</Link>
                                </div>
                            </div>
                        </div>
                        <div className="filter-card mb-4">
                            <div className="filter-card-heading">
                                <h3 className="filter-card-title">
                                    Random Product
                                </h3>
                            </div>

                            <div className="random-products d-flex align-items-center">
                                <div className="random-products-img">
                                    <img
                                        src="images/iphone-01.jpeg"
                                        alt="Watch"
                                        className="img-fluid object-fit-contain"
                                    />
                                </div>

                                <div className="random-products-content">
                                    <div className="random-products-title">
                                        iPhone 15 Pro Max Clear Case with
                                        MagSafe aaaaaaaaaaaaaaa
                                    </div>
                                    <ReactStars
                                        count={5}
                                        value={3}
                                        size={16}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <div className="random-products-price">
                                        $100.00
                                    </div>
                                </div>
                            </div>
                            <div className="random-products d-flex align-items-center">
                                <div className="random-products-img">
                                    <img
                                        src="images/wireless-charging.jpeg"
                                        alt="Wireless Charging"
                                        className="img-fluid object-fit-contain"
                                    />
                                </div>

                                <div className="random-products-content">
                                    <div className="random-products-title">
                                        Twelve South HiRise 3 Deluxe 3-in-1
                                        Wireless Charging Stand
                                    </div>
                                    <ReactStars
                                        count={5}
                                        value={3}
                                        size={16}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <div className="random-products-price">
                                        $100.00
                                    </div>
                                </div>
                            </div>
                            <div className="random-products d-flex align-items-center">
                                <div className="random-products-img">
                                    <img
                                        src="images/apple-tv-4k-gen-5th-3.jpg"
                                        alt="Apple TV"
                                        className="img-fluid object-fit-contain"
                                    />
                                </div>

                                <div className="random-products-content">
                                    <div className="random-products-title">
                                        Apple TV 4K Wi‑Fi + Ethernet with 128GB
                                        storage
                                    </div>
                                    <ReactStars
                                        count={5}
                                        value={3}
                                        size={16}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <div className="random-products-price">
                                        $100.00
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="filter-sort-gird mb-4">
                            <div className=" d-flex align-items-center justify-content-between">
                                <div className=" d-flex align-items-center">
                                    <p className="mb-0">Sort By:</p>
                                    <div className="filter-sort-select ms-3">
                                        <select
                                            name=""
                                            id=""
                                            className="form-control form-select"
                                            defaultValue="best-selling">
                                            <option value="manual">
                                                Featured
                                            </option>
                                            <option value="best-selling">
                                                Best selling
                                            </option>
                                            <option value="title-ascending">
                                                Alphabetically, A-Z
                                            </option>
                                            <option value="title-descending">
                                                Alphabetically, Z-A
                                            </option>
                                            <option value="price-ascending">
                                                Price, low to high
                                            </option>
                                            <option value="price-descending">
                                                Price, high to low
                                            </option>
                                            <option value="created-ascending">
                                                Date, old to new
                                            </option>
                                            <option value="created-descending">
                                                Date, new to old
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center gap-10">
                                    <div className="total-products ">
                                        20 products
                                    </div>

                                    <div className="d-flex align-item-center gap-10">
                                        <div className="sort-gird-img">
                                            <img
                                                onClick={() => {
                                                    setGrid(3);
                                                }}
                                                src="images/gr1.svg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="sort-gird-img">
                                            <img
                                                onClick={() => {
                                                    setGrid(4);
                                                }}
                                                src="images/gr2.svg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="sort-gird-img">
                                            <img
                                                onClick={() => {
                                                    setGrid(6);
                                                }}
                                                src="images/gr3.svg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                        <div className="sort-gird-img">
                                            <img
                                                onClick={() => {
                                                    setGrid(12);
                                                }}
                                                src="images/gr4.svg"
                                                alt=""
                                                className="img-fluid"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="product-list">
                            <div className="product-list-wrapper d-flex flex-wrap gap-10">
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                                <ProductCard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default OurStore;
