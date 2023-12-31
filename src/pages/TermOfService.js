import React from "react";
import MetaTitle from "../components/MetaTitle";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const TermOfService = () => {
    return (
        <>
            <MetaTitle title={"Term Of Services"} />
            <BreadCrumb title="Term Of Services" />
            <Container wrapper="policy-wrapper home-wrapper py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="policy"></div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default TermOfService;
