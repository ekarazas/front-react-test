import React, { useContext } from "react";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";
import { LoggedInContext } from "../../contexts/loggedInContext";

import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import Form from "../../components/Form/Form";

const Login = () => {
  const loggedInContext = useContext(LoggedInContext);
  const history = useHistory();

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
        } else alert("This data is not valid");
      });
    } else {
      alert("Do not leave blank inputs. Write your email and password");
    }
  };

  const fetchUserData = (email, password) => {
    fetch("http://localhost:8080/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token);
          loggedInContext.setLoggedIn(true);
          history.push("/dashboard");
        } else {
          alert(data.error);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Container>
        <PageTitle>Login</PageTitle>
        <Form userValidation={userValidation} form_type="login" />
      </Container>
    </>
  );
};

export default Login;
