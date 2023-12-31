import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import MetaTitle from "../components/MetaTitle";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
const Blog = () => {
    return (
        <>
            <MetaTitle title={"Blogs"} />
            <BreadCrumb title="Blogs" />
            <Container wrapper="blog-wrapper py-4 home-wrapper">
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
                    </div>

                    <div className="col-9">
                        <div className="row">
                            <div className="grid-6 mb-4">
                                <BlogCard />
                            </div>
                            <div className="grid-6 mb-4">
                                <BlogCard />
                            </div>
                            <div className="grid-6 mb-4">
                                <BlogCard />
                            </div>
                            <div className="grid-6 mb-4">
                                <BlogCard />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Blog;
