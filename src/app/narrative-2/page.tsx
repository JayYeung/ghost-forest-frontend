"use client";
import Navigation from "@/components/Navigation";
import { useRef } from "react";
import ReadAloudControls from "@/components/ReadAloudControls";

export default function Narrative2() {
    const contentRef = useRef<HTMLDivElement>(null);
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col">
            <Navigation />
            <main className="flex-1 flex items-center justify-center px-4 py-8">
                <section className="w-full max-w-5xl bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-gray-100">
                    <div className="w-full flex justify-start mb-4">
                        <ReadAloudControls
                            getText={() => contentRef.current?.innerText || ""}
                        />
                    </div>
                    <h1
                        className="text-3xl font-bold mb-6 text-blue-900 text-center"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        Project Narrative 2
                    </h1>
                    <div
                        ref={contentRef}
                        className="space-y-8 text-gray-700"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        {/* Oral History */}
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-blue-800">
                                Oral History
                            </h2>
                            <p className="mb-4">We provide this section in order to illuminate the stories 
                                and acts of action to address ghost forest emergence in North Carolina. 
                                We aim to discuss ghost forest emergence and policymaking and its effects
                                on the larger scale, but include this section to highlight the actions made
                                by local communities and to share their stories and acknowledge their voices 
                                as a result of this phenomenon. To explore not only the stories and accounts
                                of those experiencing these ghost forests, but also to discuss what the community
                                is doing to address the topic. 
                            </p>
                            <div className="mb-4">
                              <div className="person flex gap-4 items-start">
                                <img
                                  src="human1.png"
                                  alt="Ryan Emanuel"
                                  className="w-36 h-auto rounded"
                                />
                                <div>
                                  <h2 className="text-lg font-semibold">Ryan Emanuel</h2>
                                  <p className="italic">
                                    Citizen of the Lumbee Tribe & Professor in the Department of Forestry and Environmental Resources at NC State
                                  </p>
                                  <p className="italic bg-gray-100 border-l-4 border-gray-500 p-3 my-2">
                                    “Even though we may not speak our ancestral languages, speaking for myself and a lot of other Lumbee people, 
                                    we draw comfort from the fact that we can go out to these places and look at the same landscapes and the same riverscapes 
                                    and know that our ancestors stood in the same spot and looked at the same views.”
                                  </p>
                                  <p>
                                    From his work with the Lumbee Tribe, Emanuel witnessed how climate change was not only altering the physical landscape, 
                                    but also affecting cultural ties rooted to the land. As ghost forests began to emerge across familiar territory, 
                                    the transformation extended beyond just biodiversity — it was also reshaping the tribe’s sense of place and belonging. 
                                    In response, Emanuel has worked to amplify Indigenous voices in climate conversations, recognizing that protecting the land 
                                    also means preserving the cultural identities woven into it. While developing solutions may be complex, centering the community’s 
                                    stories and knowledge offers an ethical, thoughtful, and respectful way to move forward and drive change.
                                  </p>
                                </div>
                              </div>
                            </div>
                             
                            
                        </div>
                        {/* Conclusion */}
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-blue-800">
                                Conclusion{" "}
                                <span className="font-normal text-base">
                                    (Hailey)
                                </span>
                            </h2>
                            <p className="mb-4">
                                Ultimately, our project aims to raise awareness
                                around the role of environmental policy in
                                shaping ghost forest emergence, as well as to
                                act as a call to action. By weaving together
                                ecological data with government legislation and
                                public narratives, we aim to not only visualize
                                where ghost forests are forming, but also to
                                offer users the tools to consider why. In this
                                way, we encourage users to think critically
                                about the political and economic powers that
                                drive climate change, using ghost forests in
                                North Carolina as one case study for a much
                                larger, ongoing issue.
                            </p>
                            <p className="mb-4">
                                While our project showcases policy decisions
                                that have negatively affected coastal
                                communities and underserved populations, it also
                                highlights key steps taken by both policymakers
                                and local communities, which aim to protect and
                                educate (Allen). By presenting a variety of
                                perspectives, our project aims to incorporate
                                both data feminist theory and ethical
                                visualization frameworks, offering a space for
                                reflection, action, and an understanding that
                                change is possible &mdash; even at the
                                individual level. In balancing awareness with
                                advocacy, we hope to promote dialogue, research,
                                and action.
                            </p>
                        </div>
                        {/* Works Cited */}
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-blue-800">
                                Works Cited
                            </h2>
                            <div
                                className="space-y-4"
                                style={{
                                    textIndent: "-2em",
                                    paddingLeft: "2em",
                                }}
                            >
                                <p>
                                    Allen, Jennifer. &quot;Ghost Forest
                                    Education Focal Point of Public Science
                                    Project.&quot; <em>Coastal Review</em>, 13
                                    July 2023,{" "}
                                    <a
                                        href="https://coastalreview.org/2023/07/ghost-forest-education-focal-point-of-public-science-project"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        coastalreview.org/2023/07/ghost-forest-education-focal-point-of-public-science-project
                                    </a>
                                    .
                                </p>
                                <p>
                                    Castagno, Peter. &quot;Not Paying Attention
                                    to History: Environmentalists Concerned over
                                    Loosened Wetlands Rules.&quot;{" "}
                                    <em>Port City Daily</em>, 2 Oct. 2023,{" "}
                                    <a
                                        href="https://portcitydaily.com/local-news/2023/10/02/not-paying-attention-to-history-environmentalists-concerned-over-loosened-wetlands-rules"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        portcitydaily.com/local-news/2023/10/02/not-paying-attention-to-history-environmentalists-concerned-over-loosened-wetlands-rules
                                    </a>
                                    .
                                </p>
                                <p>
                                    &quot;
                                    <span>&lsquo;Ghost Forests&rsquo;</span>:
                                    What They Are and Why They&rsquo;re Becoming
                                    More Common.&quot; <em>CBS News</em>, Aug.
                                    2017,{" "}
                                    <a
                                        href="https://www.cbsnews.com/news/ghost-forests-what-they-are-why-theyre-becoming-more-common"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        cbsnews.com/news/ghost-forests-what-they-are-why-theyre-becoming-more-common
                                    </a>
                                    .
                                </p>
                                <p>
                                    Collins, John, et al. &quot;Forest Wetland
                                    Loss on the Coastal Plain.&quot;{" "}
                                    <em>
                                        Albemarle-Pamlico National Estuary
                                        Partnership
                                    </em>
                                    , 16 June 2024,{" "}
                                    <a
                                        href="https://apnep.nc.gov/blog/2024/06/16/forest-wetland-loss-coastal-plain"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        apnep.nc.gov/blog/2024/06/16/forest-wetland-loss-coastal-plain
                                    </a>
                                    .
                                </p>
                                <p>
                                    Democracy North Carolina. &quot;Political
                                    Donations Decide NC&rsquo;s Environmental
                                    Future.&quot; <em>Democracy NC</em>, July
                                    1995,{" "}
                                    <a
                                        href="https://democracync.org/research/political-donations-decide-ncs-environmental-future"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        democracync.org/research/political-donations-decide-ncs-environmental-future
                                    </a>
                                    .
                                </p>
                                <p>
                                    &quot;Mapping and Plotting Tools.&quot;{" "}
                                    <em>GeoPandas Documentation</em>,{" "}
                                    <a
                                        href="https://geopandas.org/en/stable/docs/user_guide/mapping.html"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        geopandas.org/en/stable/docs/user_guide/mapping.html
                                    </a>
                                    .
                                </p>
                                <p>
                                    Google Earth Engine. Google,{" "}
                                    <a
                                        href="https://earthengine.google.com"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        earthengine.google.com
                                    </a>
                                    .
                                </p>
                                <p>
                                    Hansen, Matthew C., et al.
                                    &quot;High-Resolution Global Maps of
                                    21st-Century Forest Cover Change.&quot;{" "}
                                    <em>Science</em>, vol. 342, no. 6160, 15
                                    Nov. 2013, pp. 850–53. Google Earth Engine,{" "}
                                    <a
                                        href="https://glad.earthengine.app/view/global-forest-change"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        glad.earthengine.app/view/global-forest-change
                                    </a>
                                    .
                                </p>
                                <p>
                                    Natural Resources Defense Council.
                                    &quot;What You Need to Know about Sackett v.
                                    EPA.&quot; <em>NRDC</em>, 5 June 2023,{" "}
                                    <a
                                        href="https://www.nrdc.org/stories/what-you-need-know-about-sackett-v-epa"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        nrdc.org/stories/what-you-need-know-about-sackett-v-epa
                                    </a>
                                    .
                                </p>
                                <p>
                                    Peck, Kaitlin G. Measuring the Emergence of
                                    &quot;Ghost Forests&quot; from 1986 to 2016
                                    and Their Enviro-Cultural Impacts on the
                                    Communities of Down East, North Carolina,
                                    USA. Senior Honors Thesis, University of
                                    North Carolina at Chapel Hill, Apr. 2023.
                                </p>
                                <p>
                                    QGIS. QGIS Project,{" "}
                                    <a
                                        href="https://qgis.org"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        qgis.org
                                    </a>
                                    .
                                </p>
                                <p>
                                    Talton, Trista. &quot;Analysis: Farm Act
                                    Strips Wetland Safeguards, Mitigation.&quot;{" "}
                                    <em>Coastal Review</em>, 20 July 2023,{" "}
                                    <a
                                        href="https://coastalreview.org/2023/07/analysis-farm-act-strips-wetland-safeguards-mitigation"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        coastalreview.org/2023/07/analysis-farm-act-strips-wetland-safeguards-mitigation
                                    </a>
                                    .
                                </p>
                                <p>
                                    Temple, James. &quot;The Trump
                                    Administration Has Shut down More than 100
                                    Climate Studies.&quot;{" "}
                                    <em>MIT Technology Review</em>, 2 June 2025,{" "}
                                    <a
                                        href="https://www.technologyreview.com/2025/06/02/1117653/the-trump-administration-has-shut-down-more-than-100-climate-studies"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        technologyreview.com/2025/06/02/1117653/the-trump-administration-has-shut-down-more-than-100-climate-studies
                                    </a>
                                    .
                                </p>
                                <p>
                                    United States Environmental Protection
                                    Agency. &quot;History of the Clean Water
                                    Act.&quot; <em>U.S. EPA</em>, 2023,{" "}
                                    <a
                                        href="https://www.epa.gov/laws-regulations/history-clean-water-act"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        epa.gov/laws-regulations/history-clean-water-act
                                    </a>
                                    .
                                </p>
                                <p>
                                    Washington University in St. Louis.
                                    &quot;Explore Mapping LGBTQ St. Louis.&quot;{" "}
                                    <em>ArcGIS StoryMaps</em>, 23 June 2023,{" "}
                                    <a
                                        href="https://storymaps.arcgis.com/stories/9675a82d3d564c80b950361e709dff5e"
                                        className="text-blue-700 underline"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        storymaps.arcgis.com/stories/9675a82d3d564c80b950361e709dff5e
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
