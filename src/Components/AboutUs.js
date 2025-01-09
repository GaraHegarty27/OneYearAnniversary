import React from "react";
import "../Css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {Card, Table, Carousel, Container, Col, Row} from "react-bootstrap";
import "../Css/AboutUs.css";
import greenForest from "../Assets/GreenForest.jpeg";
import worldMap from "../Assets/WorldMap.png";
import ethicalMining from "../Assets/EthicalMining.jpg";

function AboutUsPage() {

   return (

    <Card className="aboutus-card">

        <Card.Header className="aboutus-header">

            <h3 className="aboutus-title">
                <strong><u> About Us</u></strong>
            </h3>

        </Card.Header>

        <Card.Body>

            <Table className="aboutus-table">

                <thead>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>Telephone Number:</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>07857409678</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>Address:</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>27 Lisnafin Park, Belfast, Antrim BT82 7GH
                       </th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>Email Address</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>EcoBurnFuels@gmail.com</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>Office Hours:</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>9am - 5pm</th>
                   </tr>


                   <tr>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>Delivery Hours:</th>
                       <th style={{color: '#735DA5', backgroundColor: '#EAE7DC'}}>9am - 6:30pm</th>
                   </tr>


                </thead>

            </Table>

        </Card.Body>


        <Card.Footer className="aboutus-footer">

                        <h5 className="aboutus-footer-text">
                            We at EcoBurn Fuels pride ourselves in fast, reliable and friendly service.
                            We have been supplying countries across the world with heating oil for every use imaginable for the
                            last 60 years.
                            We strive to consistently achieve affordable pricing and provide our customers with
                            high-quality fuel products that are environmentally sustainable while maintaining our standards and
                            reputation as industry leaders.
                        </h5>

                        <br/>

                        <h5 className="aboutus-footer-text">
                            Our company operates with a global perspective, harvesting coal and firewood from carefully
                            selected regions to ensure sustainable and responsible practices. We source coal from
                            established mines in countries like the United States, Australia, South Africa and Russia, where we
                            employ advanced extraction technologies to minimize environmental impact. For firewood,
                            we collaborate with forestry partners in Canada, Sweden, and Brazil, focusing on responsible
                            forest management and reforestation efforts. Once harvested, our products are processed and
                            transported to markets across Europe, Asia, and North America, ensuring that they meet stringent
                            environmental and quality standards before reaching our customers. Through this global network,
                            we strive to balance efficient resource use with environmental stewardship.
                        </h5>

                        <br/>

                        <h5 className="aboutus-footer-text">
                            We have received multiple awards for the positive strides we have made in the industry to help
                            improve sustainability and for the ethically way our supplies are harvested. These awards
                            include:
                            <br/><br/>
                            The Sustainable Sourcing Star Award
                            <br/>
                            The Green Energy Award
                            <br/>
                            The Environmental Excellence Award
                            <br/>
                            The Eco-Conscious Combustion Award
                            <br/>
                            The Environmental Excellence in Extraction Award
                            <br/>
                            The Clean Burn Champion Trophy.
                        </h5>

                        <br/>

                        <Carousel fade interval={1500}>
                            <Carousel.Item>
                                <img src={greenForest} alt="First slide" />
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src={worldMap} alt="Second slide"/>
                            </Carousel.Item>

                            <Carousel.Item>
                                <img src={ethicalMining} alt="Third slide"/>
                            </Carousel.Item>
                        </Carousel>

        </Card.Footer>

    </Card>

   )

}

export default AboutUsPage;