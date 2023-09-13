import React from "react";
import Countdown,{zeroPad} from "react-countdown";
import { Container, Card } from "react-bootstrap";

export default function Time() {
  const deadline = 500000000;

  const renderer = ({ days, hours, minutes, seconds }) => {
    return (
      <Container className="d-flex align-items-center justify-content-center">
        <Container className="d-flex align-items-center justify-content-center flex-column">
          <Card className="card-countdown">{zeroPad(days)}</Card>
          <p>Days</p>
        </Container>
        <Container className="d-flex align-items-center justify-content-center flex-column">
          <Card className="card-countdown">{zeroPad(hours)}</Card>
          <p>Hours</p>
        </Container>
        <Container className="d-flex align-items-center justify-content-center flex-column">
          <Card className="card-countdown">{zeroPad(minutes)}</Card>
          <p>Minutes</p>
        </Container>
        <Container className="d-flex align-items-center justify-content-center flex-column">
          <Card className="card-countdown">{zeroPad(seconds)}</Card>
          <p>Seconds</p>
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
