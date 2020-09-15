import React from "react";
import { Form, Button } from "react-bootstrap";
import "../index.css";

const EmailVerification = (props) => {
  const { handleStepper } = props;
  const [veriCode, setveriCode] = React.useState("");
  const [error, setError] = React.useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setError("");
    setveriCode(value);
  };

  const handleSubmit = () => {
    if (parseInt(veriCode) === 2580) {
      handleStepper("email");
    } else {
      setError("Verification code does not match! Please check your email");
    }
  };

  return (
    <div className={"email-section pt-5"}>
        <h2 className={"email-title"}>Enter Email Verfication</h2>
        <h6 className={"email-sub-title"}>Please enter verification</h6>
      <Form className="email-form">
        <Form.Group controlId="formBasicNumber" className="mb-5 mt-4">
          <Form.Control
            type="text"
            placeholder=""
            name="veriCode"
            value={veriCode}
            onChange={handleChange}
          />
          {error ? <span className="error-text">{error}</span> : ""}
        </Form.Group>
        <div className="d-flex align-items-center justify-content-center">
          <Button
            variant="link"
            className="btn-theme"
            onClick={handleSubmit}
          >
            Verify
          </Button>
        </div>
        
      </Form>
    </div>
  );
};
export default EmailVerification;
