"use client";
import Navigation from "@/components/Navigation";
import NDVIMap from "@/components/NDVIMap";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import { useRef } from "react";
import ReadAloudControls from "@/components/ReadAloudControls";

export default function Home() {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
            <Navigation />
            <main className="px-4 py-8">
                {/* Hero Section */}
                <section className="w-full max-w-6xl mx-auto mb-16">
                    <div
                        ref={contentRef}
                        className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-gray-100"
                    >
                        <div className="w-full flex justify-start mb-4">
                            <ReadAloudControls
                                getText={() =>
                                    contentRef.current?.innerText || ""
                                }
                            />
                        </div>
                        <h1
                            className="text-4xl sm:text-5xl font-extrabold mb-4 text-center tracking-tight text-blue-900 drop-shadow-lg"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                            Ghost Forests and Policies in North Carolina
                        </h1>
                        <p
                            className="text-lg sm:text-xl text-gray-700 mb-6 font-medium max-w-4xl"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                            <br />
                            Since April 2025, President Donald Trump has
                            terminated over 1,600 National Science Foundation
                            grants, revoking over $1.5 billion in funding from
                            research projects, many of which relate to climate
                            change (Temple). This action serves as one example
                            of how the current political administration has
                            actively undermined the importance of climate
                            change. By pulling federal funding from scientific
                            research, the administration is silencing
                            environmental research and reducing its visibility
                            to the public.
                            <br />
                            <br />
                            One of the clearest indicators of climate change is
                            rising sea levels, which gives cause to a plethora
                            of environmental consequences &mdash; among them,
                            the emergence of ghost forests. Ghost forests are
                            dying coastal forests caused by saltwater intrusion
                            linked to sea level rise, and they provide a clear,
                            haunting visual for the impact of rising ocean
                            levels (CBS News). But beyond environmental impact,
                            ghost forests also affect the people and communities
                            that live near them. In places like North Carolina,
                            these changes are especially visible &mdash; yet
                            both policy and public awareness have fallen short
                            in addressing them (Allen).
                            <br />
                            <br />
                            Therefore, our project aims to address the influence
                            of environmental policymaking on the emergence of
                            ghost forests in North Carolina. Our topic is rooted
                            in the urgency of climate change and the increasing
                            politicization of science. The current political
                            climate has downplayed the impact and severity of
                            environmental issues, which has reduced the public
                            pressure for advocacy and systemic reform. Our
                            project aims to counteract this by providing
                            digestible visualizations of ghost forest emergence
                            and plain language summaries of environmental
                            policies in order to address a general audience.
                            <br />
                            <br />
                            From this topic, we propose the following research
                            question: &quot;What is the relationship between
                            environmental policymaking and the emergence of
                            ghost forests in North Carolina?&quot; This question
                            invites us to look into different approaches for
                            mitigating&mdash;or inadvertently
                            forming&mdash;ghost forests in North Carolina.
                        </p>
                    </div>
                </section>

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

                {/* NDVI Analysis Section */}
                <section className="w-full max-w-6xl mx-auto mb-16">
                    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-gray-100">
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
                            Forest Loss in North Carolina from 2001 to 2024
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

                        <p className="mt-3 text-[14px] text-gray-500">
                            This map focuses on the eastern coast of North
                            Carolina and visualizes the forest loss from 2001 to
                            2024. It utilizes NDVI (Normalized Difference
                            Vegetation Index) satellite imagery queried from
                            Google Earth Engine to highlight areas of
                            significant vegetation change, particularly the
                            emergence of ghost forests.
                        </p>
                        <p className="mt-3 text-[14px] text-gray-500">
                            The colors in this legend were chosen for high
                            contrast and accessibility, making it easier for
                            visually impaired users to distinguish between
                            categories. The interactive feature allows users to
                            explore the map in detail, zooming in on specific
                            areas to analyze the extent of forest loss and ghost
                            forest emergence over time.
                        </p>
                    </div>
                </section>










                        </p>
                    </div>
                </section>


                {/* Government Spending Analysis Section */}
                <section className="w-full max-w-6xl mx-auto mb-16">
                    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-100">
                        <div className="w-full flex justify-start mb-4">
                            <ReadAloudControls
                                getText={() =>
                                    contentRef.current?.innerText || ""
                                }
                            />
                        </div>
                        <h2
                            className="text-2xl font-bold mb-6 text-blue-900 text-center"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                            BEA Regional API Spending Analysis
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-green-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                                        <span className="text-xl">🌿</span>
                                    </div>
                                    <p className="text-gray-600 font-medium">
                                        Natural Resources
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Environmental protection funding
                                        (2005-present)
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-orange-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                                        <span className="text-xl">🚒</span>
                                    </div>
                                    <p className="text-gray-600 font-medium">
                                        Fire & Parks
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Fire management and park maintenance
                                        spending
                                    </p>
                                </div>
                            </div>
                            <div className="bg-gray-100 rounded-lg p-4 h-48 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-yellow-200 rounded-full mx-auto mb-3 flex items-center justify-center">
                                        <span className="text-xl">🌾</span>
                                    </div>
                                    <p className="text-gray-600 font-medium">
                                        Agriculture
                                    </p>
                                    <p className="text-xs text-gray-500 mt-1">
                                        Agricultural funding trends and impacts
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
