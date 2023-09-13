import React from "react";
import Countdown from "react-countdown";
import LinkMedia from "./LinkMedia";
import Background from "./Background";
import { Stack } from "react-bootstrap";

export default function Root() {
  const deadline = 500000000;
  return (
    <>
      <Background />
      <Stack className="container" >
        <Stack gap={3}>
          <h1 className="title-main">We're Lauching Soon</h1>
          <Countdown date={Date.now() + deadline} />
          <LinkMedia />
        </Stack>
      </Stack>
    </>
  );
}
