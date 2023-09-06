import { useEffect, useState } from "react";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { appRoutes } from "../../constants/constants";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/images/logo.svg";
import Button from "../Common/Buttons/Button";
import Cookies from "js-cookie";
import { getToken } from "../../utils";

function Header() {
  const token = getToken();
  const [btnTitle, setBtnTitle] = useState("Login / Register");
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      setBtnTitle("Logout");
    } else {
      setBtnTitle("Login / Register");
    }
  }, [token]);
  function handleClick() {
    if (token) {
      Cookies.remove("token");
      navigate("/login");
    } else {
      navigate("/login");
    }
  }
  return (
    <>
      <Navbar collapseOnSelect expand="xl">
        <Container className="py-3">
          <Link to="/">
            <Navbar.Brand>
              <img alt="logo" src={logo} className="w-100" />
            </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-lg-auto ">
              {appRoutes.map((route) => {
                if (route.visible) {
                  return (
                    <Link
                      key={route.id}
                      to={route.path}
                      className={useMatch(route.path) ? "active" : ""}
                    >
                      {route.name}
                    </Link>
                  );
                }
                return null; // Skip rendering the route if `route.visible` is false
              })}
            </Nav>
            <Button title={btnTitle} onClick={handleClick} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
