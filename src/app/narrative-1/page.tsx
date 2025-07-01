"use client";
import Navigation from "@/components/Navigation";
import { useRef } from "react";
import ReadAloudControls from "@/components/ReadAloudControls";
import NDVIMap from "@/components/NDVIMap";
import Link from "next/link";
import Image from "next/image";

export default function Narrative1() {
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
                        Our Research
                    </h1>
                    <div
                        ref={contentRef}
                        className="space-y-8 text-gray-700"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        {/* Topic and Research Question */}
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-blue-800">
                                Topic and Research Question{" "}
                                <span className="font-normal text-base">
                                    (Hailey & Daphne)
                                </span>
                            </h2>
                            <p className="mb-4">
                                Since April 2025, President Donald Trump has
                                terminated over 1,600 National Science
                                Foundation grants, revoking over $1.5 billion in
                                funding from research projects, many of which
                                relate to climate change (Temple). This action
                                serves as one example of how the current
                                political administration has actively undermined
                                the importance of climate change. By pulling
                                federal funding from scientific research, the
                                administration is silencing environmental
                                research and reducing its visibility to the
                                public. One of the clearest indicators of
                                climate change is rising sea levels, which gives
                                cause to a plethora of environmental
                                consequences — among them, the emergence of
                                ghost forests. Ghost forests are dying coastal
                                forests caused by saltwater intrusion linked to
                                sea level rise, and they provide a clear,
                                haunting visual for the impact of rising ocean
                                levels (CBS News). But beyond environmental
                                impact, ghost forests also affect the people and
                                communities that live near them. In places like
                                North Carolina, these changes are especially
                                visible — yet both policy and public awareness
                                have fallen short in addressing them (Allen).
                                Therefore, our project aims to address the
                                influence of environmental policymaking on the
                                emergence of ghost forests in North Carolina.
                            </p>
                            <p className="mb-4">
                                Our topic is rooted in the urgency of climate
                                change and the increasing politicization of
                                science. The current political climate has
                                downplayed the impact and severity of
                                environmental issues, which has reduced the
                                public pressure for advocacy and systemic
                                reform. Our project aims to counteract this by
                                providing digestible visualizations of ghost
                                forest emergence and plain language summaries of
                                environmental policies in order to address a
                                general audience. Additionally, we chose to
                                focus our project on ghost forests as they are
                                not widely known by the public, yet they provide
                                a striking visual image of climate
                                transformation: lush forests reduced to skeletal
                                stumps emerging from floodwater. These
                                landscapes are not only an effect of rising
                                seas, but also closely linked to government
                                policy, land use, and regulation. Therefore,
                                this topic fits well within the framework of
                                Digital Humanities, focusing on the interaction
                                between policy and the environment. We were
                                additionally inspired by Mapping LGBTQ St.
                                Louis, which acts as an example of how spatial
                                visualization can surface often overlooked
                                marginalized histories (Washington University in
                                St. Louis). Similarly, we use mapping to
                                visualize the relationship between ecological
                                change and human impact, creating a space for
                                both reflection and action.
                            </p>
                            <p className="mb-4">
                                From this topic, we propose the following
                                research question:{" "}
                                <strong>
                                    &quot;What is the relationship between
                                    environmental policymaking and the emergence
                                    of ghost forests in North Carolina?&quot;
                                </strong>{" "}
                                This question invites us to look into different
                                approaches for mitigating&mdash;or inadvertently
                                forming&mdash;ghost forests in North Carolina.
                                We recognize the limitations of our project,
                                especially given the scope of our data and the
                                fact that ghost forest formation is heavily
                                influenced by extreme weather conditions. While
                                we do not aim to prove causation, we do hope to
                                highlight meaningful correlations between
                                different policy decisions and ghost forest
                                emergence over time. This allows for us to
                                compare differences in proposed policy,
                                enforcement, and implementation, and we hope to
                                identify patterns and measure the effect of
                                policy decisions on shaping ghost forest
                                formation. Additionally, through our research on
                                the topic, we notice that many calls to action
                                have been made, but there is a lack of coverage
                                on policies that have been implemented and
                                contribute positive change. Therefore, we hope
                                to not only map the creation of ghost forests
                                and repeat these calls for action, but we also
                                hope to highlight ongoing efforts &mdash; such
                                as North Carolina State University students
                                developing and presenting ghost forest lesson
                                plans in local schools &mdash; and offer a story
                                that balances urgency with hope (Collins et
                                al.).
                            </p>
                        </div>
                        {/* Historical Context */}
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-blue-800">
                                Historical Context{" "}
                                <span className="font-normal text-base">
                                    (Brayden & Arlen)
                                </span>
                            </h2>
                            <div
                                className="relative w-full"
                                style={{ paddingTop: "63%" }}
                            >
                                <iframe
                                    src="graph.html"
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{ border: "none" }}
                                    title="NC Environmental Spending and Forest Loss Graph"
                                    scrolling="no"
                                ></iframe>
                            </div>
                            <p className="mb-4 text-[14px] text-gray-500 text-center">
                                This interactive graph compares North
                                Carolina&apos;s environmental spending with
                                forest loss from 2003 to 2023. The blue line
                                represents annual spending on environmental
                                programs, which peaked around 2013 before
                                dropping sharply. Meanwhile, the green line
                                shows forest loss steadily rising, especially
                                after 2015. Key policy changes—such as the 2011
                                Regulatory Reform Act, the 2013 Stormwater Rule
                                Repeal, and the 2023 NC Farm Act— reduced
                                protections for wetlands and forests, making
                                land development easier. Natural disasters and
                                court decisions like Sackett v. EPA also
                                contributed to accelerating forest loss. The
                                graph highlights how weakened policies and
                                decreased funding are closely linked to
                                increased deforestation in North Carolina.
                            </p>
                            <p className="mb-4">
                                The emergence of ghost forests along North
                                Carolina&apos;s coast isn&apos;t just the result
                                of sea-level rise or natural climate shifts, but
                                it is the result of decades of political and
                                economic decisions that prioritized short-term
                                developments over long-term ecological health.
                                Starting from the early to mid-20th century, a
                                number of state-funded projects and policies
                                transformed multitudes of acres of wetlands into
                                farmland and real estate, mostly to benefit
                                industrial-scale agriculture and land
                                development. These modifications completely
                                changed the region&apos;s ecology, making it
                                more susceptible to environmentally harmful
                                processes, such as salinization and flooding.
                            </p>
                            <p className="mb-4">
                                In the 1980s and 1990s, development policies in
                                coastal forested areas began to gain ground,
                                with agencies like the U.S. Environmental
                                Protection Agency (EPA) implementing stronger
                                federal protections under the Clean Water Act
                                (U.S. EPA). However, since then, these
                                protections were weakened by various court
                                rulings and state-level policy changes. For
                                example, the Sackett v. EPA Supreme Court
                                decision in 2023 narrowed the boundaries of
                                federally protected wetlands and allowed
                                landowners and developers to more easily avoid
                                federal regulations and oversight (Natural
                                Resources Defense Council). Almost immediately
                                after, the NC Farm Act of 2023 redefined how
                                state wetlands were protected, dropping
                                safeguards for ecological zones that were not
                                connected to federally recognized waters
                                (Talton). As a result, many isolated or seasonal
                                environments, which were most vulnerable to
                                salinization, were swept from protection.
                            </p>
                            <p className="mb-4">
                                Most importantly, these legal and legislative
                                changes did not occur in a vacuum. They were
                                heavily influenced by private lobbying efforts
                                from powerful interests in agriculture,
                                construction, and real estate. Groups like the
                                North Carolina Home Builders Association and
                                large-scale farming conglomerates have pushed
                                for fewer environmental restrictions for many
                                years, arguing that wetland regulations were
                                stifling and that they restricted economic
                                development (Castagno). Their influence
                                stretches to environmental permit approvals, law
                                reforms, and political donations, much of which
                                pass under the radar but are deeply impactful.
                            </p>
                            <p className="mb-4">
                                These ghost forests are an accumulation of
                                consequences of the policies that consistently
                                favored profit over ecological strength and
                                marginalized the voices of communities most
                                affected by land loss.
                            </p>

                            {/* Timeline and Community Impact Section */}
                            <div className="mt-10">
                                <h3 className="text-xl font-bold mb-4 text-blue-700">
                                    Which communities are most affected, and how
                                    are they represented in public narratives?
                                </h3>
                                <p className="mb-6">
                                    The communities most affected by ghost
                                    forest formation in North Carolina are
                                    predominantly rural, lower-wealth, and
                                    communities of color along the coast. These
                                    groups are often underrepresented in public
                                    narratives, which tend to focus on
                                    environmental impacts in general terms
                                    rather than highlighting the
                                    disproportionate burdens faced by
                                    marginalized populations. In recent years,
                                    reporting and advocacy have begun to center
                                    these voices more, but policy decisions and
                                    media coverage still frequently overlook the
                                    lived experiences and cultural losses of
                                    Indigenous, Black, and low-income residents.
                                    By foregrounding these communities in our
                                    analysis and visualizations, we aim to
                                    challenge the dominant narratives and
                                    advocate for more equitable environmental
                                    policy.
                                </p>
                                <p className="mb-6">
                                    Click through the timeline to explore key
                                    environmental policies and extreme weather
                                    events in North Carolina from the 1970s to
                                    2024. While not comprehensive, this timeline
                                    highlights moments that have significantly
                                    shaped the conditions for ghost forest
                                    formation. By including events dating as far
                                    back as the 1970s, we aim to provide
                                    historical context that helps explain the
                                    environmental and policy landscape leading
                                    up to our primary period of focus: 2000 -
                                    2024.
                                </p>
                                <div className="space-y-8">
                                    {/* 1973: The Hardison Amendment */}
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            1973: The Hardison Amendment
                                        </h4>
                                        <p>
                                            First enacted in 1973, the Hardison
                                            amendments are a series of laws that
                                            restrict state agencies from
                                            establishing environmental
                                            regulations stricter than federal
                                            regulations (Wagner). It disabled
                                            North Carolina from independently
                                            setting stricter pollution standards
                                            or environmental protections than
                                            those mandated by the federal
                                            government (Wagner).
                                        </p>
                                    </div>
                                    {/* 1994: Lobbying Contributions */}
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            1994
                                        </h4>
                                        <p>
                                            Democracy NC reports that in 1994,
                                            anti-environmental interests
                                            contributed $1.3 million to state
                                            legislators, accounting for 40% of
                                            their identifiable, non-party
                                            campaign contributions. These
                                            substantial donations have enabled
                                            lobbyists to draft and promote
                                            legislation that weakens
                                            environmental protections, such as
                                            bills making it more difficult for
                                            state agencies to issue rules on
                                            housing density in watersheds
                                            (Democracy North Carolina).
                                        </p>
                                    </div>
                                    {/* 1995: Repeal of the Hardison Amendment */}
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            1995: Repeal of the Hardison
                                            Amendment
                                        </h4>
                                        <p>
                                            The democratically controlled
                                            legislatures repealed the Hardison
                                            amendments, allowing North Carolina
                                            to enact more stringent regulations
                                            than the federal government&apos;s
                                            (Sorg).
                                        </p>
                                    </div>
                                    {/* 2011: Return of the Republican Party */}
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            2011: Return of the Republican Party
                                        </h4>
                                        <p>
                                            With the return of a Republican
                                            majority to both legislative
                                            chambers for the first time since
                                            1870, the legislature reinstated the
                                            Hardison amendments (Wagner).
                                        </p>
                                    </div>
                                    {/* 2014: Stricter Environmental Rules under Review */}
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            2014: Stricter Environmental Rules
                                            under Review
                                        </h4>
                                        <p>
                                            The legislature expanded the
                                            Hardison amendments to enforce all
                                            rules stricter than the federal
                                            minimum standards to automatically
                                            fall under legislative review
                                            (Sorg).
                                        </p>
                                    </div>
                                    {/* 2015: House Bill 760 */}
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            2015: House Bill 760
                                        </h4>
                                        <Image
                                            src="/images/hist1.png"
                                            alt="Regulatory Reform Act of 2015"
                                            className="my-2 rounded shadow max-w-md"
                                            width={600}
                                            height={400}
                                        />
                                        <p>
                                            Also known as the &quot;Regulatory
                                            Reform Act of 2015,&quot; HB760
                                            aimed to provide regulatory relief
                                            to the state&apos;s citizens by
                                            implementing various administrative
                                            reforms, including renewable energy,
                                            environmental regulations, and local
                                            government operations. By loosening
                                            oversight on land use and
                                            development, the bill made coastal
                                            ecosystems more vulnerable to
                                            salinization and flooding,
                                            accelerating conditions that
                                            contribute to ghost forest formation
                                            in North Carolina.
                                            <br />
                                            <span className="text-xs">
                                                Source: landsearch
                                            </span>
                                        </p>
                                    </div>
                                    {/* 2018: Farm Bill */}
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            2018: Farm Bill
                                        </h4>
                                        <Image
                                            src="/images/hist2.png"
                                            alt="Farm Bill 2018"
                                            className="my-2 rounded shadow max-w-md"
                                            width={600}
                                            height={400}
                                        />
                                        <p>
                                            Introduced various changes to
                                            agricultural laws in the state that
                                            weakened protections against
                                            environmental harms caused by
                                            large-scale farming. It limited
                                            agricultural nuisance lawsuits and
                                            eased agricultural runoff, reducing
                                            accountability for pollution. This
                                            indirectly accelerated soil
                                            degradation and water contamination
                                            — two factors that contribute to
                                            ghost forest emergence.
                                            <br />
                                            <span className="text-xs">
                                                Source: North Carolina Farm
                                                Bureau
                                            </span>
                                        </p>
                                    </div>
                                    {/* 2018: Hurricane Florence */}
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            2018: Hurricane Florence
                                        </h4>
                                        <Image
                                            src="/images/hist3.png"
                                            alt="Hurricane Florence"
                                            className="my-2 rounded shadow max-w-md"
                                            width={600}
                                            height={400}
                                        />
                                        <p>
                                            Although it made landfall as a
                                            Category 1 storm on September 14,
                                            2018, Hurricane Florence caused
                                            extensive damage and prolonged
                                            flooding to eastern North Carolina.
                                            The storm&apos;s impact saturated
                                            soils, pushed saltwater further
                                            inland, and uprooted trees across
                                            coastal wetlands — accelerating
                                            salinization and die-off patterns
                                            associated with ghost forests.
                                            <br />
                                            <span className="text-xs">
                                                Source: Travis Long/The News
                                                &amp; Observer via AP
                                            </span>
                                        </p>
                                    </div>
                                    {/* Stormwater Rule Rollback (no year given) */}
                                    {/* <div>
                                        <h4 className="font-semibold text-lg">
                                            Stormwater Rule Rollback
                                        </h4>
                                        <p>[Description forthcoming]</p>
                                    </div> */}
                                    {/* 2023: The North Carolina Farm Act of 2023 */}
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            2023: The North Carolina Farm Act of
                                            2023
                                        </h4>
                                        <Image
                                            src="/images/2023hist.png"
                                            alt="NC Farm Act of 2023"
                                            className="my-2 rounded shadow max-w-md"
                                            width={600}
                                            height={400}
                                        />
                                        <p>
                                            In May, the waters of the United
                                            States under the Clean Water Act
                                            were defined to only include
                                            &quot;wetlands with a continuous
                                            surface connection&quot;
                                            (Livingston). In June, the NC Farm
                                            Act of 2023, Senate Bill 582,
                                            prevented North Carolina from
                                            protecting its wetlands that are not
                                            &quot;navigable waters of the United
                                            States&quot; (Livingston).
                                        </p>
                                        <p>
                                            The N.C. Department of Environmental
                                            Quality estimates that nearly half
                                            of the wetlands in North Carolina,
                                            as much as 2.5 million acres, are no
                                            longer under the protection of the
                                            Clean Water Act (Livingston). The
                                            devastating impacts of flooding,
                                            without the natural protection from
                                            wetlands, will be multiplied for
                                            communities of color and lower
                                            wealth in rural North Carolina
                                            (Livingston).
                                        </p>
                                    </div>
                                    {/* 2023: Sackett v. EPA + Wetland Scope Narrowed */}
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            2023: Sackett v. EPA + Wetland Scope
                                            Narrowed
                                        </h4>
                                        <Image
                                            src="/images/hist4.png"
                                            alt="Sackett v. EPA"
                                            className="my-2 rounded shadow max-w-md"
                                            width={600}
                                            height={400}
                                        />
                                        <p>
                                            In May 2023, the U.S. Supreme Court
                                            narrowed the Clean Water Act&apos;s
                                            scope, ruling that only wetlands or
                                            water bodies with a continuous
                                            surface connection to
                                            &quot;traditional interstate
                                            navigable waters&quot; qualify as
                                            federally protected &quot;waters of
                                            the United States&quot;. As a
                                            result, many North Carolina wetlands
                                            — especially those buffering
                                            saltwater intrusion — lost federal
                                            safeguards. This regulatory gap
                                            increases the risk of unchecked
                                            development and pollution,
                                            accelerating wetland degradation and
                                            the spread of ghost forests along
                                            the coast.
                                            <br />
                                            <span className="text-xs">
                                                Source: E&amp;E News
                                            </span>
                                        </p>
                                    </div>
                                    {/* 2025: Research Funding Cut */}
                                    <div>
                                        <h4 className="font-semibold text-lg">
                                            2025: Research Funding Cut
                                        </h4>
                                        <Image
                                            src="/images/hist5.jpg"
                                            alt="Research Funding Cut"
                                            className="my-2 rounded shadow max-w-md"
                                            width={600}
                                            height={400}
                                        />
                                        <p>
                                            For the 2026 fiscal year that starts
                                            July 1, 2025, President Donald Trump
                                            cuts $18 billion of funding at the
                                            National Institutes of Health (NIH)
                                            and more than half at the National
                                            Science Foundation (NSF) and NASA
                                            (Cho et al.). At the National
                                            Oceanic and Atmospheric
                                            Administration (NOAA), it is cutting
                                            at least $1.5 billion, with $1.31
                                            billion of that reduction coming
                                            from &quot;climate-dominated
                                            research, data, and grant
                                            programs&quot; (Cho et al.).
                                            <br />
                                            <span className="text-xs">
                                                Source: Science.org
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-8 text-sm text-gray-600">
                                    <h5 className="font-semibold mb-2">
                                        Sources
                                    </h5>
                                    <ul className="list-disc pl-6 space-y-1">
                                        <li>
                                            Cho, Adrian, et al.
                                            &quot;Trump&apos;s Proposed Budget
                                            Would Mean &apos;Disastrous&apos;
                                            Cuts to Science.&quot;{" "}
                                            <em>Science</em>, 2 May 2025,{" "}
                                            <a
                                                href="https://www.science.org/content/article/trump-s-proposed-budget-would-mean-disastrous-cuts-science"
                                                className="text-blue-700 underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                science.org/content/article/trump-s-proposed-budget-would-mean-disastrous-cuts-science
                                            </a>
                                            .
                                        </li>
                                        <li>
                                            Livingston, Walker. &quot;Numerous
                                            N.C. Wetlands Lose Protections Under
                                            Farm Act and SCOTUS Case.&quot;{" "}
                                            <em>The Daily Tar Heel</em>, 5 Sept.
                                            2023,{" "}
                                            <a
                                                href="https://www.dailytarheel.com/article/2023/09/city-north-carolina-wetlands-farm-bill-environmental-impacts"
                                                className="text-blue-700 underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                dailytarheel.com/article/2023/09/city-north-carolina-wetlands-farm-bill-environmental-impacts
                                            </a>
                                            .
                                        </li>
                                        <li>
                                            Sorg, Lisa. &quot;Q&amp;A:
                                            Environmental Attorney Derb Carter
                                            on DEQ&apos;s Power to Regulate GenX
                                            (or Not); Lawmakers to Hold Hearing
                                            Wednesday.&quot;{" "}
                                            <em>NC Newsline</em>, 21 Aug. 2017,{" "}
                                            <a
                                                href="https://ncnewsline.com/briefs/q-lawmakers-hold-hearing-wednesday"
                                                className="text-blue-700 underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                ncnewsline.com/briefs/q-lawmakers-hold-hearing-wednesday
                                            </a>
                                            .
                                        </li>
                                        <li>
                                            Wagner, Adam. &quot;Year After Year,
                                            NC Legislators Use State Budget to
                                            Weaken Environmental
                                            Protections.&quot;{" "}
                                            <em>Raleigh News &amp; Observer</em>
                                            , 27 Apr. 2025,{" "}
                                            <a
                                                href="https://www.newsobserver.com/news/state/north-carolina/article288496757.html"
                                                className="text-blue-700 underline"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                newsobserver.com/news/state/north-carolina/article288496757.html
                                            </a>
                                            .
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* Thesis */}
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-blue-800">
                                Thesis{" "}
                                <span className="font-normal text-base">
                                    (Hailey, Brayden, Arlen, Daphne, Jay)
                                </span>
                            </h2>
                            <p className="mb-4">
                                Rooted in the principles of data feminism and
                                following an ethical visualization framework,
                                our project argues that the emergence of ghost
                                forests in North Carolina is not solely a
                                byproduct of climate change, but also a
                                consequence of deeper systemic failures, such as
                                political lobbying, deregulation, and
                                development policies (Rezai; Hepworth and
                                Church). By mapping forest loss and identifying
                                patterns of environmental spending, we reveal
                                how environmental policymaking accelerates ghost
                                forest emergence in North Carolina and
                                disproportionately impacts coastal communities.
                                Through this lens, we also center the lived
                                experiences of affected communities by
                                highlighting oral histories, showing how ghost
                                forests mirror broader patterns of environmental
                                degradation and marginalization — such as the
                                erasure of Indigenous cultural landscapes, and
                                the emotional and cultural displacement faced by
                                the elderly. While we do not claim causation,
                                our project invites users to consider how
                                spatial data, numerical analysis, and local
                                knowledge can reveal the impact of policy
                                decisions on ghost forest formation — and how
                                spotlighting environmental accountability can
                                inspire further research, activism, and action.
                            </p>
                        </div>
                        {/* Methodology and Tools */}
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-blue-800">
                                Methodology and Tools{" "}
                                <span className="font-normal text-base">
                                    (Jay, Arlen, Daphne)
                                </span>
                            </h2>
                            <div
                                className="relative w-full"
                                style={{ paddingTop: "75%" }}
                            >
                                <iframe
                                    src="pop_in_age_group.html"
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{ border: "none" }}
                                    title="Population by Age Group in North Carolina"
                                    scrolling="no"
                                ></iframe>
                            </div>
                            <p className="mb-4 text-[14px] text-center text-gray-500">
                                This visualization shows the demographic
                                distribution of North Carolina&apos;s population
                                by age groups over time. Understanding the
                                demographic context is crucial for analyzing how
                                different age groups may be affected by
                                environmental changes and policy decisions
                                related to ghost forest formation.
                            </p>
                            <p className="mb-4">
                                To produce our visualizations, our project draws
                                from an interdisciplinary digital humanities
                                methodology that combines environmental data
                                analysis and critical humanistic inquiry. The
                                core of our approach is to realize that data is
                                not neutral, which reflects on political,
                                economic, and social value. The view is shaped
                                by a theoretical framework from critical data
                                studies. In Hepworth and Church&apos;s article,
                                they mentioned how data/tools reveal the
                                structural inequality. And this view guides us
                                to reveal the real fact of ghost forests, and to
                                think critically about the reasons behind ghost
                                forests.
                            </p>
                            <p className="mb-4">
                                To contextualize our analysis of policy-driven
                                environmental change, we also examine how
                                corporate lobbying has influenced environmental
                                legislation in North Carolina. Democracy NC
                                reports that in 1994, anti-environmental
                                interests contributed $1.3 million to state
                                legislators, accounting for 40% of their
                                identifiable, non-party campaign contributions.
                                These substantial donations have enabled
                                lobbyists to draft and promote legislation that
                                weakens environmental protections, such as bills
                                making it more difficult for state agencies to
                                issue rules on housing density in watersheds
                                (Democracy North Carolina). This underscores the
                                significant role of political and corporate
                                interests in shaping policies that affect
                                environmental outcomes. To change this
                                situation, we try to challenge the zoning laws
                                and the environmental regulation department to
                                reveal how certain groups benefit from
                                development policy while other groups bear the
                                costs.
                            </p>
                            <p className="mb-4">
                                Methodologically, our project combines critical
                                data sets with tools like Google Earth Engine,
                                QGIS, Pandas, and GeoPandas to process, analyze,
                                and visualize ghost forest data in ways that
                                reveal environmental inequality and ensure the
                                project remains accessible and reproducible. We
                                use satellite imagery from Hansen et al.&apos;s
                                Global Forest Change dataset to track the
                                expansion of ghost forests, particularly in
                                vulnerable areas of the Albemarle-Pamlico region
                                (Hansen et al.). These visualized datasets allow
                                us to map forest loss in connection with
                                specific policy changes over time. For
                                negligence, we are collecting land use permits
                                and analyzing key legislation such as the NC
                                Farm Act (SL 2023-63) and Sackett v. EPA to
                                trace how deregulation has enabled development
                                in wetland regions (Natural Resources Defense
                                Council). We also analyze public
                                narratives—media reports, government statements,
                                and advocacy materials—to investigate how the
                                ghost forest crisis is framed and which
                                perspectives are left out.
                            </p>
                            <section className="w-full max-w-6xl mx-auto mb-16">
                                <div className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 flex flex-col items-center border border-gray-100">
                                    <div className="w-full flex justify-start mb-4">
                                        <ReadAloudControls
                                            getText={() =>
                                                contentRef.current?.innerText ||
                                                ""
                                            }
                                        />
                                    </div>
                                    <h2
                                        className="text-2xl font-bold mb-6 text-blue-900 text-center w-full"
                                        style={{
                                            fontFamily:
                                                "var(--font-geist-sans)",
                                        }}
                                    >
                                        Forest Loss in North Carolina from 2001
                                        to 2024
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
                                    <p className="mt-3 text-center text-[14px] text-gray-500">
                                        This map focuses on the eastern coast of
                                        North Carolina and visualizes the forest
                                        loss from 2001 to 2024. It utilizes NDVI
                                        (Normalized Difference Vegetation Index)
                                        satellite imagery queried from Google
                                        Earth Engine to highlight areas of
                                        significant vegetation change,
                                        particularly the emergence of ghost
                                        forests.
                                    </p>
                                    <p className="text-center mt-3 text-[14px] text-gray-500">
                                        The colors in this legend were chosen
                                        for high contrast and accessibility,
                                        making it easier for visually impaired
                                        users to distinguish between categories.
                                        The interactive feature allows users to
                                        explore the map in detail, zooming in on
                                        specific areas to analyze the extent of
                                        forest loss and ghost forest emergence
                                        over time.
                                    </p>
                                    <p className="text-center mt-3 text-[14px] text-gray-500">
                                        <strong>Source:</strong> Hansen, Matthew
                                        C., et al. &quot;Global Forest Change
                                        v1.12 (2000–2024).&quot; Google Earth
                                        Engine Data Catalog, Google, 2024,{" "}
                                        <a
                                            href="https://developers.google.com/earth-engine/datasets/catalog/UMD_hansen_global_forest_change_2024_v1_12"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-700 underline"
                                        >
                                            developers.google.com/earth-engine/datasets/catalog/UMD_hansen_global_forest_change_2024_v1_12
                                        </a>
                                    </p>
                                </div>
                            </section>
                            <p className="mb-4">
                                Alongside the NDVI-based analysis used in this
                                study, future work could also incorporate
                                broader datasets available through platforms
                                like Google Earth Engine. Building on methods
                                demonstrated in Peck&apos;s thesis on ghost
                                forests in Down East, North Carolina, combining
                                local NDVI analysis with large-scale satellite
                                data can offer deeper context for understanding
                                long-term patterns of forest loss (Peck).
                                Integrating these global datasets with
                                site-specific measurements would allow for
                                comparison between changes observed in North
                                Carolina&apos;s coastal forests and broader
                                regional or global trends. It could also provide
                                more insight into how human-driven factors—such
                                as drainage systems and land-use
                                decisions—interact with natural pressures like
                                sea-level rise and saltwater intrusion.
                                Together, these combined approaches would
                                strengthen understanding of how ghost forests
                                are forming and expanding across North
                                Carolina&apos;s vulnerable coastal landscapes.
                            </p>
                            <p className="mb-4">
                                The methodology and theoretical framework we
                                focus on helps us shape a complete and critical
                                ghost forest framework that exposes the
                                inequality behind the environmental issue.
                            </p>
                            <p className="mb-4">
                                After extracting data from a database, the next
                                steps are data cleaning and processing. To
                                achieve that, we will use Google Earth Engine, a
                                powerful API in Python to parse geospatial data
                                and conduct analysis. Since our webpage will be
                                hosted on Google Sites, an advantage of using
                                Google Earth Engine as it can be easily
                                incorporated (Google Earth Engine). We will use
                                Pandas and GeoPandas to merge satellite data
                                from multiple sources, like the NOAA
                                sea-level-trends and state forestry data. Pandas
                                and GeoPandas allow us to perform aggregate
                                functions efficiently, even on large datasets.
                                Since Berkeley recently stopped giving free
                                access to ArcGIS in 2024, we will use a similar
                                open-source visualization tool called QGIS
                                (QGIS). QGIS allows us to layer various sources
                                and attributes on one interactive map, so that
                                the user can filter by different attributes like
                                coastal zones or canopy loss. Another reason for
                                selecting QGIS is that we want our research to
                                be accessible and reproducible; it can be hard
                                for others to reproduce our work if we use
                                ArcGIS, since the license can cost up to
                                thousands of dollars. One feature of QGIS that
                                can be taken advantage of is the alt_desc
                                attribute. When exported using the QGIS plugin,
                                map pop-ups can be read directly from this
                                field, giving screen-reader users more spatial
                                insight. In DH, specific design choices for
                                color are crucial, especially in map
                                visualizations. We will take advantage of online
                                color palette generators such as ColorBrewer to
                                meet necessary contrast ratios that are color
                                blind safe. GeoPandas also allows us to create
                                map visualizations with different spatial
                                textures (in addition to color) (GeoPandas).
                                We&apos;ll also store any of our intermediate
                                outputs as GeoPackage layers or in GeoPandas
                                Dataframes on a public GitHub Repository so that
                                our work can be reproduced, modified, and rerun
                                by future researchers when tools evolve.
                            </p>
                            <p className="mb-4">
                                Lastly, to strengthen the oral history with
                                factual statistics, we created an interactive
                                visualization of the total population
                                composition by age groups across coastal
                                counties in North Carolina from 2001 to 2024. We
                                retrieved and cleaned the public dataset of
                                &quot;Population by Age, Race, Sex&quot;
                                produced by the State Demographer of North
                                Carolina (North Carolina Office of State Budget
                                and Management, State Demographer). Data
                                cleaning is performed in three steps. Firstly,
                                we filtered the data to only include years
                                between 2001 and 2024. The time frame is the
                                same as the one in our map about forest loss in
                                eastern North Carolina to effectively reflect
                                how the recent rise of ghost forests has
                                impacted certain communities in North Carolina.
                                Secondly, we selected only the counties in the
                                outer coastal plain of North Carolina: Bertie,
                                Beaufort, Brunswick, Camden, Carteret, Chowan,
                                Craven, Currituck, Dare, Gates, Hertford, Hyde,
                                New Hanover, Onslow, Pamlico, Pasquotank,
                                Pender, Perquimans, Tyrrell, and Washington
                                (North Carolina Office of State Archaeology).
                                This step allows us to effectively visualize the
                                population composition over time as a pie chart
                                in the region where the forest loss is most
                                severe. Thirdly, after examining the labels in
                                the &quot;race&quot; and &quot;age groups&quot;
                                categories, we chose to visualize the population
                                composition by age groups as it pertains to the
                                framework of ethical data visualization by
                                containing all possible ages in the dataset. An
                                unethical visualization would otherwise be
                                created as the original dataset only includes a
                                &quot;White&quot; and &quot;Other&quot; label
                                for the racial composition in North Carolina,
                                despite the region&apos;s significant number of
                                African American and Hispanic residents (Data
                                USA). The interactive pie chart is created using
                                the Graph_objects module from the Plotly
                                package. We additionally combined the unevenly
                                defined, small age groups (each age group only
                                has one or five years) into larger, evenly
                                binned age groups (each age group has a ten-year
                                range) that span across 0 years old to 80 and
                                above, simplifying the interpretability of the
                                interactive pie chart. By automatically sorting
                                the nine pie chart slices from the largest
                                composition to the smallest composition, the
                                audience can see a clear trend in the shifts in
                                age groups over time in relation to the rise of
                                ghost forests.
                            </p>
                            <p className="mb-4">
                                Our methodology directly supports the
                                project&apos;s central thesis: that the rise of
                                ghost forests in North Carolina is not simply an
                                ecological consequence, but is shaped by
                                political and corporate corruption that drives
                                environmental degradation and disproportionately
                                impacts marginalized communities. By combining
                                critical data studies with tools like QGIS,
                                Python, and satellite imagery, we aim to make
                                visible the corrupt policy decisions and power
                                structures that have allowed wetland destruction
                                to accelerate. Analyzing political events, and
                                key legislation such as the Sackett v. EPA helps
                                us trace how deregulation, lobbying, and
                                development priorities contribute to forest
                                loss. At the same time, our examination of
                                public narratives reveals how these processes
                                are hidden from public view and whose voices are
                                left out. This multi-method approach allows us
                                to argue that ghost forests are not inevitable
                                results of climate change, but outcomes of
                                political corruption and
                                neglect&mdash;reinforcing our central claim
                                about environmental injustice.
                            </p>
                        </div>
                    </div>
                    {/* Button to navigate to narrative-2 */}
                    <div className="w-full flex justify-center mt-12">
                        <Link href="/narrative-2">
                            <button
                                className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-200"
                                type="button"
                            >
                                Next: Oral History & Conclusion &rarr;
                            </button>
                        </Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
