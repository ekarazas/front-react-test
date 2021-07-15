import React, { useState, useEffect } from "react";
import * as S from "./Dashboard.style";
import { useHistory } from "react-router-dom";

import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import Card from "../../components/Card/Card";

const Dashboard = () => {
  const token = localStorage.getItem("token");
  const [data, setData] = useState();
  const history = useHistory();

  if (!token) {
    history.push("/");
  }
  useEffect(() => {
    fetch("http://localhost:8080/v1/content/teams", {
      headers: {
        authorization: `Beared ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => console.log(error));
  }, [token]);

  return (
    <>
      <Container>
        <PageTitle>Dashboard</PageTitle>
        <S.FlexBox>
          {data &&
            data.map((item) => {
              return (
                <Card
                  key={item.id}
                  image={item.image}
                  score={Number(item.score)}
                />
              );
            })}
        </S.FlexBox>
      </Container>
    </>
  );
};

export default Dashboard;
