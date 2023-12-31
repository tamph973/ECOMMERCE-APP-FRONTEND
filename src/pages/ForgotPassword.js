import React from "react";
import MetaTitle from "../components/MetaTitle";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
    return (
        <>
            <MetaTitle title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" />
            <Container wrapper="forgot-wrapper home-wrapper py-5 ">
                <div className="row">
                    <div className="col-12">
                        <div className="forgot-form">
                            <div className="forgot-heading">
                                <h2 className="mb-2 text-center">
                                    Reset Your Password
                                </h2>
                                <p className="mt-2 mb-3 text-center">
                                    We will send an email to reset your password
                                </p>
                            </div>
                            <div className="forgot-form-inner mt-3">
                                <form
                                    action=" 
                       "
                                    method="post"
                                    className=" d-flex flex-column gap-15">
                                    <div className="form-inner-input">
                                        <CustomInput
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </div>

                                    <div className="form-inner-bottom d-flex justify-content-center align-items-center gap-10 flex-column mt-2">
                                        <button
                                            className="button border-0"
                                            type="submit">
                                            Submit
                                        </button>
                                        <Link
                                            to="/login"
                                            className="cancel-reset">
                                            Cancel
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

export default ForgotPassword;
