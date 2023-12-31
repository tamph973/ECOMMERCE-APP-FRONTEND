import React from "react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsGithub } from "react-icons/bs";
import newletter from "../images/newsletter.png";
import ggplay from "../images/ggplay.png";
import appstore from "../images/appstore.png";

const Footer = () => {
    return (
        <>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row d-flex align-items-center">
                        <div className="col-5 ">
                            <div className="footer-top-data d-flex align-items-center gap-30">
                                <img src={newletter} alt="New Letter" />
                                <h3 className="text-white mb-0">
                                    Sign Up For Newsletter
                                </h3>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-2"
                                    placeholder="Your Email Address"
                                    aria-label="Your Email Address"
                                    aria-describedby="basic-addon2"
                                />
                                <button
                                    className="input-group-text "
                                    id="basic-addon2">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <h4 className=" text-white mb-4">Contact Us</h4>
                            <div>
                                <address className="text-white">
                                    MT Store <br />
                                    Hamlet 4, Tan Thanh commune, <br />
                                    Cai Be district, Tien Giang province <br />
                                    Pincode: 864950
                                </address>
                                <a
                                    href="tel:+84 977490021"
                                    className="mb-3 text-white d-block">
                                    (+84) 977 490 021
                                </a>
                                <a
                                    href="mailto:phtam0907@gmail.com"
                                    className="text-white d-block">
                                    phtam0907@gmail.com
                                </a>
                                <div className="social-links d-flex align-items-center gap-15 mt-3">
                                    <a
                                        href="https://www.facebook.com/TuiTenTam973/"
                                        className="text-white"
                                        target="blank">
                                        <BsFacebook className="text-white fs-5" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/tuitentam973/"
                                        className="text-white"
                                        target="blank">
                                        <BsInstagram className="text-white fs-5" />
                                    </a>
                                    <a
                                        href="https://github.com/tamph973?tab=repositories"
                                        className="text-white"
                                        target="blank">
                                        <BsGithub className="text-white fs-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className=" text-white mb-4">Information</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link
                                    className="text-white py-2 mb-1"
                                    to="privacy-policy">
                                    Privacy Policy
                                </Link>
                                <Link
                                    className="text-white py-2 mb-1"
                                    to="refund-policy">
                                    Refund Policy
                                </Link>
                                <Link
                                    className="text-white py-2 mb-1"
                                    to="shipping-policy">
                                    Shipping Policy
                                </Link>
                                <Link
                                    className="text-white py-2 mb-1"
                                    to="term-of-services">
                                    Term Of Services
                                </Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className=" text-white mb-4">Account</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">
                                    About Us
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    FAQ
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Contact
                                </Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className=" text-white mb-4">Quick Links</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link className="text-white py-2 mb-1">
                                    Laptops
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Tablets
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Phones
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Watches
                                </Link>
                                <Link className="text-white py-2 mb-1">
                                    Accessories
                                </Link>
                            </div>
                        </div>

                        <div className="col-3">
                            <h4 className="text-white mb-4">Our App</h4>
                            <div>
                                <p className="text-white mb-3 py-2">
                                    Download our App and get extra 15% discount
                                    on your first order..!
                                </p>
                                <div className="d-flex align-items-center">
                                    <Link className="text-white">
                                        <img
                                            className="footer-img me-2"
                                            src={ggplay}
                                            alt="Google Play"
                                        />
                                    </Link>
                                    <Link className="text-white">
                                        <img
                                            className="footer-img"
                                            src={appstore}
                                            alt="App Store"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-21">
                            <p className="text-center text-white mb-0">
                                Copyright &copy; {new Date().getFullYear()}
                                &nbsp; Powered by MT STORE. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
