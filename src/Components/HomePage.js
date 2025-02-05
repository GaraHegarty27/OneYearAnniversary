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
                   <strong><u>Welcome To The Life Of Manya and Gara</u></strong>
               </h3>
           </Card.Header>

           <Card.Body className="home-body">
               <h4 className="home-text">
                   This website is dedicated to the life of Manya and Gara. Here you will find photos, 
                   milestones, goals, facts and anything else worth keeping memory of on our adventure 
                   through life together.
               </h4>
           </Card.Body>

       </Card>

   );

}

export default HomePage;