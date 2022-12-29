import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";

import "../styles/checkout.css";
import { Link } from "react-router-dom";

const Checkout = (props) => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 10;

  const totalAmount = cartTotalAmount + Number(shippingCost);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemss = useSelector((state) => console.log(state.cart.cartItems));

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        {cartItems.length !== 0 ? (
          <Container>
            <Row>
              <Col lg="8" md="6">
                <h6 className="mb-4">Shipping Address</h6>
                <form className="checkout__form" onSubmit={submitHandler}>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      required
                      onChange={(e) => setEnterName(e.target.value)}
                    />
                  </div>

                  <div className="form__group">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      onChange={(e) => setEnterEmail(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="number"
                      placeholder="Phone number"
                      required
                      onChange={(e) => setEnterNumber(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="Country"
                      required
                      onChange={(e) => setEnterCountry(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="text"
                      placeholder="City"
                      required
                      onChange={(e) => setEnterCity(e.target.value)}
                    />
                  </div>
                  <div className="form__group">
                    <input
                      type="number"
                      placeholder="Postal code"
                      required
                      onChange={(e) => setPostalCode(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="addTOCart__btn">
                    Payment
                  </button>
                </form>
              </Col>

              <Col lg="4" md="6">
                <div className="checkout__bill">
                  {cartItems.map((item)=>(
                    <div style={{display:'flex', alignItems:"center", justifyContent:"space-between"}}>
                    <h5>{item.title}</h5>
                    <h6>{"₹" + item.price +  " (x" + item.quantity + ")"}</h6>
                  </div>
                  ))}
                  <br></br>
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Subtotal: <span>₹{cartTotalAmount}</span>
                  </h6>
                  <h6 className="d-flex align-items-center justify-content-between mb-3">
                    Tax & Other Charges: <span>₹{shippingCost}</span>
                  </h6>
                  <div className="checkout__total">
                    <h5 className="d-flex align-items-center justify-content-between">
                      Total: <span>₹{totalAmount}</span>
                    </h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        ) : (
          <div style={{ display: 'flex', alignItems: "center", justifyContaint: "center", flexDirection: 'column' }}>
            <h4>Nothing to Checkout</h4>
            <div className="cart__page-btn">
              <button className="addTOCart__btn me-4"
                style={{ width: "100%", padding: "10px 0px", fontSize: "1rem" }}>
                <Link to="/foods">Continue Shopping</Link>
              </button>
            </div>
          </div>)}
      </section>
    </Helmet>
  );
};

export default Checkout;
