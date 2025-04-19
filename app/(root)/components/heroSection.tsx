"use client";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { LineShadowText } from "@/components/magicui/line-shadow-text";

export default function HeroSection() {
  return (
    <div className="text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="relative flex items-center justify-between px-6 py-4 border-b border-gray-700">
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

        {/* Buttons */}
        <div className="flex space-x-4">
          <RainbowButton className="text-black font-bold ">Sign Up</RainbowButton>
          <RainbowButton className="text-black font-bold">Login</RainbowButton>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <LineShadowText className="text-4xl font-bold mb-4">
          Welcome to NoteNest
        </LineShadowText>
        <p className="text-lg text-gray-400 mb-8">
          Your go-to platform for organizing and managing your notes.
        </p>
        <RainbowButton className="text-black font-bold">Get started</RainbowButton>
      </div>
    </div>
  );
}