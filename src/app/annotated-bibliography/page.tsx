"use client";
import Navigation from "@/components/Navigation";
import { useRef } from "react";
import ReadAloudControls from "@/components/ReadAloudControls";

export default function AnnotatedBibliography() {
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
                        Annotated Bibliography
                    </h1>
                    <div
                        ref={contentRef}
                        className="space-y-6 text-gray-700"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        <p className="text-lg leading-relaxed">
                            <strong>Lorem Ipsum Dolor:</strong>{" "}
                            <em>Consectetur adipiscing elit</em>. Sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <p className="text-lg leading-relaxed">
                            For more information, visit{" "}
                            <a
                                href="https://example.com"
                                className="text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                this resource
                            </a>
                            .
                        </p>
                        <p
                            className="text-lg leading-relaxed"
                            style={{ textIndent: "2em" }}
                        >
                            Duis aute irure dolor in reprehenderit in voluptate
                            velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <p className="text-lg leading-relaxed">
                            <b>Excepteur sint occaecat</b> cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
