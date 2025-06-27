"use client";
import React from "react";

export default function InteractiveTimeline() {
    const years = [2000, 2005, 2010, 2015, 2020, 2024];
    const [selected, setSelected] = React.useState(2020);
    return (
        <div className="w-full max-w-2xl mx-auto flex flex-col items-center">
            <div className="w-full flex items-center justify-between mb-6 relative">
                <div
                    className="absolute left-0 right-0 top-1/2 h-1 bg-blue-200 rounded-full z-0"
                    style={{ transform: "translateY(-50%)" }}
                />
                {years.map((year) => (
                    <button
                        key={year}
                        onClick={() => setSelected(year)}
                        className={`z-10 w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all duration-200 font-bold text-base
                            ${
                                selected === year
                                    ? "bg-blue-600 text-white border-blue-700 shadow-lg scale-110"
                                    : "bg-white text-blue-700 border-blue-300 hover:bg-blue-100"
                            }`}
                        aria-label={`Select year ${year}`}
                    >
                        {year}
                    </button>
                ))}
            </div>
            <div className="w-full bg-blue-50 rounded-lg p-6 text-center text-blue-900 shadow-inner min-h-[80px]">
                <p className="font-semibold text-lg mb-2">Year: {selected}</p>
                <p className="text-sm text-gray-700">
                    {/* Placeholder content for each year */}
                    {selected === 2000 &&
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero."}
                    {selected === 2005 &&
                        "Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet."}
                    {selected === 2010 &&
                        "Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta."}
                    {selected === 2015 &&
                        "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora."}
                    {selected === 2020 &&
                        "Torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero."}
                    {selected === 2024 &&
                        "Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam."}
                </p>
            </div>
        </div>
    );
}
