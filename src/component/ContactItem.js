import React from "react";
import { Row, Col } from "react-bootstrap";

const ContactItem = () => {
  return (
    <div>
      <Row>
        <Col lg={1}>
          <img
            width={50}
            src="https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg"
          />
        </Col>
        <Col lg={11}>
          <div>이름</div>
          <div>핸드폰번호</div>
        </Col>
      </Row>
    </div>
  );
};

export default ContactItem;
