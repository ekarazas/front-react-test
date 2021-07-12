import React from "react";
import * as Yup from "yup";

import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import Form from "../../components/Form/Form";

const Register = () => {
  const userValidation = (e) => {
    e.preventDefault();
    const email = e.target.elements.email.value.trim();
    const password = e.target.elements.password.value.trim();

    if (email && password) {
      const schema = Yup.object().shape({
        email: Yup.string().email().min(5).max(255).required(),
        password: Yup.string().min(6).max(255).required(),
      });

      schema.isValid({ email, password }).then((data) => {
        if (data) {
          fetchUserData(email, password);
        } else alert("Bad email or password");
      });
    } else {
      alert("Please write in email and password");
    }
  };

  const fetchUserData = (email, password) => {
    fetch("http://localhost:8080/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
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
