import { Form, Button, Container, Alert } from "react-bootstrap";
import { useState } from "react";
const Registration = ({ history }) => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  let [isCompleted, setCompleted] = useState(false);

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  const findFormErrors = () => {
    const { name, surname, email, password, dob, address, city, zip, ccn } =
      form;
    const newErrors = {};

    if (!name || name === "") newErrors.name = "cannot be blank!";
    else if (name.length < 2) newErrors.name = "name is too short!";

    if (!surname || surname === "") newErrors.surname = "cannot be blank!";
    else if (surname.length < 3) newErrors.surname = "surname is too short!";

    if (!email || email === "") newErrors.email = "cannot be blank!";

    if (!password || password === "") newErrors.password = "cannot be blank!";
    else if (password.length < 8) newErrors.password = "password is too short!";
    else if (!password.match(/[a-z]/g))
      newErrors.password = "Should contain at least 1 digit, 1 letter";
    else if (!password.match(/[0-9]/g))
      newErrors.password = "Should contain at least 1 digit, 1 letter";

    if (!dob || dob === "") newErrors.dob = "cannot be blank!";
    else if (parseInt(dob.slice(0, 4)) < 1910)
      newErrors.dob = "the year has to be 1910+";

    if (!address || address === "") newErrors.address = "cannot be blank!";
    if (!city || city === "") newErrors.city = "cannot be blank!";

    // Postal Code - Required - Numeric 5 digits
    if (!zip || zip === "") newErrors.zip = "cannot be blank!";
    else if (zip.length < 5) newErrors.zip = "zip is too short!";

    if (!ccn || ccn === "") newErrors.ccn = "cannot be blank!";
    // console.log(newErrors);
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // get our new errors
    const newErrors = findFormErrors();
    // Conditional logic:
    if (Object.keys(newErrors).length > 0) {
      // We got errors!
      setErrors(newErrors);
    } else {
      // No errors! Put any logic here for the form submission!
      setCompleted(true);
    }
  };

  return (
    <>
      {!isCompleted && (
        <Container>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="name">
              <Form.Label>Your name...</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name..."
                onChange={(e) => setField("name", e.target.value)}
              />
              {errors.name && <Alert variant="danger">{errors.name}</Alert>}
            </Form.Group>

            <Form.Group controlId="surname">
              <Form.Label>Your surname...</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your surname..."
                onChange={(e) => setField("surname", e.target.value)}
              />
              {errors.surname && (
                <Alert variant="danger">{errors.surname}</Alert>
              )}
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setField("email", e.target.value)}
              />
              {errors.email && <Alert variant="danger">{errors.email}</Alert>}
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Your password...</Form.Label>
              <Form.Control
                type="password"
                placeholder="Your password..."
                onChange={(e) => setField("password", e.target.value)}
              />
              {errors.password && (
                <Alert variant="danger">{errors.password}</Alert>
              )}
            </Form.Group>

            <Form.Group controlId="dob">
              <Form.Label>Your dob...</Form.Label>
              <Form.Control
                type="date"
                placeholder="Your dob..."
                onChange={(e) => setField("dob", e.target.value)}
              />
              {errors.dob && <Alert variant="danger">{errors.dob}</Alert>}
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Your address...</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your address..."
                onChange={(e) => setField("address", e.target.value)}
              />
              {errors.address && (
                <Alert variant="danger">{errors.address}</Alert>
              )}
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>Your city...</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your city..."
                onChange={(e) => setField("city", e.target.value)}
              />
              {errors.city && <Alert variant="danger">{errors.city}</Alert>}
            </Form.Group>

            <Form.Group controlId="zip">
              <Form.Label>Your zip...</Form.Label>
              <Form.Control
                type="text"
                pattern="[0-9]*"
                placeholder="Your zip..."
                onChange={(e) => setField("zip", e.target.value)}
              />
              {errors.zip && <Alert variant="danger">{errors.zip}</Alert>}
            </Form.Group>

            <Form.Group controlId="ccn">
              <Form.Label>Your CC...</Form.Label>
              <Form.Control
                type="tel"
                inputMode="numeric"
                pattern="[0-9\s]{13,19}"
                autoComplete="cc-number"
                maxLength="19"
                placeholder="xxxx xxxx xxxx xxxx"
                onChange={(e) => setField("ccn", e.target.value)}
              />
              {errors.ccn && <Alert variant="danger">{errors.ccn}</Alert>}
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      )}
      {isCompleted && (
        <Container>
          <h2>Thank you!</h2>
          <h4>Here's your credentials:</h4>
          <p>
            Name: {form.name} <br />
            Surname: {form.surname} <br />
            Email: {form.email}
            <br />
            Password: {form.password} <br />
            Date of Birth: {form.dob} <br />
            Address: {form.address}
            <br />
            City: {form.city} <br />
            Postal Code: {form.zip} <br />
            Credit card number: {form.ccn}
          </p>
        </Container>
      )}
    </>
  );
};

export default Registration;

// Name - Required, at least 2 chars
// Surname - Required, at least 3 chars
// Email - Required - Should be an email field
// Password - Required - Should contain at least 8 chars, 1 digit, 1 letter
// Year of Birth - Required - from 1910+
// Street Address - Required
// City - Required
// Postal Code - Required - Numeric 5 digits
// Credit card - XXXX-XXXX-XXXX-XXXX (EXTRA)
// name, surname, email, password, dob, address, city, zip, ccn
