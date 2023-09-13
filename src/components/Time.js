import React from "react";
import Countdown, { zeroPad } from "react-countdown";
import { Container, Card } from "react-bootstrap";

export default function Time() {
  const deadline = 500000000;

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ paddingBottom: "200px" }}
      >
        <Container className="d-flex align-items-center justify-content-center flex-column">
          <Card className="card-countdown">{zeroPad(days)}</Card>
          <p className="pt-2">Days</p>
        </Container>
        <Container className="d-flex align-items-center justify-content-center flex-column">
          <Card className="card-countdown">{zeroPad(hours)}</Card>
          <p className="pt-2">Hours</p>
        </Container>
        <Container className="d-flex align-items-center justify-content-center flex-column">
          <Card className="card-countdown">{zeroPad(minutes)}</Card>
          <p className="pt-2">Minutes</p>
        </Container>
        <Container className="d-flex align-items-center justify-content-center flex-column">
          <Card className="card-countdown">{zeroPad(seconds)}</Card>
          <p className="pt-2">Seconds</p>
        </Container>
      </Container>
    );
  };

  return (
    <>
      <Countdown date={Date.now() + deadline} renderer={renderer} />
    </>
  );
}
