"use client";
import Navigation from "@/components/Navigation";
import { useRef } from "react";

export default function Narrative() {
    const contentRef = useRef<HTMLDivElement>(null);

    const handleReadAloud = () => {
        if (contentRef.current) {
            const text = contentRef.current.innerText;
            const utterance = new window.SpeechSynthesisUtterance(text);
            window.speechSynthesis.cancel();
            window.speechSynthesis.speak(utterance);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col">
            <Navigation />
            <main className="flex-1 flex items-center justify-center px-4 py-8">
                <section className="w-full max-w-4xl bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-gray-100">
                    <h1
                        className="text-3xl font-bold mb-6 text-blue-900 text-center"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        Narrative
                    </h1>
                    <button
                        onClick={handleReadAloud}
                        className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        aria-label="Read content aloud"
                    >
                        🔊 Read Aloud
                    </button>
                    <div
                        ref={contentRef}
                        className="space-y-6 text-gray-700"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        <p className="text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nullam auctor, nisl eget ultricies tincidunt,
                            nisl nisl aliquam nisl, eget aliquam nisl nisl sit
                            amet nisl. Sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Ut enim ad minim veniam, quis nostrud exercitation
                            ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Excepteur sint occaecat cupidatat non proident, sunt
                            in culpa qui officia deserunt mollit anim id est
                            laborum. Sed ut perspiciatis unde omnis iste natus
                            error sit voluptatem accusantium doloremque
                            laudantium.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
