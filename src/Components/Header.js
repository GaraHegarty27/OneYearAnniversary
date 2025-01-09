import React from "react";
import {Row, Col} from "react-bootstrap";
import brandLogo from "../Assets/BrandLogo.png";
import "../Css/Header.css";

const Header = () => {

   return (

       <header>
           <Row>
               <Col md={12}>
                   <img src={brandLogo} alt="Company Logo" className="header-logo"/>
               </Col>
           </Row>
       </header>

   );

};

export default Header;