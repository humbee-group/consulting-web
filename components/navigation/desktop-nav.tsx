"use client";

import React from "react";
import { DesktopNavbar } from "./desktop-navbar";
import { DesktopMenu } from "./desktop-menu";

export default function DesktopNav() {
  return (
    <DesktopNavbar>
      <DesktopMenu />
    </DesktopNavbar>
  );
}