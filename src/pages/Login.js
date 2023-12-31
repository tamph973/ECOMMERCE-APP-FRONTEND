import React from "react";
import MetaTitle from "../components/MetaTitle";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import CustomInput from "../components/CustomInput";

const Login = () => {
    return (
        <>
            <MetaTitle title={"Login"} />
            <BreadCrumb title="Login" />
            <Container wrapper="login-wrapper home-wrapper py-5 ">
                <div className="row">
                    <div className="col-12">
                        <div className="auth-form">
                            <div className="auth-title">
                                <h2 className="mb-3 text-center">Login</h2>
                            </div>
                            <div className="auth-form-inner">
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
                                    <div className="form-inner-input">
                                        <CustomInput
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="form-forgot-password">
                                        <Link to="/forgot-password">
                                            Forgot Password?
                                        </Link>
                                    </div>

                                    <div className="form-inner-bottom d-flex justify-content-center gap-10 mt-2">
                                        <button className="button border-0">
                                            Login
                                        </button>
                                        <Link
                                            to="/sign-up"
                                            className="button sign-up">
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

export default Login;
