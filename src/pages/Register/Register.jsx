import React from "react";
import * as Yup from "yup";

import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import Form from "../../components/Form/Form";

const Register = () => {
  const userValidation = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value.trim();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    if (email && password) {
      const schema = Yup.object().shape({
        email: Yup.string().email().min(5).max(255).required(),
        password: Yup.string().min(6).max(255).required(),
      });

      schema.isValid({ email, password }).then((data) => {
        if (data) {
          fetchUserData(name, email, password);
        } else alert("This data is not valid");
      });
    } else {
      alert("Do not leave blank inputs. Write your email and password");
    }
  };

  const fetchUserData = (name, email, password) => {
    fetch("http://localhost:8080/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
          alert(data.error);
        }
      });
  };

  return (
    <>
      <Container>
        <PageTitle>Register</PageTitle>
        <Form userValidation={userValidation} form_type="register" />
      </Container>
    </>
  );
};

export default Register;
