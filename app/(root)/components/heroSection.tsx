"use client";

import NavbarDemo from "./navbar"
import SpotlightNewDemo from "./body"


export default function HeroSection() {
  return (
    <div className="text-black min-h-screen flex flex-col">
      {/* Navbar */}
      <NavbarDemo/>

      {/* Main Content */}
     <SpotlightNewDemo/>
    </div>
  );
}