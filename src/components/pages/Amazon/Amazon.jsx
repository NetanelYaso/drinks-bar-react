import "./Amazon.css";
import React, { useState } from "react";
import list from "../../../data/data"
import Cards from "../Cards/Cards";
import {Row,Col} from "react-bootstrap"
function Amazon({ handleClick }) {
  return (
    <section>

      <div className="d-flex justify-content-center container">
        {/* <div className="row justify-content-center"> */}
        <>
            <Row md={2} xs={1} lg={3} className="g-2">
                {list.map((item) =>(
                    <Col key={item.id}>
                        <Cards item={item} handleClick={handleClick} />
                    </Col>
               ) )}
            </Row>
        </>

        {/* {list.map((item) => (
      <Cards key={item.id} item={item} handleClick={handleClick} />
    ))} */}
        {/* </div> */}
      </div>
   
  </section>
  );
};

export default Amazon;
