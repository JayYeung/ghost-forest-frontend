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
                    <div className="w-full flex justify-start mb-4">
                        <ReadAloudControls
                            getText={() => contentRef.current?.innerText || ""}
                        />
                    </div>
                    <h1
                        className="text-3xl font-bold mb-6 text-blue-900 text-center"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        Data Critique
                    </h1>
                    <div
                        ref={contentRef}
                        className="space-y-6 text-gray-700"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        <p className="text-lg leading-relaxed">
                            The interactive map draws from the University of Maryland’s Global Forest Change 2000–2024 dataset, 
                            which uses satellite imagery to track global tree cover loss at a 30-meter resolution. 
                            It’s especially useful for observing the expansion of ghost forests and saltwater intrusion in vulnerable wetland areas.
                            The map offers a clear, year-by-year view of deforestation trends that would be hard to grasp from tables or reports alone.
                            However, the map also comes with important limitations. While it’s visually powerful, it doesn’t explain why forests are disappearing. 
                            The data doesn’t distinguish between natural events (like hurricanes), ecological stress (like salinization), 
                            or human actions (like logging or zoning changes). Without added context, users might interpret the changes as neutral or inevitable.
                            As digital humanities scholars like Hepworth and Church point out, visualizations like these often present data as objective truth, 
                            when in fact they reflect what’s chosen to be shown—and what’s left out. In this case, the map omits any mention of policies, land ownership,
                            or community impact.

                        </p>
                        <p className="text-lg leading-relaxed">
                            To fill in those gaps, we paired the map with a custom time-series graph that overlays annual forest loss data with state and federal environmental spending from 2003 to 2023, 
                            alongside legislative markers such as the Regulatory Reform Act (2011), and the NC Farm Act (2023). This graph shifts the focus from “what happened” to “why it may have happened.”
                            It reveals moments when spending dropped or protections were weakened, followed by visible upticks in forest loss. By putting ecological data in conversation with policy and money,
                            the graph invites a more critical reading of environmental change as something shaped by governance and power—not just nature.
                            The OSBM environmental spending data includes projections for recent years, meaning not all values reflect actual expenditures. 
                            Additionally, shifting budget categories and inconsistent definitions over time make direct year-to-year comparisons somewhat unreliable.
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
