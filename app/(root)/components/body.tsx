"use client"
import { Spotlight } from "@/components/ui/spotlight-new"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { RainbowButton } from "@/components/magicui/rainbow-button"

export default function SpotlightNewDemo() {
    return (
        <div className="h-screen w-full rounded-md flex items-center justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Spotlight />
            <div className="p-4 max-w-7xl mx-auto relative z-10 w-full flex flex-col items-center justify-center gap-6">
                <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                    Welcome to NoteNest
                </h1>
                <div className="text-xl md:text-2xl text-center text-neutral-300 max-w-3xl">
                    <TextGenerateEffect words="Sharing Notes Made Easy. Store your notes, sell your smarts, and turn knowledge into income." />
                </div>
                <RainbowButton className="mt-6 text-black font-bold">Get Started</RainbowButton>
            </div>
        </div>
    )
}
