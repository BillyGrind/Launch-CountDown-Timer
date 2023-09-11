import React from "react";
import Countdown from "react-countdown";
import LinkMedia from "./LinkMedia";
import Title from "./Title";
import Background from "./Background";
import { Stack } from "react-bootstrap";

export default function Root() {
  const deadline = 500000000;
  return (
    <>
      <Stack className="mx-auto">
        <Title />
        <Countdown date={Date.now() + deadline} />
        <LinkMedia />
        <Background />
      </Stack>
    </>
  );
}
