import React from "react";
import MetaTitle from "../components/MetaTitle";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const SignUp = () => {
    return (
        <>
            <MetaTitle title={"Sign Up"} />
            <BreadCrumb title="Sign Up" />
            <Container wrapper="signup-wrapper home-wrapper py-5 ">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-form">
                            <div className="auth-title">
                                <h2 className="mb-3 text-center">Sign Up</h2>
                            </div>
                            <div className="auth-form-inner">
                                <form
                                    action=" 
                                    "
                                    method="post"
                                    className=" d-flex flex-column gap-15">
                                    <div className="form-inner-input">
                                        <CustomInput
                                            type="text"
                                            name="fullName"
                                            placeholder="Full Name"
                                        />
                                    </div>

                                    <div className="form-inner-input">
                                        <CustomInput
                                            type="tel"
                                            name="mobileNumber"
                                            placeholder="Mobile Number"
                                        />
                                    </div>

                                    <div className="form-inner-input">
                                        <CustomInput
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div className="form-inner-input">
                                        <CustomInput
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                    </div>

                                    <div className="form-inner-bottom d-flex justify-content-center gap-10 mt-2">
                                        <Link className="button border-0">
                                            Sign Up
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default SignUp;
