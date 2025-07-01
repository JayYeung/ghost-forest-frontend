"use client";
import Navigation from "@/components/Navigation";
import { useRef } from "react";
import ReadAloudControls from "@/components/ReadAloudControls";
import NDVIMap from "@/components/NDVIMap";

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
                        className="space-y-10 text-gray-700"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        {/* Section 1: Forest Loss Map */}
                        <section className="mb-10">
                            <h2 className="text-xl font-bold mb-4 text-blue-800">
                                Interactive Forest Loss Map
                            </h2>
                            <div
                                className="w-full flex-1 flex items-center justify-center"
                                style={{
                                    aspectRatio: "3/4",
                                    minHeight: "24rem",
                                    maxHeight: "40rem",
                                }}
                            >
                                <NDVIMap />
                            </div>
                            <p className="text-lg leading-relaxed mt-4">
                                The interactive map draws from the University of
                                Maryland&apos;s Global Forest Change 2000–2024
                                dataset, which uses satellite imagery to track
                                global tree cover loss at a 30-meter resolution.
                                It&apos;s especially useful for observing the
                                expansion of ghost forests and saltwater
                                intrusion in vulnerable wetland areas. The map
                                offers a clear, year-by-year view of
                                deforestation trends that would be hard to grasp
                                from tables or reports alone. However, the map
                                also comes with important limitations. While
                                it&apos;s visually powerful, it doesn&apos;t
                                explain why forests are disappearing. The data
                                doesn&apos;t distinguish between natural events
                                (like hurricanes), ecological stress (like
                                salinization), or human actions (like logging or
                                zoning changes). Without added context, users
                                might interpret the changes as neutral or
                                inevitable. As digital humanities scholars like
                                Hepworth and Church point out, visualizations
                                like these often present data as objective
                                truth, when in fact they reflect what&apos;s
                                chosen to be shown—and what&apos;s left out. In
                                this case, the map omits any mention of
                                policies, land ownership, or community impact.
                            </p>
                        </section>

                        {/* Section 2: Environmental Spending vs. Forest Loss Graph */}
                        <section className="mb-10">
                            <h2 className="text-xl font-bold mb-4 text-blue-800">
                                Environmental Spending vs. Forest Loss Graph
                            </h2>
                            <div className="w-full max-w-2xl mx-auto mb-4">
                                <div className="aspect-video rounded-lg overflow-hidden shadow border border-gray-200 bg-white/80">
                                    <iframe
                                        src="/graph.html"
                                        title="Environmental Spending vs. Forest Loss Graph"
                                        className="w-full h-full min-h-[300px]"
                                        style={{ border: "none" }}
                                        aria-label="Environmental Spending vs. Forest Loss Graph"
                                    ></iframe>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mt-4">
                                To fill in those gaps, we paired the map with a
                                custom time-series graph that overlays annual
                                forest loss data with state and federal
                                environmental spending from 2003 to 2023,
                                alongside legislative markers such as the
                                Regulatory Reform Act (2011), and the NC Farm
                                Act (2023). This graph shifts the focus from
                                &quot;what happened&quot; to &quot;why it may
                                have happened.&quot; It reveals moments when
                                spending dropped or protections were weakened,
                                followed by visible upticks in forest loss. By
                                putting ecological data in conversation with
                                policy and money, the graph invites a more
                                critical reading of environmental change as
                                something shaped by governance and power—not
                                just nature. The OSBM environmental spending
                                data includes projections for recent years,
                                meaning not all values reflect actual
                                expenditures. Additionally, shifting budget
                                categories and inconsistent definitions over
                                time make direct year-to-year comparisons
                                somewhat unreliable.
                            </p>
                        </section>

                        {/* Section 3: Population Composition Pie Chart */}
                        <section>
                            <h2 className="text-xl font-bold mb-4 text-blue-800">
                                Population Composition by Age Group (Coastal NC)
                            </h2>
                            <div className="w-full max-w-2xl mx-auto mb-4">
                                <div className="aspect-video rounded-lg overflow-hidden shadow border border-gray-200 bg-white/80">
                                    <iframe
                                        src="/pop_in_age_group.html"
                                        title="Population by Age Group Pie Chart"
                                        className="w-full h-full min-h-[300px]"
                                        style={{ border: "none" }}
                                        aria-label="Population by Age Group Pie Chart"
                                    ></iframe>
                                </div>
                            </div>
                            <p className="text-lg leading-relaxed mt-4">
                                While the visualization effectively filters and
                                processes population data from 2001 to 2024
                                across North Carolina&apos;s coastal counties,
                                its core insight is somewhat limited. The choice
                                to focus on age groups provides a more ethically
                                grounded view than the flawed racial labels in
                                the original dataset, but the resulting
                                interactive pie chart doesn&apos;t reveal any
                                strikingly different trends from statewide or
                                national population distributions. Most counties
                                continue to follow a typical aging curve, with
                                slight increases in older age groups over
                                time—something common across the U.S., not
                                necessarily unique to regions affected by ghost
                                forests. Without stronger comparative analysis
                                or evidence linking demographic change to
                                environmental impact, the visualization risks
                                seeming disconnected from the core narrative.
                                While technically well-executed, the output
                                could be strengthened by showing how these
                                population shifts differ from areas not
                                experiencing forest loss or by layering in
                                migration patterns, land use changes, or housing
                                trends that speak more directly to the impact of
                                ghost forests.
                            </p>
                        </section>
                    </div>
                </section>
            </main>
        </div>
    );
}
