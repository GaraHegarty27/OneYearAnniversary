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
        <Card
          style={{
            maxWidth: "120rem",
            backgroundColor: "#B22222",
            border: "10px solid #B22222",
            borderRadius: "0",
          }}
        >

          <nav className="nav-bar">
            <div className="table-responsive">
              <table className="table" style={{ margin: 0 }}>
                <thead>
                  <tr>
                    <th
                      className="nav-link-display"
                      style={{ backgroundColor: "#F5DEB3" }}
                    >
                      <NavLink to="/homepage" className="nav-link-text">
                        Home Page
                      </NavLink>
                    </th>
                    <th
                      className="nav-link-display"
                      style={{ backgroundColor: "#F5DEB3" }}
                    >
                      <NavLink to="/loveletter" className="nav-link-text">
                        What Manya Means to me
                      </NavLink>
                    </th>

                    <th
                      className="nav-link-display"
                      style={{ backgroundColor: "#F5DEB3" }}
                    >
                      <NavLink to="/facts" className="nav-link-text">
                        Facts
                      </NavLink>
                    </th>

                    <th
                      className="nav-link-display"
                      style={{ backgroundColor: "#F5DEB3" }}
                    >
                      <NavLink to="/photos" className="nav-link-text">
                        Photos
                      </NavLink>
                    </th>

                    <th
                      className="nav-link-display"
                      style={{ backgroundColor: "#F5DEB3" }}
                    >
                      <NavLink to="/milestonesbucketlist" className="nav-link-text">
                        Milestones and BucketList
                      </NavLink>
                    </th>
                  </tr>
                </thead>
              </table>
            </div>
          </nav>

          <Container>
            <Card.Body>

              <Header />
              <h1 className="title">Manya and Gara</h1>

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