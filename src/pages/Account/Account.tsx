import { Col, Row } from "react-bootstrap";
import Login from "../../components/Forms/Login";
import "./Account.css";
import Login_Bg from "../../assets/images/login_bg.jpg";
import Register_Bg from "../../assets/images/register_bg.jpg";
import Registration from "../../components/Forms/Registration";

function Account() {
  return (
    <Row className="account__section g-0">
      <Col className="account__section__left" sm={12} lg={6}>
        {location.pathname === "/login" ? <Login /> : <Registration />}
        <p className="copyright mb-5 text-center">
          © 2023 Mental Support. All rights reserved, Privacy Policy and Terms
          of Use
        </p>
      </Col>
      <Col style={{ height: "max-content" }} sm={12} lg={6}>
        <img
          src={location.pathname === "/login" ? Login_Bg : Register_Bg}
          className="w-100"
          style={{ height: "max-content" }}
        />
      </Col>
    </Row>
  );
}

export default Account;
