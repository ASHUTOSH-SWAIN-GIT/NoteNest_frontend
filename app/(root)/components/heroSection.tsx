"use client";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { cn } from "@/lib/utils";
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