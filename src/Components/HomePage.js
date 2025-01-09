import React from "react";
import "../Css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card} from "react-bootstrap";
import "../Css/HomePage.css";

function HomePage() {

   return (

       <Card className="home-card">

           <Card.Header className="home-header">
               <h3 className="home-title">
                   <strong><u>Welcome To EcoBurn Fuels</u></strong>
               </h3>
           </Card.Header>

           <Card.Body className="home-body">
               <h4 className="home-text">
                   EcoBurn Fuels specializes in providing fuel options that create less harmful
                   emissions. We offer a variety of fuel options that are not only cost-effective but
                   also more environmentally friendly.
                   We are committed to reducing our carbon footprint and helping our customers do the
                   same. We cater to both private and industrial use. Contact us today to learn more
                   about our products and services.
               </h4>
           </Card.Body>

       </Card>

   );

}

export default HomePage;