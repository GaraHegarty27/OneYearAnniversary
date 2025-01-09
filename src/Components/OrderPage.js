import React, {useState} from "react";
import "../Css/App.css";
import {Form, Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Css/OrderPage.css";


function OrderPage() {

   // Manage the values of the form fields inputted from the user, all of which are initially empty.
   const [formData, setFormData] = useState({
    
       firstName: "",
       lastName: "",
       address: "",
       city: "",
       postCode: "",
       phoneNumber: "",
       emailAddress: "",
       material: "",
       weightOfMaterial: "",
   });


   //Manage validation error messages for each form field
   const [errors, setErrors] = useState({

       firstName: "",
       lastName: "",
       address: "",
       city: "",
       postCode: "",
       phoneNumber: "",
       emailAddress: "",
       material: "",
       weightOfMaterial: "",
   });

   
//----------------------------------------------------------------------------------------------------------------------


   // This function handles input change for form fields for every time they are changed
   // e represents the parameter of an event object, in this case a change in the input fields.
   // e.target refers to the element that triggered the event
   const handleChange = (e) => {

       const {name, value} = e.target;

       // Update formData state with the new value
       setFormData({...formData, [name]: value});


       //Validate fields with regex as they are changed
       //Whenever something is inputted in the form
       //e.target will refer to the element that triggered the change event based on its 'name'
       //so if name = firstName the handleChange function will then Validate the inputted value of firstName.
       switch (name) {
           case "firstName":
               validateFirstName(value);
               break;
           case "lastName":
               validateLastName(value);
               break;
           case "address":
               validateAddress(value);
               break;
           case "city":
               validateCity(value);
               break;
           case "postCode":
               validatePostCode(value);
               break;
           case "phoneNumber":
               validatePhoneNumber(value);
               break;
           case "emailAddress":
               validateEmail(value);
               break;
           case "material":
               validateMaterial(value);
               break;
           case "weightOfMaterial":
               validateWeightOfMaterial(value);
               break;
           default:
               break;
       }
   };


//----------------------------------------------------------------------------------------------------------------------


// Handle form submission when the form is submitted
const handleSubmit = (e) => {
    e.preventDefault();
 
    // Form submission logic
    if (isFormValid()) {
        // Get existing orders from local storage or set to empty array if none already exist
        const existingOrders = JSON.parse(localStorage.getItem('orderData')) || [];
 
        // Add new order to existing orders
        existingOrders.push(formData);
 
        // Save updated orders back to local storage
        localStorage.setItem('orderData', JSON.stringify(existingOrders));
        console.log("Form submitted successfully:", formData);
 
        // Reset form data after successful submission
        setFormData({
            firstName: "",
            lastName: "",
            address: "",
            city: "",
            postCode: "",
            phoneNumber: "",
            emailAddress: "",
            material: "",
            weightOfMaterial: "",
        });
 
    } else {
        console.log("Form has errors. Cannot submit.");
    }
 };

//----------------------------------------------------------------------------------------------------------------------

   // Check if form is valid (no errors)
   const isFormValid = () => {
       // Check if there are any errors in the errors object.
       //Does this by cycling through each key in the errors object and checking if the corresponding value is an
       // empty string ('""'). If all values are empty strings, it means there are no errors.
       return Object.keys(errors).every((key) => errors[key] === "");
   };

//---------------------------------------------------


   // firstName validation function
   const validateFirstName = (firstName, errorsObj = errors) => {

       //regex pattern

       const regex = /^[A-Za-z]{1,30}$/;

       //checks if the 'firstName' string matches the regex pattern
       const isValid = regex.test(firstName);

       //If isValid is true, indicating the firstName matches the regex pattern, errorsObj.firstName is set to an
       //empty string (""). This signifies that there are no validation errors for the firstName field.
       errorsObj.firstName = isValid ? "" : "Invalid First Name";
   };


   // lastName validation function
   const validateLastName = (lastName, errorsObj = errors) => {
       const regex = /^[A-Za-z]{1,30}$/;
       const isValid = regex.test(lastName);
       errorsObj.lastName = isValid ? "" : "Invalid Last Name";
   };


   // address validation function
   const validateAddress = (address, errorsObj = errors) => {
       const regex = /^[A-Za-z0-9\s\-,.#]{1,50}$/i;
       const isValid = regex.test(address);
       errorsObj.address = isValid ? "" : "Invalid Address";
   };


   // city validation function
   const validateCity = (city, errorsObj = errors) => {
       const regex = /^[A-Za-z]{1,20}$/;
       const isValid = regex.test(city);
       errorsObj.city = isValid ? "" : "Invalid City Name";
   };


   // postCode validation function
   const validatePostCode = (postCode, errorsObj = errors) => {
       // Simple validation for UK post code (e.g., AA1 1AA)
       const regex = /^[A-Z]{1,2}\d{1,2} \d[A-Z]{1,2}$/i;
       const isValid = regex.test(postCode);
       errorsObj.postCode = isValid ? "" : "UK Post Codes are in the form 'AA11 1AA'";
   };


   // phoneNumber validation function
   const validatePhoneNumber = (phoneNumber, errorsObj = errors) => {
       // Simple validation for phone number (e.g., 11 digits)
       const regex = /^\d{11}$/;
       const isValid = regex.test(phoneNumber);
       errorsObj.phoneNumber = isValid ? "" : "Invalid phone number (11 digits)";
   };

   // email validation function
   const validateEmail = (email, errorsObj = errors) => {
       const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
       const isValid = regex.test(email);
       errorsObj.emailAddress = isValid ? "" : "Invalid email address";
   };
   
   // material validation function
   const validateMaterial = (material, errorsObj = errors) => {
       const validMaterials = ["Fire Wood", "Coal"];
       errorsObj.material = validMaterials.includes(material) ? "" : "Please select a material";
   };


   // weightOfMaterial validation function
   const validateWeightOfMaterial = (weightOfMaterial, errorsObj = errors) => {
       const validWeights = [
           "-Select-",
           "10 Kilograms",
           "50 Kilograms",
           "100 Kilograms",
           "250 Kilograms",
           "500 Kilograms",
           "750 Kilograms",
           "1000 Kilograms"
       ];
       errorsObj.weightOfMaterial = validWeights.includes(weightOfMaterial) ? "" : "Please select a weight";
   };



//----------------------------------------------------------------------------------------------------------------------



   return (

       <Card className="orderpage-container">
           <Card.Header className="orderpage-header">
               <h3><strong><u>Enter Order Details</u></strong></h3>
           </Card.Header>


           <Card.Body>

               <Form onSubmit={handleSubmit}>
                   <Form.Group>
                       <Form.Label className="orderpage-formlabel"><strong>First Name</strong></Form.Label>
                       <Form.Control
                           type='text'
                           name='firstName'
                           placeholder="First Name"
                           value={formData.firstName}
                           onChange={handleChange}
                           isInvalid={!!errors.firstName}
                       />
                       <Form.Control.Feedback type="invalid">
                           {errors.firstName}
                       </Form.Control.Feedback>
                   </Form.Group>


                   <Form.Group>
                       <Form.Label className="orderpage-formlabel"><strong>Last Name</strong></Form.Label>
                       <Form.Control
                           type='text'
                           name='lastName'
                           placeholder="Last Name"
                           value={formData.lastName}
                           onChange={handleChange}
                           isInvalid={!!errors.lastName}
                       />
                       <Form.Control.Feedback type="invalid">
                           {errors.lastName}
                       </Form.Control.Feedback>
                   </Form.Group>


                   <Form.Group>
                       <Form.Label className="orderpage-formlabel"><strong>Address</strong></Form.Label>
                       <Form.Control
                           type='text'
                           name='address'
                           placeholder="Address"
                           value={formData.address}
                           onChange={handleChange}
                           isInvalid={!!errors.address}
                       />
                       <Form.Control.Feedback type="invalid">
                           {errors.address}
                       </Form.Control.Feedback>
                   </Form.Group>


                   <Form.Group>
                       <Form.Label className="orderpage-formlabel"><strong>City</strong></Form.Label>
                       <Form.Control
                           type='text'
                           name='city'
                           placeholder="City"
                           value={formData.city}
                           onChange={handleChange}
                           isInvalid={!!errors.city}
                       />
                       <Form.Control.Feedback type="invalid">
                           {errors.city}
                       </Form.Control.Feedback>
                   </Form.Group>


                   <Form.Group>
                       <Form.Label className="orderpage-formlabel"><strong>Post Code</strong></Form.Label>
                       <Form.Control
                           type='text'
                           name='postCode'
                           placeholder="Post Code"
                           value={formData.postCode}
                           onChange={handleChange}
                           isInvalid={!!errors.postCode}
                       />
                       <Form.Control.Feedback type="invalid">
                           {errors.postCode}
                       </Form.Control.Feedback>
                   </Form.Group>


                   <Form.Group>
                       <Form.Label className="orderpage-formlabel"><strong>Phone Number</strong></Form.Label>
                       <Form.Control
                           type='text'
                           name='phoneNumber'
                           placeholder="Phone Number"
                           value={formData.phoneNumber}
                           onChange={handleChange}
                           isInvalid={!!errors.phoneNumber}
                       />
                       <Form.Control.Feedback type="invalid">
                           {errors.phoneNumber}
                       </Form.Control.Feedback>
                   </Form.Group>


                   <Form.Group>
                       <Form.Label className="orderpage-formlabel"><strong>Email Address</strong></Form.Label>
                       <Form.Control
                           type='text'
                           name='emailAddress'
                           placeholder="Email Address"
                           value={formData.emailAddress}
                           onChange={handleChange}
                           isInvalid={!!errors.emailAddress}
                       />
                       <Form.Control.Feedback type="invalid">
                           {errors.emailAddress}
                       </Form.Control.Feedback>
                   </Form.Group>


                   <Form.Group>
                       <Form.Label className="orderpage-formlabel"><strong>Material</strong></Form.Label>
                       <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', color: '#735DA5'}}>
                           <Form.Check
                               type="radio"
                               label="Fire Wood"
                               name="material"
                               value="Fire Wood"
                               onChange={handleChange}
                               isInvalid={!!errors.material}
                           />
                           <Form.Check
                               type="radio"
                               label="Coal"
                               name="material"
                               value="Coal"
                               onChange={handleChange}
                               isInvalid={!!errors.material}
                           />
                           <Form.Control.Feedback type="invalid">
                               {errors.material}
                           </Form.Control.Feedback>
                       </div>
                   </Form.Group>


                   <Form.Group>
                       <Form.Label className="orderpage-formlabel"><strong>Weight of Material</strong></Form.Label>
                       <Form.Control
                           as="select"
                           name="weightOfMaterial"
                           value={formData.weightOfMaterial}
                           onChange={handleChange}
                           isInvalid={!!errors.weightOfMaterial}
                       >
                           <option value="-Select-">-Select-</option>
                           <option value="10 Kilograms">10 Kilograms</option>
                           <option value="50 Kilograms">50 Kilograms</option>
                           <option value="100 Kilograms">100 Kilograms</option>
                           <option value="250 Kilograms">250 Kilograms</option>
                           <option value="500 Kilograms">500 Kilograms</option>
                           <option value="750 Kilograms">750 Kilograms</option>
                           <option value="1000 Kilograms">1000 Kilograms</option>
                       </Form.Control>
                       <Form.Control.Feedback type="invalid">
                           {errors.weightOfMaterial}
                       </Form.Control.Feedback>
                   </Form.Group>


                   <Button variant="info" type='submit' className="orderpage-submitbutton">
                       <strong>Submit Details</strong>
                   </Button>{" "}

               </Form>

           </Card.Body>

       </Card>

   );
   
};

export default OrderPage;