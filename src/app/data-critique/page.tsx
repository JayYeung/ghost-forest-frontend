"use client";
import Navigation from "@/components/Navigation";
import { useRef } from "react";
import ReadAloudControls from "@/components/ReadAloudControls";

export default function DataCritique() {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col">
            <Navigation />
            <main className="flex-1 flex items-center justify-center px-4 py-8">
                <section className="w-full max-w-4xl bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-gray-100">
                    <h1
                        className="text-3xl font-bold mb-6 text-blue-900 text-center"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        Data Critique
                    </h1>
                    <ReadAloudControls
                        getText={() => contentRef.current?.innerText || ""}
                    />
                    <div
                        ref={contentRef}
                        className="space-y-6 text-gray-700"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        <p className="text-lg leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer nec odio. Praesent libero. Sed cursus
                            ante dapibus diam. Sed nisi. Nulla quis sem at nibh
                            elementum imperdiet. Duis sagittis ipsum.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Praesent mauris. Fusce nec tellus sed augue semper
                            porta. Mauris massa. Vestibulum lacinia arcu eget
                            nulla. Class aptent taciti sociosqu ad litora
                            torquent per conubia nostra, per inceptos himenaeos.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Curabitur sodales ligula in libero. Sed dignissim
                            lacinia nunc. Curabitur tortor. Pellentesque nibh.
                            Aenean quam. In scelerisque sem at dolor. Maecenas
                            mattis. Sed convallis tristique sem.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}
