import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  const searching = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCHING", payload: { keyword } });
  };
  return (
    <Form onSubmit={searching} className="search-form">
      <Row>
        <Col>
          <Form.Control
            type="text"
            placeholder="name"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
