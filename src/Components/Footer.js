import React from "react";
import {Row, Col } from "react-bootstrap";
import "../Css/Footer.css";

const Footer = () => {

   // Get the current date
   const currentDate = new Date();

   return (

       <footer>

           <Row className="footer-row">

               <Col md={4}>
                   <h3>07857409678</h3>
               </Col>

               <Col md={4}>
                   <h3>EcoBurnFuels@gmail.com</h3>
               </Col>

               <Col md={4}>
                   <h3>{currentDate.toLocaleDateString()}</h3>
               </Col>
               
           </Row>

       </footer>

   );

};

export default Footer;