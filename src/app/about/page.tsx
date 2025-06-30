"use client";
import Navigation from "@/components/Navigation";
import { useRef } from "react";
import ReadAloudControls from "@/components/ReadAloudControls";

export default function About() {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col">
            <Navigation />
            <main className="flex-1 flex items-center justify-center px-4 py-8">
                <section className="w-full max-w-4xl bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-gray-100">
                    <div className="w-full flex justify-start mb-4">
                        <ReadAloudControls
                            getText={() => contentRef.current?.innerText || ""}
                        />
                    </div>
                    <h1
                        className="text-3xl font-bold mb-6 text-blue-900 text-center"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        About
                    </h1>
                    <div
                        ref={contentRef}
                        className="space-y-6 text-gray-700"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        <p className="text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Vestibulum ante ipsum primis in faucibus orci
                            luctus et ultrices posuere cubilia Curae; Donec
                            velit neque, auctor sit amet aliquam vel,
                            ullamcorper sit amet ligula.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Proin eget tortor risus. Mauris blandit aliquet
                            elit, eget tincidunt nibh pulvinar a. Vestibulum ac
                            diam sit amet quam vehicula elementum sed sit amet
                            dui. Curabitur aliquet quam id dui posuere blandit.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Nulla quis lorem ut libero malesuada feugiat. Nulla
                            quis lorem ut libero malesuada feugiat. Vestibulum
                            ac diam sit amet quam vehicula elementum sed sit
                            amet dui. Curabitur aliquet quam id dui posuere
                            blandit.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
