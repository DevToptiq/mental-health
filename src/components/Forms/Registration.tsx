import React, { useState } from "react";
import { Form, Row, Col, InputGroup, Container } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../Common/Buttons/Button";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the styles for the date picker
import { Link, useNavigate } from "react-router-dom";
// import { useActionsUsersRegistrationMutation } from "../../gql/generated"
import { usePatientRegistrationMutation } from "../../gql/generated";
import Tooltips from "../Common/Tooltips";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormValues {
  name: string;
  phone: string;
  email: string;
  dob: string;
  gender: number;
  address: string;
  state: string;
  zip_code: string;
  city: string;
  country: string;
  password: string;
  confirmPassword: string;
  level: number;
}

const RegistrationForm: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [result, executeMutation] = usePatientRegistrationMutation();
  const navigate = useNavigate();
  const initialValues: FormValues = {
    name: "",
    phone: "",
    email: "",
    dob: new Date("2004-06-30T19:00:00.000Z").toString(),
    gender: 7,
    address: "",
    state: "",
    zip_code: "",
    city: "",
    country: "",
    password: "",
    confirmPassword: "",
    level: 13,
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    dob: Yup.date()
      .nullable()
      .required("Date of Birth is required")
      .max(new Date(), "Date of Birth cannot be in the future"),
    gender: Yup.number().required("Gender is required"),
    address: Yup.string().required("Address is required"),
    state: Yup.string().required("State is required"),
    zip_code: Yup.string().required("Zip Code is required"),
    city: Yup.string().required("City is required"),
    country: Yup.string().required("Country is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), undefined], "Passwords must match")
      .required("Confirm Password is required"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      console.log(values, "Value");
      event.preventDefault();
      values.gender = Number(values.gender);

      const dobDate = new Date(values.dob);
      const formattedDob = dobDate.toISOString();

      values.dob = formattedDob;

      const { confirmPassword, ...dataToSend } = values;

      try {
        await executeMutation({ Data: dataToSend });
        toast.success("Registration Successful"); // Show the success toast
        setTimeout(() => {
          navigate("/login"); // Navigate after 5 seconds
        }, 5000);
      } catch (error) {
        toast.error("Registration not successful");
        console.error(error);
      }
    },
  });

  return (
    <Container className="login__section">
      <Row className="mb-4 ">
        <Col sm={12} className="">
          <h1>
            Signup
            <br />
            <span className="txt__green">Mental Support</span> 👋
          </h1>
        </Col>
      </Row>
      <Form onSubmit={formik.handleSubmit} className="reg__form">
        <Row className="mb-3">
          <Form.Group as={Col} lg={6} sm={12}>
            <Form.Control
              type="text"
              placeholder="Name"
              id="name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.name && !!formik.errors.name}
            />
            {formik.touched.name && formik.errors.name && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.name}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} lg={6} sm={12}>
            <Form.Control
              type="text"
              placeholder="Phone Number"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.phone && !!formik.errors.phone}
            />
            {formik.touched.phone && formik.errors.phone && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.phone}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} lg={12} sm={12}>
            <Form.Control
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.email && !!formik.errors.email}
            />
            {formik.touched.email && formik.errors.email && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.email}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} lg={6} sm={12}>
            <InputGroup className="customDatePickerWidth">
              <DatePicker
                dateFormat="yyyy-MM-dd"
                selected={new Date(formik?.values?.dob)}
                onChange={(date: Date) => formik.setFieldValue("dob", date)}
                onChangeRaw={(event) => {
                  // Manually handle clearing the date when the input is empty
                  if (!event.target.value) {
                    formik.setFieldValue("dob", null);
                  }
                }}
                onBlur={formik.handleBlur}
                placeholderText="DOB"
                id="dob"
                name="dob"
                customInput={
                  <Form.Control
                    isInvalid={formik.touched.gender && !!formik.errors.gender}
                  />
                }
                showYearDropdown
                scrollableYearDropdown
              />

              <InputGroup.Text style={{ cursor: "pointer" }} className="icon">
                <BsCalendar />
              </InputGroup.Text>
            </InputGroup>
            {formik.touched.dob && formik.errors.dob && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.dob}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} lg={6} sm={12}>
            <Form.Control
              as="select"
              id="gender"
              name="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="gender"
              isInvalid={formik.touched.gender && !!formik.errors.gender}
            >
              <option value={7}>Male</option>
              <option value={8}>Female</option>
            </Form.Control>
            {formik.touched.gender && formik.errors.gender && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.gender}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} lg={12} sm={12}>
            <Form.Control
              type="text"
              placeholder="Address"
              id="address"
              name="address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.address && !!formik.errors.address}
            />
            {formik.touched.address && formik.errors.address && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.address}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} lg={6} sm={12}>
            <Form.Control
              type="text"
              placeholder="State"
              id="state"
              name="state"
              value={formik.values.state}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.state && !!formik.errors.state}
            />
            {formik.touched.state && formik.errors.state && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.state}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} lg={6} sm={12}>
            <Form.Control
              type="text"
              placeholder="Zip Code"
              id="zip_code"
              name="zip_code"
              value={formik.values.zip_code}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.zip_code && !!formik.errors.zip_code}
            />
            {formik.touched.zip_code && formik.errors.zip_code && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.zip_code}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} lg={6} sm={12}>
            <Form.Control
              type="text"
              placeholder="City"
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.city && !!formik.errors.city}
            />
            {formik.touched.city && formik.errors.city && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.city}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} lg={6} sm={12}>
            <Form.Control
              type="text"
              placeholder="Country"
              id="country"
              name="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              isInvalid={formik.touched.country && !!formik.errors.country}
            />
            {formik.touched.country && formik.errors.country && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.country}
              </Form.Control.Feedback>
            )}
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} lg={6} sm={12}>
            <InputGroup>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.password && !!formik.errors.password}
              />
              <InputGroup.Text
                onClick={() => setShowPassword(!showPassword)}
                style={{ cursor: "pointer" }}
                className="icon"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </InputGroup.Text>
            </InputGroup>
            {formik.touched.password && formik.errors.password && (
              <Form.Control.Feedback type="invalid">
                {formik.errors.password}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <Form.Group as={Col} lg={6} sm={12}>
            <InputGroup>
              <Form.Control
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                id="confirmPassword"
                name="confirmPassword"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={
                  formik.touched.confirmPassword &&
                  !!formik.errors.confirmPassword
                }
              />
              <InputGroup.Text
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                style={{ cursor: "pointer" }}
                className="icon"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </InputGroup.Text>
            </InputGroup>
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <Form.Control.Feedback type="invalid">
                  {formik.errors.confirmPassword}
                </Form.Control.Feedback>
              )}
          </Form.Group>
        </Row>
        <Button
          title={"Sign-up"}
          className="w-100 my-4"
          type="submit"
          disabled={formik.isSubmitting}
        />
        <Row className="text-center">
          <span style={{ fontSize: "14px" }}>
            Have an account?{" "}
            <Link to="/login" className="account__link">
              Login
            </Link>
          </span>
        </Row>
      </Form>
      <ToastContainer />
    </Container>
  );
};

export default RegistrationForm;
