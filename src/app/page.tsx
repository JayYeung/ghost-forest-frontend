"use client";
import Navigation from "@/components/Navigation";
import NDVIMap from "@/components/NDVIMap";

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
            <Navigation />
            <main className="px-4 py-8">
                {/* Hero Section */}
                <section className="w-full max-w-6xl mx-auto mb-16">
                    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-gray-100">
                        <h1
                            className="text-4xl sm:text-5xl font-extrabold mb-4 text-center tracking-tight text-blue-900 drop-shadow-lg"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                            Ghost Forest Digital Humanities Project
                        </h1>
                        <p
                            className="text-lg sm:text-xl text-gray-700 mb-6 text-center font-medium max-w-3xl"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                            Analyzing ghost forest emergence in North Carolina
                            through NDVI satellite imagery and government
                            spending data to understand the relationship between
                            policy decisions and environmental outcomes.
                        </p>
                    </div>
                </section>

                {/* NDVI Analysis Section */}
                <section className="w-full max-w-6xl mx-auto mb-16">
                    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-gray-100">
                        <h2
                            className="text-2xl font-bold mb-6 text-blue-900 text-center w-full"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                            NDVI & Forest Loss Visualization
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

                        <p className="mt-3 text-[11px] text-gray-400">
                            The colors in this legend were chosen for high
                            contrast and accessibility, making it easier for
                            visually impaired users to distinguish between
                            categories.
                        </p>
                    </div>
                </section>

                {/* Annotated Video Block */}
                <section className="w-full max-w-6xl mx-auto mb-16">
                    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-100 flex flex-col items-center">
                        <h2
                            className="text-2xl font-bold mb-6 text-blue-900 text-center w-full"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                            Annotated Video
                        </h2>
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

                {/* Ghost Forest Map Section */}
                <section className="w-full max-w-6xl mx-auto mb-16">
                    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-100">
                        <h2
                            className="text-2xl font-bold mb-6 text-blue-900 text-center"
                            style={{ fontFamily: "var(--font-geist-sans)" }}
                        >
                            Ghost Forest Emergence in North Carolina
                        </h2>
                        <div className="bg-gray-100 rounded-lg p-4 h-96 flex items-center justify-center">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-3xl">🗺️</span>
                                </div>
                                <p className="text-gray-600 font-medium text-lg">
                                    Coastal Saltwater Intrusion Map
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Visualization of ghost forest formation
                                    through progressive saltwater intrusion
                                </p>
                                <div className="mt-4 flex justify-center space-x-4">
                                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Government Spending Analysis Section */}
                <section className="w-full max-w-6xl mx-auto mb-16">
                    <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-gray-100">
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
