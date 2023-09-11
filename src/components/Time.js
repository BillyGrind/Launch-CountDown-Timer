import { cleanup } from "@testing-library/react";
import React, { useEffect, useState } from "react";

export default function Time() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <>
      <h2>We are lauching soon ! </h2>
      <div>Time : {date.toLocaleTimeString()}</div>
      <div>Date : {date.toLocaleDateString()}</div>
    </>
  );
}
