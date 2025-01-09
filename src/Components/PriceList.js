import React from "react";
import "../Css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Table, Carousel} from "react-bootstrap";
import "../Css/PriceList.css";


function PriceList() {

   return (

       <Card className="pricelist-card">
           <Card.Header className="pricelist-header">
               <h3 className="pricelist-header-h3">
                   <strong><u>Price Lists</u></strong>
               </h3>
           </Card.Header>


           <Carousel interval={2500}>

               <Carousel.Item>
                   <Card.Header className="pricelist-header">
                       <h4 className="pricelist-header-h3">
                           <strong>For orders over 1000kg please contact our office</strong>
                       </h4>
                   </Card.Header>
               </Carousel.Item>

               <Carousel.Item>
                   <Card.Header className="pricelist-header">
                       <h4 className="pricelist-header-h3">
                           <strong>For information on our seasonal offers please contact our office</strong>
                       </h4>
                   </Card.Header>
               </Carousel.Item>

               <Carousel.Item>
                   <Card.Header className="pricelist-header">
                       <h4 className="pricelist-header-h3">
                           <strong>For a weight between 0kg and 1000kg that is not listed please contact our office</strong>
                       </h4>
                   </Card.Header>
               </Carousel.Item>
           </Carousel>


           <Card.Body>

               <Table style={{margin: '10px', border: '5px solid #2F3C7E'}}>

                   <thead>

                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 0px 0px 0px'}}><strong>Amount of Firewood</strong></th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 100px 0px 0px'}}><strong>Price</strong></th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>10kg</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 100px 0px 0px'}}>£15</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>50kg</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 100px 0px 0px'}}>£70</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>100kg</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 100px 0px 0px'}}>£130</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>250kg</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 100px 0px 0px'}}>£300</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>500kg</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 100px 0px 0px'}}>£550</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>750kg</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 100px 0px 0px'}}>£750</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>1000kg</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 100px 0px 0px'}}>£900</th>
                   </tr>

                   </thead>

               </Table>


               <br/>
               <br/>


               <Table style={{margin: '10px', border: '5px solid #2F3C7E'}}>

                   <thead>

                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 0px 0px 0px'}}><strong>Amount of Coal</strong></th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 70px 0px 0px'}}><strong>Price</strong></th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>10kg</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 70px 0px 0px'}}>£22</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>50kg</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 70px 0px 0px'}}>£100</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>100kg</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 70px 0px 0px'}}>£180</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>250kg</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 70px 0px 0px'}}>£400</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>500kg</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 70px 0px 0px'}}>£700</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>750kg</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 70px 0px 0px'}}>£900</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>1000kg</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC', padding: '0px 70px 0px 0px'}}>£1000</th>
                   </tr>

                   </thead>

               </Table>

           </Card.Body>

       </Card>

   );

}

export default PriceList;