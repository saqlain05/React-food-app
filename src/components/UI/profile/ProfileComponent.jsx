import React from "react";

import { Container, Row, Col } from "reactstrap";

import "../../../styles/all-foods.css";
import "../../../styles/pagination.css";
import { Link } from "react-router-dom";

const ProfileData = (props) => {
  return (
    <>
      <div className="product__item">
        <div className="product__img">
          <Link to="">
            <span><i class={props.icon}></i></span>
            {/* <span><i class="ri-shopping-basket-line"></i></span> */}
          </Link>
        </div>
        <div className="product__content">
          <h4>
            <Link to="">{props.title}</Link>
          </h4>
        </div>
      </div>
    </>


  )
}


const ProfileComponent = () => {
  return (
    
        <Container>
          <Row>
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
              <ProfileData title="My Order" icon="ri-shopping-basket-line"/>
            </Col>
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
              <ProfileData title="My Wallet" icon="ri-wallet-3-line" />
            </Col>
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
              <ProfileData  title="Edit Profie" icon="ri-user-2-line"/>
            </Col>
            <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
              <ProfileData title="Logout" icon="ri-user-3-line"/>
            </Col>
          </Row>
        </Container>
      
  );
};


export default ProfileComponent;
export { ProfileData };
