"use client";
import React from "react";

export default function InteractiveTimeline() {
    const years = [1973, 1995, 2011, 2014, 2023, 2025];
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
                <p className="font-semibold text-xl mb-3">
                    {selected === 1973 && "1973: The Hardison Amendment"}
                    {selected === 1995 && "1995: Repeal of the Hardison Amendment"}
                    {selected === 2011 && "2011: Return of the Republican Party"}
                    {selected === 2014 && "2014: Stricter Environmental Rules under Review"}
                    {selected === 2023 && "2023: The North Carolina Farm Act of 2023"}
                    {selected === 2025 && "2025: Nationwide Research Funding Cut"}
                </p>
                <p className="text-base text-gray-800 px-4 text-left leading-7">
                    {/* Placeholder content for each year */}
                    {selected === 1973 && (
                        <>
                        First enacted in 1973, the Hardison amendments are a series of laws
                        that restrict state agencies from establishing environmental regulations stricter than federal regulations.
                        It disabled North Carolina from independently setting stricter pollution standards
                        or environmental protections than those mandated by the federal government.
                        </>
                        )}
                    {selected === 1995 &&
                        "The democratically controlled legislatures repealed the Hardison amendments, \
                        allowing North Carolina to enact more stringent regulations than the federal governments."}
                    {selected === 2011 &&
                        "With the return of a Republican majority to both legislative chambers for the first time since 1870, \
                        the legislature reinstated the Hardison amendments."}
                    {selected === 2014 &&
                        "The legislature expanded the Hardison amendments to enforce \
                        all rules stricter than the federal minimum standards to automatically fall under legislative review."}
                    {selected === 2023 && (
                    <>
                        In May, the waters of the United States under the Clean Water Act were defined to
                        only include &quot;wetlands with a continuous surface connection&quot;. In June, the NC Farm Act of 2023, Senate Bill 582,
                        prevented North Carolina from protecting its wetlands that are not &quot;navigable waters of the United States&quot;.
                        <br /><br />
                        The N.C. Department of Environmental Quality estimates that nearly half of the wetlands in
                        North Carolina, as much as 2.5 million acres, are no longer under the protection of the Clean Water Act.
                        The devastating impacts of flooding, without the natural protection from wetlands,
                        will be multiplied for communities of color and lower wealth in rural North Carolina.
                    </>
                    )}
                    {selected === 2025 && (
                        <>
                        For the 2026 fiscal year that starts July 1, 2025, President Donald Trump cuts $18 billion
                        of funding at the National Institutes of Health (NIH) and more than half at the National
                        Science Foundation (NSF) and NASA. 
                        <br /><br />
                        At the National Oceanic and Atmospheric Administration (NOAA),
                        it is cutting at least $1.5 billion, with $1.31 billion of that reduction coming from
                        &quot;climate-dominated research, data, and grant programs&quot;.
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
