import React from "react";
import MetaTitle from "../components/MetaTitle";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const ResetPassword = () => {
    return (
        <>
            <MetaTitle title={"Reset Pasword"} />
            <BreadCrumb title="Reset Pasword" />
            <Container wrapper="reset-password-wrapper home-wrapper py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-form">
                            <div className="auth-title">
                                <h2 className="mb-3 text-center">
                                    Reset Password
                                </h2>
                            </div>
                            <div className="auth-form-inner">
                                <form
                                    action=" 
                                   "
                                    method="post"
                                    className=" d-flex flex-column gap-15">
                                    <div className="form-inner-input">
                                        <CustomInput
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-inner-input">
                                        <CustomInput
                                            type="password"
                                            name="confirmPassword"
                                            placeholder="Confirm Password"
                                        />
                                    </div>

                                    <div className="form-inner-bottom d-flex justify-content-center gap-10 mt-2">
                                        <Link className="button border-0">
                                            OK
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

export default ResetPassword;
