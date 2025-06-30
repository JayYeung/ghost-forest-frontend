"use client";
import Navigation from "@/components/Navigation";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import { useRef } from "react";
import ReadAloudControls from "@/components/ReadAloudControls";

export default function Home() {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
            <Navigation />
            <main className="px-4 py-8">
                {/* Annotated Video Block */}
                <section className="w-full max-w-6xl mx-auto mb-16">
                    <div
                        ref={contentRef}
                        className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-100 flex flex-col items-center"
                    >
                        <div className="w-full flex justify-start mb-4">
                            <ReadAloudControls
                                getText={() =>
                                    contentRef.current?.innerText || ""
                                }
                            />
                        </div>
                        <h2
                            className="text-2xl font-bold mb-6 text-blue-900 text-center w-full"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                            Why Ghost Forests?
                        </h2>
                        <p
                            className="text-lg sm:text-xl text-gray-700 mb-6 font-medium max-w-4xl"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                            We recognize the limitations of our project,
                            especially given the scope of our data and the fact
                            that ghost forest formation is heavily influenced by
                            extreme weather conditions. We chose to focus our
                            project on ghost forests as they are not widely
                            known by the public, yet they provide a striking
                            visual image of climate transformation: lush forests
                            reduced to skeletal stumps emerging from floodwater.
                            These landscapes are not only an effect of rising
                            seas, but also closely linked to government policy,
                            land use, and regulation. Therefore, this topic fits
                            well within the framework of Digital Humanities,
                            focusing on the interaction between policy and the
                            environment.
                        </p>
                        <p className="mb-4 text-gray-700 max-w-3xl">
                            In the last 10 to 15 years, the once-lush forests
                            surrounding the eastern coast of North Carolina died
                            out, forming an eerie and inanimate scene known as
                            the &quot;ghost forest&quot; (The Weather Channel).
                            Scientists stated that the trees either died from
                            seawater drowning or inland drought that forced them
                            to intake extra salinity (The Weather Channel).
                        </p>
                        <p className="mb-4 text-gray-700 max-w-3xl">
                            North Carolinians lost their natural buffer that
                            protects them from storms and tsunamis; same as
                            millions of other coastal residents who lost their
                            homelands from the rising sea level. Although people
                            are suffering and scientists are preventing it, the
                            local and federal governments are still cutting
                            research funds, ignoring human and environmental
                            trauma, and blocking the executions of climate
                            actions.
                        </p>
                        <p className="mb-4 text-gray-700 max-w-3xl">
                            The rise of ghost forests in North Carolina is not
                            an environmental issue that happened by chance. It
                            is a socio-political problem deeply intertwined with
                            power dynamics, economic interests, and societal
                            inequities.
                        </p>
                        <p className="mb-4 text-gray-700 max-w-3xl">
                            Watch the video to learn more about what&apos;s
                            going on.
                        </p>
                        <div className="w-full max-w-3xl aspect-video rounded-lg overflow-hidden shadow-lg border border-gray-200">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/fnC0RktFbuA"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* Interactive Timeline Section */}
                <section className="w-full max-w-6xl mx-auto mb-16">
                    <div
                        ref={contentRef}
                        className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-100 flex flex-col items-center"
                    >
                        <div className="w-full flex justify-start mb-4">
                            <ReadAloudControls
                                getText={() =>
                                    contentRef.current?.innerText || ""
                                }
                            />
                        </div>
                        <h2
                            className="text-2xl font-bold mb-6 text-blue-900 text-center w-full"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                            How Has Government Policies Influenced Ghost Forest
                            Emergence Over Time?
                        </h2>
                        <p
                            className="text-lg sm:text-xl text-gray-700 mb-6 font-medium max-w-4xl"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                            While we do not aim to prove causation, we do hope
                            to highlight meaningful correlations between
                            different policy decisions and ghost forest
                            emergence over time. This allows for us to compare
                            differences in proposed policy, enforcement, and
                            implementation, and we hope to identify patterns and
                            measure the effect of policy decisions on shaping
                            ghost forest formation.
                        </p>
                        <p className="mb-4 text-gray-700 max-w-3xl">
                            Click through the timeline to learn more about how
                            each policy act affected the formation of ghost
                            forests.
                            <br />
                            <br />
                        </p>
                        <InteractiveTimeline />
                    </div>
                </section>
            </main>
        </div>
    );
}
