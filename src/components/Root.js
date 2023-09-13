import React from "react";
import LinkMedia from "./LinkMedia";
import Background from "./Background";
import Time from "./Time";
import { Container } from "react-bootstrap";

export default function Root() {
  return (
    <>
      <Background />
      <Container
        className="d-flex align-items-center justify-content-center flex-column "
        style={{ minHeight: "100vh" }}
      >
        <Container>
          <h1
            className="title-main text-wrap text-center"
            style={{ paddingBottom: "100px" }}
          >
            We're Lauching Soon
          </h1>
        </Container>
        <Time />
        <LinkMedia />
      </Container>
    </>
  );
}
