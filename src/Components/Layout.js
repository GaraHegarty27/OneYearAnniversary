import { Outlet, NavLink } from "react-router-dom";
import "../Css/App.css";
import "../Css/Layout.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import Footer from "./Footer";
import { Row, Card, Container } from "react-bootstrap";

const Layout = () => {
  const navLinks = [
    { to: "/homepage", label: "Home Page" },
    { to: "/loveletter", label: "What Manya Means to Me" },
    { to: "/facts", label: "Facts" },
    { to: "/photos", label: "Photos" },
    { to: "/milestonesbucketlist", label: "Milestones and BucketList" },
  ];

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Card className="card layout-card">
          <nav className="nav-bar">
            <div className="table-responsive">
              <table className="table m-0">
                <thead>
                  <tr>
                    {navLinks.map(({ to, label }) => (
                      <th key={to} className="nav-link-display" 
                      style = {{backgroundColor: "#E6E6FA"}}
                      >
                        <NavLink to={to} className={({ isActive }) =>
                            `nav-link-text ${isActive ? "active" : ""}`
                          }>
                          {label}
                        </NavLink>
                      </th>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
          </nav>

          <Card.Body>
            <Header />
            <h1 className="title">Manya and Gara</h1>
            <main className="main-content">
              <Outlet />
            </main>
          </Card.Body>

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
