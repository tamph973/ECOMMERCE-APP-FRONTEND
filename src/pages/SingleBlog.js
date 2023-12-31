/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import MetaTitle from "../components/MetaTitle";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import blog from "../images/blog-1.jpg";
import Container from "../components/Container";
const SingleBlog = () => {
    return (
        <>
            <MetaTitle title={"Single Blog"} />
            <BreadCrumb title="Single Blog" />
            <Container wrapper="blog-wrapper py-4 home-wrapper">
                    <div className="row">
                        <div className="col-12">
                            <div className="single-blog-card">
                                <Link
                                    to="/blogs"
                                    className="d-flex align-items-center gap-10">
                                    <BsArrowLeft className="fs-4" />
                                    Back to blog
                                </Link>
                                <div className="single-blog-title">
                                    <h3>
                                        A beautiful sunday morning renaissance
                                    </h3>
                                </div>
                                <div className="single-blog-img">
                                    <img
                                        src={blog}
                                        alt="Blog"
                                        className="img-fluid my-4 w-100"
                                    />
                                </div>
                                <div className="single-blog-desc">
                                    <p className="mb-0">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Atque quis molestias
                                        animi quo minima, id quisquam doloremque
                                        illo, quasi cum voluptatum obcaecati
                                        illum, autem tempora temporibus unde?
                                        Repellat, odit perspiciatis?
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
            </Container>
        </>
    );
};

export default SingleBlog;
