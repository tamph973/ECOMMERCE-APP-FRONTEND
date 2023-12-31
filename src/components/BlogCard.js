import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
    return (
        <>
            <div className="blog-card">
                <div className="card-image">
                    <img
                        src="/images/blog-1.jpg"
                        alt="Blog"
                        className="img-fluid w-100
                        "
                    />
                </div>
                <div className="blog-content">
                    <time className="blog-time">13 Dec, 2023</time>
                    <h5 className="blog-title">
                        A beautiful sunday morning renaissance
                    </h5>
                    <p className="blog-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est eius quos id quasi assumenda esse eveniet delectus
                        necessitatibus ad nemo pariatur porro, nobis laborum
                        architecto harum suscipit rem quidem illo!
                    </p>
                    <Link className="button" to="/blog/:id">
                        Read more
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BlogCard;
