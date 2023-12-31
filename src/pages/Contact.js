import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import MetaTitle from "../components/MetaTitle";
import { FaHome, FaPhoneAlt, FaMailBulk, FaInfo } from "react-icons/fa";
import Container from "../components/Container";
const Contact = () => {
    return (
        <>
            <MetaTitle title={"Contact"} />
            <BreadCrumb title="Contact" />
            <Container wrapper="contact-wrapper home-wrapper py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="contact-map-wrapper mb-4 ">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2283.9293996177075!2d105.8313593023494!3d10.325467965613992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDE5JzMyLjkiTiAxMDXCsDQ5JzU3LjgiRQ!5e0!3m2!1svi!2s!4v1703180006698!5m2!1svi!2s"
                                height="400"
                                className="border-0 w-100"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="contact-form-wrapper d-flex align-content-center justify-content-between">
                            <div className="contact-form">
                                <div className="contact-form-title mb-4">
                                    <h3>Contact Form</h3>
                                </div>
                                <div className="contact-form-content">
                                    <form action="">
                                        <div className="contact-form-input mb-3">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Name"
                                                name=""
                                                id=""
                                            />
                                        </div>
                                        <div className="contact-form-input mb-3">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Email *"
                                                name=""
                                                id=""
                                            />
                                        </div>
                                        <div className="contact-form-input mb-3">
                                            <input
                                                className="form-control"
                                                type="text"
                                                placeholder="Phone number"
                                                name=""
                                                id=""
                                            />
                                        </div>
                                        <div className="contact-form-comment mb-4">
                                            <textarea
                                                name=""
                                                placeholder="Comment"
                                                id=""
                                                cols="30"
                                                rows="4"
                                                className="w-100 form-control"></textarea>
                                        </div>
                                        <div className="contact-form-send">
                                            <button className="button border-0">
                                                Send
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                            <div className="contact-information">
                                <div className="contact-form-title mb-4">
                                    <h3>Get In Touch With Us</h3>
                                </div>
                                <div className="contact-form-content">
                                    <ul className="ps-0">
                                        <li className="mb-3 d-flex align-items-center gap-10">
                                            <FaHome className="fs-5" />
                                            <address className="mb-0">
                                                MT Store, Tan Thanh commune, Cai
                                                Be district, Tien Giang province
                                            </address>
                                        </li>
                                        <li className="mb-3 d-flex align-items-center gap-10">
                                            <FaPhoneAlt className="fs-5" />
                                            <a
                                                href="tel:+84 977490021"
                                                className="d-block">
                                                (+84) 977 490 021
                                            </a>
                                        </li>
                                        <li className="mb-3 d-flex align-items-center gap-10">
                                            <FaMailBulk className="fs-5" />
                                            <a
                                                href="mailto:phtam0907@gmail.com"
                                                className="d-block">
                                                phtam0907@gmail.com
                                            </a>
                                        </li>
                                        <li className="d-flex align-items-center gap-10">
                                            <FaInfo className="fs-5" />
                                            <p className="mb-0">
                                                Monday - Saturday: 10 AM - 8 PM
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Contact;
