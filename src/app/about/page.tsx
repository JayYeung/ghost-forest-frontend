"use client";
import Navigation from "@/components/Navigation";
import { useRef } from "react";
import ReadAloudControls from "@/components/ReadAloudControls";
import Image from "next/image";

export default function About() {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col">
            <Navigation />
            <main className="flex-1 px-4 py-8">
                <div className="w-full max-w-6xl mx-auto space-y-8">
                    {/* Team Members & Responsibilities Section */}
                    <section className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-gray-100">
                        <div className="w-full flex justify-start mb-4">
                            <ReadAloudControls
                                getText={() =>
                                    contentRef.current?.innerText || ""
                                }
                            />
                        </div>
                        <h1
                            className="text-3xl font-bold mb-6 text-blue-900 text-center"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                            About Our Project
                        </h1>
                        <div
                            ref={contentRef}
                            className="space-y-8 text-gray-700"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-blue-800">
                                    Team Members & Responsibilities
                                </h2>
                                <div className="space-y-4">
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                                                <Image
                                                    src="/images/jay-yeung.jpg"
                                                    alt="Jay Yeung"
                                                    width={64}
                                                    height={64}
                                                    className="object-cover w-full h-full rounded-full"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg text-blue-700">
                                                    Jay Yeung
                                                </h3>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    Frontend, Backend, Data
                                                    Visualization, and
                                                    Methodology
                                                </p>
                                                <p className="text-sm">
                                                    <strong>
                                                        Responsibilities:
                                                    </strong>{" "}
                                                    I processed satellite forest
                                                    data, trimmed metadata,
                                                    turned it into polygons, and
                                                    built colorblind-friendly
                                                    NDVI maps for the website. I
                                                    helped graph economic
                                                    figures from the BEA, added
                                                    audio playback, and wrote
                                                    the methods and data
                                                    sections. Built much of the
                                                    UI and backend. As an avid
                                                    environmentalist with a
                                                    background in studying
                                                    ecosystems and forests in
                                                    high school, I find this
                                                    project especially
                                                    meaningful. Analyzing
                                                    real-world data on forest
                                                    change is both fascinating
                                                    and rewarding to me.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                                                <Image
                                                    src="/images/daphne.jpg"
                                                    alt="Daphne"
                                                    width={64}
                                                    height={64}
                                                    className="object-cover w-full h-full rounded-full"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg text-blue-700">
                                                    Daphne
                                                </h3>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    Political Events Timeline,
                                                    Frontend, Data Critique,
                                                    Video Annotation, and
                                                    Visualization Caption
                                                </p>
                                                <p className="text-sm">
                                                    <strong>
                                                        Responsibilities:
                                                    </strong>{" "}
                                                    I wrote the political
                                                    policies events that
                                                    influenced the formation of
                                                    ghost forests in North
                                                    Carolina. I also helped
                                                    editing the narrative,
                                                    especially the topic and
                                                    thesis. I also helped build
                                                    the frontend.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                                                <Image
                                                    src="/images/IMG_0922.jpg"
                                                    alt="Arlen"
                                                    width={64}
                                                    height={64}
                                                    className="object-cover w-full h-full rounded-full"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg text-blue-700">
                                                    Arlen
                                                </h3>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    Front End, Data Critique,
                                                    Annotated Biliography,
                                                    Narrative, Graph
                                                    Visualization, Narrative
                                                </p>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    <strong>Why this is meaningful to me</strong>{" "}
                                                    Ghost forests are meaningful to me because they make the impacts of 
                                                    climate change and policy failure visible, turning abstract data into 
                                                    a powerful, real-world warning of environmental loss.
                                                    
                                                </p>
                                                <p className="text-sm">
                                                    <strong>
                                                        Responsibilities:
                                                    </strong>{" "}
                                                    For this project, I&apos;ve
                                                    been involved in both the
                                                    technical work and shaping
                                                    the overall narrative. I
                                                    helped create the
                                                    visualizations, including an
                                                    interactive map using Hansen
                                                    et al.&apos;s forest loss
                                                    data and a graph that
                                                    compares that loss to
                                                    environmental spending in
                                                    North Carolina. I pulled in
                                                    budget data from the OSBM,
                                                    though I also noted in our
                                                    critique that some of their
                                                    numbers are just projections
                                                    and not actual
                                                    spending—which is important
                                                    for how we interpret the
                                                    trends. I also pointed out
                                                    how the satellite data shows
                                                    where forest loss happens,
                                                    but not why, which helped us
                                                    think more critically about
                                                    how we present the story. On
                                                    the technical side, I used
                                                    QGIS and Python to map the
                                                    data and track tree
                                                    population changes over the
                                                    past 20 years. I&apos;m
                                                    currently working on
                                                    building our final website
                                                    and making sure it&apos;s
                                                    not only clear and
                                                    informative, but accessible
                                                    too.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                                                <Image
                                                    src="/images/hailey.jpg"
                                                    alt="Hailey"
                                                    width={64}
                                                    height={64}
                                                    className="object-cover w-full h-full rounded-full"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg text-blue-700">
                                                    Hailey
                                                </h3>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    Narrative, Data Critique,
                                                    Political Events Timeline
                                                </p>
                                                <p className="text-sm">
                                                    <strong>
                                                        Responsibilities:
                                                    </strong>{" "}
                                                    Hi! My name is Hailey
                                                    Tsuchiya, and I'm a rising
                                                    junior studying Economics
                                                    and Data Science! Fun fact:
                                                    I had a brief stint as a
                                                    Sustainable Environmental
                                                    Design major, so the topic
                                                    of environmental
                                                    policymaking is super
                                                    interesting and close to me.
                                                    On this project, I worked on
                                                    building our narrative —
                                                    focusing on introducing the
                                                    topic, research question,
                                                    and thesis. Additionally, I
                                                    aided with the data critique
                                                    and building the policy
                                                    timeline.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 rounded-lg p-4">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0 flex items-center justify-center">
                                                <span className="text-gray-600 text-sm">
                                                    Photo
                                                </span>
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg text-blue-700">
                                                    Team Member 5
                                                </h3>
                                                <p className="text-sm text-gray-600 mb-2">
                                                    Short bio and background
                                                </p>
                                                <p className="text-sm">
                                                    <strong>
                                                        Responsibilities:
                                                    </strong>{" "}
                                                    Content creation, user
                                                    testing, documentation
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-blue-800">
                                    Acknowledgments & Resources
                                </h2>
                                <div className="space-y-4">
                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <h3 className="font-semibold text-lg text-blue-700 mb-2">
                                            Data Sources
                                        </h3>
                                        <ul className="text-sm space-y-2">
                                            <li>
                                                <strong>
                                                    Hansen Global Forest Change
                                                    Dataset:
                                                </strong>{" "}
                                                Primary forest loss data from
                                                Google Earth Engine
                                            </li>
                                            <li>
                                                <strong>
                                                    BEA Regional API:
                                                </strong>{" "}
                                                Government spending data for
                                                environmental programs
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-green-50 rounded-lg p-4">
                                        <h3 className="font-semibold text-lg text-green-700 mb-2">
                                            Academic Support
                                        </h3>
                                        <ul className="text-sm space-y-2">
                                            <li>
                                                Digital Humanities 100 professor
                                                and staff (thank you Professor
                                                Caddy)
                                            </li>
                                            <li>
                                                Peer review and feedback from
                                                classmates & teammates
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-yellow-50 rounded-lg p-4">
                                        <h3 className="font-semibold text-lg text-yellow-700 mb-2">
                                            Technical Resources
                                        </h3>
                                        <ul className="text-sm space-y-2">
                                            <li>
                                                Google Earth Engine for
                                                satellite imagery analysis
                                            </li>
                                            <li>
                                                Next.js and React for web
                                                development
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4 text-blue-800">
                                    Technical Decisions & Methodology
                                </h2>
                                <div className="space-y-4">
                                    <div className="bg-purple-50 rounded-lg p-4">
                                        <h3 className="font-semibold text-lg text-purple-700 mb-2">
                                            Technology Stack
                                        </h3>
                                        <ul className="text-sm space-y-2">
                                            <li>
                                                <strong>
                                                    Next.js & React:
                                                </strong>{" "}
                                                Chosen for modern web
                                                development, server-side
                                                rendering, and accessibility
                                                features
                                            </li>
                                            <li>
                                                <strong>TypeScript:</strong>{" "}
                                                Selected for type safety and
                                                better code maintainability
                                            </li>
                                            <li>
                                                <strong>Tailwind CSS:</strong>{" "}
                                                Used for rapid UI development
                                                and consistent styling
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="bg-orange-50 rounded-lg p-4">
                                        <h3 className="font-semibold text-lg text-orange-700 mb-2">
                                            Data Processing Choices
                                        </h3>
                                        <ul className="text-sm space-y-2">
                                            <li>
                                                <strong>
                                                    We used Jupyter Notebook to
                                                    combine code,
                                                    visualizations, and
                                                    commentary in one place,
                                                    making it easier to
                                                    collaborate and revise. For
                                                    visualizations, we used
                                                    Matplotlib for quick static
                                                    plots and Plotly to create
                                                    interactive graphs—most
                                                    clearly seen in our
                                                    environmental spending vs.
                                                    forest loss timeline with
                                                    hoverable policy markers. We
                                                    chose tools that allowed us
                                                    to highlight patterns
                                                    without oversimplifying the
                                                    data. Instead of filling in
                                                    missing values, we preserved
                                                    gaps to reflect real-world
                                                    inconsistencies in
                                                    environmental reporting.
                                                </strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}
