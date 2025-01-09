import { Outlet, NavLink } from "react-router-dom";
import "../Css/App.css";
import "../Css/Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Header';
import Footer from './Footer';
import { Row, Card, Container } from "react-bootstrap";

const Layout = () => {

    // Function to determine active class
  const getClassName = ({ isActive }) => 
    isActive ? "nav-link-text active" : "nav-link-text";

  return (

    <Container fluid>
      <Row className="justify-content-center">
        <Card style={{ maxWidth: "120rem", backgroundColor: "#D3C5E5", border: "2px solid #D3C5E5",}}>

          <Header />
          <h1 className="title">EcoBurn Fuels</h1>

          <Container>
            <Card.Body>

            <nav className="nav-bar">
                           <div className="table-responsive">
                               <table className="table" style={{ margin: 0 }}>

                                   <thead>
                                   <tr>
                                       <th
                                          className="nav-link-display" style={{ backgroundColor: '#EAE7DC'}}>
                                          <NavLink to="/homepage" className="nav-link-text">Home Page</NavLink></th>
                                       <th 
                                          className="nav-link-display" style={{ backgroundColor: '#EAE7DC'}}>
                                          <NavLink to="/aboutus" className="nav-link-text">About Us</NavLink>
                                       </th>

                                       <th
                                          className="nav-link-display" style={{ backgroundColor: '#EAE7DC'}}>
                                          <NavLink to="/pricelist" className="nav-link-text">Price List</NavLink>
                                       </th>

                                       <th
                                          className="nav-link-display" style={{ backgroundColor: '#EAE7DC'}}>
                                          <NavLink to="/orderpage" className="nav-link-text">Order Page</NavLink>
                                       </th>

                                       <th
                                          className="nav-link-display" style={{ backgroundColor: '#EAE7DC'}}>
                                          <NavLink to="/displayorder" className="nav-link-text">Display Order</NavLink>
                                       </th>
                                   </tr>
                                   </thead>

                               </table>
                           </div>
                       </nav>


                       <main className="main-content">
                           <Outlet />
                       </main>


                    </Card.Body>
                    </Container>


                   <Card.Footer>
                       <Row>
                           <Footer />
                       </Row>
                   </Card.Footer>


               </Card>
           </Row>
        </Container>
   );

};

export default Layout;