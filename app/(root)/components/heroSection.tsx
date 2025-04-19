"use client"


import { Link as ScrollLink } from "react-scroll"
import Link from "next/link";
import { RainbowButton } from "@/components/magicui/rainbow-button";

export default function HeroSection() {
  return (
    <div className=" text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="relative flex items-center px-6 py-4 border-b border-gray-700">
        {/* Logo */}
        <div className="text-2xl font-bold">NoteNest</div>
        {/* Navigation */}
        <nav className="absolute inset-0 flex justify-center items-center">
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About
              </a>
            </li>
            <li>
              <a href="#notes" className="hover:text-gray-400">
                Notes
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-1 flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to NoteNest</h1>
        <p className="text-lg text-gray-400">
          Your go-to platform for organizing and managing your notes.
        </p>
        <RainbowButton>
          <ScrollLink to="contact-section" activeClass="active" smooth={true} offset={-120} duration={1100}>Get in touch</ScrollLink>
        </RainbowButton>
      </main>
    </div>
  );
}