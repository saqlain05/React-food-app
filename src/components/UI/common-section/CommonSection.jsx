import React from "react";
import { Container } from "reactstrap";
import "../../../styles/common-section.css";

const CommonSection = (props) => {
  return (
    <section className="common__section">
      <Container>
        <div className="d-flex align-items-end">
        <h2 className="text-white">{props.title}</h2>
        <h6 className="text-white">{props.location}</h6>
        </div>
        
      </Container>
    </section>
  );
};

export default CommonSection;
