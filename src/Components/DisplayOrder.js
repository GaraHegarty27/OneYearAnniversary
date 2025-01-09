import React, {useEffect, useState} from 'react';
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/DisplayOrder.css';

function DisplayOrder() {

   // Get list of orders from local storage.
   // If there are no orders found in local storage, default to an empty array.
   const orders = JSON.parse(localStorage.getItem('orderData')) || [];

   return (
    <Card className="display-card">

           <Card.Header className="display-header">
               <h3 className="display-title">
                   <strong><u>Order Details</u></strong>
               </h3>
           </Card.Header>

        <Card.Body>

            {/* Checks if orders exist, then goes through each order and displays it */}
            {orders.length > 0 ? (
                orders.map((order, index) => (
                    
                    <Card key={index} className="display-body">
                        <Card.Body>
                            <h2 className="display-title"><u>Order {index + 1}</u></h2>
                            <p className="display-strong">First Name: <span className="display-span">{order.firstName}</span></p>
                            <p className="display-strong">Last Name: <span className="display-span">{order.lastName}</span></p>
                            <p className="display-strong">Address: <span className="display-span">{order.address}</span></p>
                            <p className="display-strong">City: <span className="display-span">{order.city}</span></p>
                            <p className="display-strong">Post Code: <span className="display-span">{order.postCode}</span></p>
                            <p className="display-strong">Phone Number: <span className="display-span">{order.phoneNumber}</span></p>
                            <p className="display-strong">Email Address: <span className="display-span">{order.emailAddress}</span></p>
                            <p className="display-strong">Material: <span className="display-span">{order.material}</span></p>
                            <p className="display-strong">Weight of Material: <span className="display-span">{order.weightOfMaterial}</span></p>
                        </Card.Body>
                    </Card>
                ))

            ) : (
                <p className="display-strong"> No orders found.</p>
            )}

        </Card.Body>
    </Card>
);
}

export default DisplayOrder;