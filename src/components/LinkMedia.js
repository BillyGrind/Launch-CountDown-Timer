import React from "react";
import { BsFacebook, BsInstagram, BsPinterest } from "react-icons/bs";
import { Stack } from "react-bootstrap";

export default function LinkMedia() {
  return (
    <>
      <Stack direction="horizontal" gap={2}>
        <a href="https://www.facebook.com/">
          <BsFacebook className="logo" />
        </a>
        <a href="https://www.pinterest.com/">
          <BsPinterest className="logo" />
        </a>
        <a href="https://www.instagram.com/">
          <BsInstagram className="logo" />
        </a>
      </Stack>
    </>
  );
}
