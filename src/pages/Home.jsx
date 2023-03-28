import React from "react";
import Container from "../components/container/Container";
import Nav from "../components/nav/Nav";
import Main from "../components/main/Main";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <Container>
      <Nav />
      <Main />
      <Footer />
    </Container>
  );
}
