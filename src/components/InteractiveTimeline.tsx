"use client";
import React from "react";
import Image from "next/image";

export default function InteractiveTimeline() {
    const years = [1973, 1994, 1995, 2011, 2014, 2015, 2018, 2023, 2025];
    const [selected, setSelected] = React.useState(1973);
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
                    {selected === 1994 && "1994: Lobbying Contributions"}
                    {selected === 1995 &&
                        "1995: Repeal of the Hardison Amendment"}
                    {selected === 2011 &&
                        "2011: Return of the Republican Party"}
                    {selected === 2014 &&
                        "2014: Stricter Environmental Rules under Review"}
                    {selected === 2015 && "2015: House Bill 760"}
                    {selected === 2018 &&
                        "2018: Farm Bill & Hurricane Florence"}
                    {selected === 2023 && "2023: NC Farm Act & Sackett v. EPA"}
                    {selected === 2025 && "2025: Research Funding Cut"}
                </p>
                <div className="text-base text-gray-800 px-4 text-left leading-7">
                    {/* Detailed content for each year */}
                    {selected === 1973 && (
                        <>
                            First enacted in 1973, the Hardison amendments are a
                            series of laws that restrict state agencies from
                            establishing environmental regulations stricter than
                            federal regulations (Wagner). It disabled North
                            Carolina from independently setting stricter
                            pollution standards or environmental protections
                            than those mandated by the federal government
                            (Wagner).
                            <div className="w-full flex justify-center mt-4">
                                <div className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                                    <Image
                                        src="/images/hardison.jpg"
                                        alt="Hardison Amendment"
                                        width={200}
                                        height={200}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <span className="text-xs text-gray-500 mt-2 text-center">
                                    Source: Bruce N. Cameron
                                </span>
                            </div>
                        </>
                    )}
                    {selected === 1994 && (
                        <>
                            Democracy NC reports that in 1994,
                            anti-environmental interests contributed $1.3
                            million to state legislators, accounting for 40% of
                            their identifiable, non-party campaign
                            contributions. These substantial donations have
                            enabled lobbyists to draft and promote legislation
                            that weakens environmental protections, such as
                            bills making it more difficult for state agencies to
                            issue rules on housing density in watersheds
                            (Democracy North Carolina).
                            <div className="w-full flex justify-center mt-4">
                                <div className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                                    <Image
                                        src="/images/lobbying.png"
                                        alt="Lobbying Contributions"
                                        width={200}
                                        height={200}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <span className="text-xs text-gray-500 mt-2 text-center">
                                    Source: Transparency International
                                </span>
                            </div>
                        </>
                    )}
                    {selected === 1995 && (
                        <>
                            The democratically controlled legislatures repealed
                            the Hardison amendments, allowing North Carolina to
                            enact more stringent regulations than the federal
                            government&apos;s (Sorg).
                            <div className="w-full flex justify-center mt-4">
                                <div className="w-64 h-40 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                                    <Image
                                        src="/images/lobbying.png"
                                        alt="Lobbying"
                                        width={200}
                                        height={200}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <span className="text-xs text-gray-500 mt-2 text-center">
                                    Source: Transparency International
                                </span>
                            </div>
                        </>
                    )}
                    {selected === 2011 && (
                        <>
                            With the return of a Republican majority to both
                            legislative chambers for the first time since 1870,
                            the legislature reinstated the Hardison amendments
                            (Wagner).
                            <div className="w-full flex justify-center mt-4">
                                <div className="w-50 h-50 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
                                    <Image
                                        src="/images/Republican_takeover.webp"
                                        alt="Republican Takeover"
                                        width={50}
                                        height={50}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <span className="text-xs text-gray-500 mt-2 text-center">
                                    Source: Brittanica
                                </span>
                            </div>
                        </>
                    )}
                    {selected === 2014 && (
                        <>
                            The legislature expanded the Hardison amendments to
                            enforce all rules stricter than the federal minimum
                            standards to automatically fall under legislative
                            review (Sorg).
                            <div className="w-full flex justify-center mt-4">
                                <div className="w-126 h-90 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 overflow-hidden">
                                    <Image
                                        src="/images/stricter_ruls.jpg"
                                        alt="Stricter Environmental Rules"
                                        width={320}
                                        height={256}
                                        className="object-contain w-full h-full"
                                    />
                                </div>
                            </div>
                            <div className="w-full flex justify-center">
                                <span className="text-xs text-gray-500 mt-2 text-center">
                                    Source: General Assembly, UNC School of
                                    Government, Campbell University School of
                                    Law
                                </span>
                            </div>
                        </>
                    )}
                    {selected === 2015 && (
                        <>
                            <Image
                                src="/images/hist1.png"
                                alt="Regulatory Reform Act of 2015"
                                className="my-2 rounded shadow max-w-md"
                                width={600}
                                height={400}
                            />
                            Also known as the &quot;Regulatory Reform Act of
                            2015,&quot; HB760 aimed to provide regulatory relief
                            to the state&apos;s citizens by implementing various
                            administrative reforms, including renewable energy,
                            environmental regulations, and local government
                            operations. By loosening oversight on land use and
                            development, the bill made coastal ecosystems more
                            vulnerable to salinization and flooding,
                            accelerating conditions that contribute to ghost
                            forest formation in North Carolina.
                            <br />
                            <span className="text-xs">Source: landsearch</span>
                        </>
                    )}
                    {selected === 2018 && (
                        <>
                            <div>
                                <h4 className="font-semibold text-lg mt-2 mb-1">
                                    Farm Bill 2018
                                </h4>
                                <Image
                                    src="/images/hist2.png"
                                    alt="Farm Bill 2018"
                                    className="my-2 rounded shadow max-w-md"
                                    width={600}
                                    height={400}
                                />
                                Introduced various changes to agricultural laws
                                in the state that weakened protections against
                                environmental harms caused by large-scale
                                farming. It limited agricultural nuisance
                                lawsuits and eased agricultural runoff, reducing
                                accountability for pollution. This indirectly
                                accelerated soil degradation and water
                                contamination — two factors that contribute to
                                ghost forest emergence.
                                <br />
                                <span className="text-xs">
                                    Source: North Carolina Farm Bureau
                                </span>
                            </div>
                            <hr className="my-4" />
                            <div>
                                <h4 className="font-semibold text-lg mt-2 mb-1">
                                    Hurricane Florence
                                </h4>
                                <Image
                                    src="/images/hist3.png"
                                    alt="Hurricane Florence"
                                    className="my-2 rounded shadow max-w-md"
                                    width={600}
                                    height={400}
                                />
                                Although it made landfall as a Category 1 storm
                                on September 14, 2018, Hurricane Florence caused
                                extensive damage and prolonged flooding to
                                eastern North Carolina. The storm&apos;s impact
                                saturated soils, pushed saltwater further
                                inland, and uprooted trees across coastal
                                wetlands — accelerating salinization and die-off
                                patterns associated with ghost forests.
                                <br />
                                <span className="text-xs">
                                    Source: Travis Long/The News & Observer via
                                    AP
                                </span>
                            </div>
                        </>
                    )}
                    {selected === 2023 && (
                        <>
                            <div>
                                <h4 className="font-semibold text-lg mt-2 mb-1">
                                    NC Farm Act of 2023
                                </h4>
                                <Image
                                    src="/images/2023hist.png"
                                    alt="NC Farm Act of 2023"
                                    className="my-2 rounded shadow max-w-md"
                                    width={600}
                                    height={400}
                                />
                                In May, the waters of the United States under
                                the Clean Water Act were defined to only include
                                &quot;wetlands with a continuous surface
                                connection&quot; (Livingston). In June, the NC
                                Farm Act of 2023, Senate Bill 582, prevented
                                North Carolina from protecting its wetlands that
                                are not &quot;navigable waters of the United
                                States&quot; (Livingston).
                                <br />
                                <br />
                                The N.C. Department of Environmental Quality
                                estimates that nearly half of the wetlands in
                                North Carolina, as much as 2.5 million acres,
                                are no longer under the protection of the Clean
                                Water Act (Livingston). The devastating impacts
                                of flooding, without the natural protection from
                                wetlands, will be multiplied for communities of
                                color and lower wealth in rural North Carolina
                                (Livingston).
                            </div>
                            <hr className="my-4" />
                            <div>
                                <h4 className="font-semibold text-lg mt-2 mb-1">
                                    Sackett v. EPA
                                </h4>
                                <Image
                                    src="/images/hist4.png"
                                    alt="Sackett v. EPA"
                                    className="my-2 rounded shadow max-w-md"
                                    width={600}
                                    height={400}
                                />
                                In May 2023, the U.S. Supreme Court narrowed the
                                Clean Water Act&apos;s scope, ruling that only
                                wetlands or water bodies with a continuous
                                surface connection to &quot;traditional
                                interstate navigable waters&quot; qualify as
                                federally protected &quot;waters of the United
                                States&quot;. As a result, many North Carolina
                                wetlands — especially those buffering saltwater
                                intrusion — lost federal safeguards. This
                                regulatory gap increases the risk of unchecked
                                development and pollution, accelerating wetland
                                degradation and the spread of ghost forests
                                along the coast.
                                <br />
                                <span className="text-xs">
                                    Source: E&E News
                                </span>
                            </div>
                        </>
                    )}
                    {selected === 2025 && (
                        <>
                            <Image
                                src="/images/hist5.jpg"
                                alt="Research Funding Cut"
                                className="my-2 rounded shadow max-w-md"
                                width={600}
                                height={400}
                            />
                            For the 2026 fiscal year that starts July 1, 2025,
                            President Donald Trump cuts $18 billion of funding
                            at the National Institutes of Health (NIH) and more
                            than half at the National Science Foundation (NSF)
                            and NASA (Cho et al.). At the National Oceanic and
                            Atmospheric Administration (NOAA), it is cutting at
                            least $1.5 billion, with $1.31 billion of that
                            reduction coming from &quot;climate-dominated
                            research, data, and grant programs&quot; (Cho et
                            al.).
                            <br />
                            <span className="text-xs">Source: Science.org</span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
