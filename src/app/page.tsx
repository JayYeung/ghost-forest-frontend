"use client";
import Navigation from "@/components/Navigation";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import { useRef } from "react";
import ReadAloudControls from "@/components/ReadAloudControls";

export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
            <Navigation />
            <main className="px-4 py-8">
                {/* Hero Section */}
                <section className="w-full max-w-6xl mx-auto mb-16">
                    <div
                        ref={heroRef}
                        className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-gray-100"
                    >
                        <div className="w-full flex justify-start mb-4">
                            <ReadAloudControls
                                getText={() =>
                                    heroRef.current?.innerText || ""
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
                            Ghost forests, once lush and vibrant, have
                            transformed into haunting landscapes of dead trees
                            and flooded land. This phenomenon, driven by rising
                            sea levels and extreme weather, has left a profound
                            impact on the environment and local communities in
                            North Carolina. Through visualizing forest loss from
                            satellite imagery, analyzing government spending and
                            legislation, and exploring the demographics of
                            affected areas, our project explores the intricate
                            relationship between ghost forests and government
                            policies, aiming to shed light on how these policies
                            have influenced the emergence and management of
                            ghost forests over time.
                        </p>
                    </div>
                </section>

                {/* Annotated Video Block */}
                <section className="w-full max-w-6xl mx-auto mb-16">
                    <div
                        ref={videoRef}
                        className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-100 flex flex-col items-center"
                    >
                        <div className="w-full flex justify-start mb-4">
                            <ReadAloudControls
                                getText={() =>
                                    videoRef.current?.innerText || ""
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
                        <p className="mb-4 text-sm text-gray-500 max-w-3xl mt-4">
                            Source: The Weather Channel
                        </p>
                    </div>
                </section>

                {/* Interactive Timeline Section */}
                <section className="w-full max-w-6xl mx-auto mb-16">
                    <div
                        ref={timelineRef}
                        className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-100 flex flex-col items-center"
                    >
                        <div className="w-full flex justify-start mb-4">
                            <ReadAloudControls
                                getText={() =>
                                    timelineRef.current?.innerText || ""
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
                            While not comprehensive, this timeline highlights
                            moments that have significantly shaped the conditions
                            for ghost forest formation. By including events
                            dating as far back as the 1970s, we aim to provide
                            historical context that helps explain the
                            environmental and policy landscape leading up to our
                            primary period of focus: 2000&nbsp;-&nbsp;2024.
                        </p>
                        <p className="mb-4 text-gray-700 max-w-3xl text-center">
                                Click through the timeline to explore key
                                environmental policies and extreme weather events
                                in North Carolina from the 1970s to 2025.
                            <br />
                            <br />
                        </p>
                        <InteractiveTimeline />
                        <div className="mt-8 w-full max-w-3xl bg-gray-50 rounded-lg p-6 border border-gray-200 shadow">
                            <h3 className="font-semibold text-lg text-blue-800 mb-2">
                                Political Events Timeline Sources
                            </h3>
                            <div
                                className="space-y-3 text-sm text-gray-700"
                                style={{
                                    textIndent: "-2em",
                                    paddingLeft: "2em",
                                }}
                            >
                                <p>
                                    Cho, Adrian, et al. “Trump’s Proposed Budget
                                    Would Mean ‘Disastrous’ Cuts to Science.”{" "}
                                    <em>Science</em>, 2 May 2025,{" "}
                                    <a
                                        href="https://www.science.org/content/article/trump-s-proposed-budget-would-mean-disastrous-cuts-science"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        www.science.org/content/article/trump-s-proposed-budget-would-mean-disastrous-cuts-science
                                    </a>
                                    .
                                </p>
                                <p>
                                    Dalban, Lauren. “New Study Shows Extreme and
                                    Far-Reaching Impacts of Sackett Ruling on
                                    Federal Wetland Protections - inside Climate
                                    News.” <em>Inside Climate News</em>, 25 Mar.
                                    2025,{" "}
                                    <a
                                        href="https://insideclimatenews.org/news/25032025/supreme-court-sackett-decision-threatens-wetlands-nrdc-study-finds/"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        insideclimatenews.org/news/25032025/supreme-court-sackett-decision-threatens-wetlands-nrdc-study-finds/
                                    </a>
                                    .
                                </p>
                                <p>
                                    Davis, Corey. “Florence after Five:
                                    Inundated Ecosystems - North Carolina State
                                    Climate Office.”{" "}
                                    <em>NC State University</em>, 13 Sept. 2023,{" "}
                                    <a
                                        href="https://climate.ncsu.edu/blog/2023/09/florence-after-five-inundated-ecosystems/"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        climate.ncsu.edu/blog/2023/09/florence-after-five-inundated-ecosystems/
                                    </a>
                                    .
                                </p>
                                <p>
                                    Livingston, Walker. “Numerous N.C. Wetlands
                                    Lose Protections Under Farm Act and SCOTUS
                                    Case.” <em>The Daily Tar Heel</em>, 5 Sept.
                                    2023,{" "}
                                    <a
                                        href="https://www.dailytarheel.com/article/2023/09/city-north-carolina-wetlands-farm-bill-environmental-impacts"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        www.dailytarheel.com/article/2023/09/city-north-carolina-wetlands-farm-bill-environmental-impacts
                                    </a>
                                    .
                                </p>
                                <p>
                                    North Carolina General Assembly. “Bill
                                    Summary for H 760 (2015-2016) | Legislative
                                    Reporting Service.” <em>Unc.edu</em>, 2015,{" "}
                                    <a
                                        href="https://lrs.sog.unc.edu/billsum/h-760-2015-2016-1"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        lrs.sog.unc.edu/billsum/h-760-2015-2016-1
                                    </a>
                                    .
                                </p>
                                <p>
                                    Sorg, Lisa. “Q&A: Environmental Attorney
                                    Derb Carter on DEQ’s Power to Regulate GenX
                                    (or Not); Lawmakers to Hold Hearing
                                    Wednesday.” <em>NC Newsline</em>, 21 Aug.
                                    2017,{" "}
                                    <a
                                        href="https://ncnewsline.com/briefs/q-lawmakers-hold-hearing-wednesday"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        ncnewsline.com/briefs/q-lawmakers-hold-hearing-wednesday
                                    </a>
                                    .
                                </p>
                                <p>
                                    Wagner, Adam. “Year After Year, NC
                                    Legislators Use State Budget to Weaken
                                    Environmental Protections.”{" "}
                                    <em>Raleigh News & Observer</em>, 27 Apr.
                                    2025,{" "}
                                    <a
                                        href="https://www.newsobserver.com/news/state/north-carolina/article288496757.html"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        www.newsobserver.com/news/state/north-carolina/article288496757.html
                                    </a>
                                    .
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
