import React from "react";
import MetaTitle from "../components/MetaTitle";
import BreadCrumb from "../components/BreadCrumb";
import Container from "../components/Container";

const RefundPolicy = () => {
    return (
        <>
            <MetaTitle title={"Refund Policy"} />
            <BreadCrumb title="Refund Policy" />
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

export default RefundPolicy;
