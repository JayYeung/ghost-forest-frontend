"use client";
import Navigation from "@/components/Navigation";
import { useRef } from "react";
import ReadAloudControls from "@/components/ReadAloudControls";

export default function AnnotatedBibliography() {
    const contentRef = useRef<HTMLDivElement>(null);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 flex flex-col">
            <Navigation />
            <main className="flex-1 flex items-center justify-center px-4 py-8">
                <section className="w-full max-w-4xl bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-10 border border-gray-100">
                    <div className="w-full flex justify-start mb-4">
                        <ReadAloudControls
                            getText={() => contentRef.current?.innerText || ""}
                        />
                    </div>
                    <h1
                        className="text-3xl font-bold mb-6 text-blue-900 text-center"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        Annotated Bibliography
                    </h1>
                    <div
                        ref={contentRef}
                        className="space-y-6 text-gray-700"
                        style={{ fontFamily: "var(--font-geist-sans)" }}
                    >
                        {/* Allen */}
                        <div style={{ textIndent: "-2em", paddingLeft: "2em" }}>
                            <strong>Allen, Jennifer.</strong> &quot;Ghost Forest
                            Education Focal Point of Public Science
                            Project.&quot; <em>Coastal Review</em>, 13 July
                            2023,{" "}
                            <a
                                href="https://coastalreview.org/2023/07/ghost-forest-education-focal-point-of-public-science-project"
                                className="text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                coastalreview.org/2023/07/ghost-forest-education-focal-point-of-public-science-project
                            </a>
                            .<br />
                            This article highlights a collaborative public
                            education effort between the National Park Service,
                            North Carolina State University, and Core Sound
                            Waterfowl Museum and Heritage Center. It focuses on
                            increasing awareness of ghost forests through
                            &quot;Chronolog,&quot; a project that allows
                            community members to contribute photos documenting
                            change in the environment over time, which acts as
                            an example of an interactive and community-focused
                            approach to ghost forest education. This article is
                            valuable to our project because it emphasizes the
                            importance of community engagement and local
                            responses to environmental change. While it does not
                            directly analyze policymaking, it shines a light on
                            how local communities respond to its effects — even
                            highlighting a knowledge gap toward ghost forests
                            among residents of affected areas. This supports our
                            broader narrative by grounding the impact of
                            environmental policy in lived experience and
                            emphasizing the need for accessible, public-facing
                            initiatives. From this article, we hope to construct
                            a more inclusive, ethical narrative that
                            incorporates individual and community perspectives
                            alongside policy and government analysis. By
                            providing this grassroots perspective, we are able
                            to balance top-down analysis with bottom-up insight,
                            showing that individuals and communities also play a
                            key role in shaping environmental outcomes.
                            Ultimately, this source supports our goal of
                            crafting a narrative that is not only informed by
                            research, but also rooted in the power of community
                            and awareness.
                        </div>

                        {/* Castagno */}
                        <div style={{ textIndent: "-2em", paddingLeft: "2em" }}>
                            <strong>Castagno, Peter.</strong> &quot;Not Paying
                            Attention to History: Environmentalists Concerned
                            over Loosened Wetlands Rules.&quot;{" "}
                            <em>Port City Daily</em>, 2 Oct. 2023,{" "}
                            <a
                                href="https://portcitydaily.com/local-news/2023/10/02/not-paying-attention-to-history-environmentalists-concerned-over-loosened-wetlands-rules/"
                                className="text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                portcitydaily.com/local-news/2023/10/02/not-paying-attention-to-history-environmentalists-concerned-over-loosened-wetlands-rules/
                            </a>
                            .<br />
                            In this article, Castagno reports on the
                            environmental and political consequences of the 2023
                            North Carolina Farm Act, which resulted in removed
                            protections for isolated wetlands and forests not
                            covered under federal oversight. Through interviews
                            with conservationists and environmental scientists,
                            Castagno writes about how the rollback increases
                            risks of flooding and environmental damage,
                            threatening coastal communities. His article
                            provides valuable context on North Carolina&apos;s
                            long history of drainage, development, and
                            deregulation, and highlights a lack of public and
                            political accountability within legislative
                            processes. This source is essential to our group
                            project because it places these recent policy
                            changes as part of a larger trend of decisions that
                            contributes to ecological degradation, specifically
                            the formation of ghost forests. It adds narrative
                            depth to our project by providing direct testimony
                            from those opposed to the policies, and allows us to
                            see the extent of the conflict as well as the
                            perspectives of affected communities. Additionally,
                            it offers insight into how public discussion around
                            environmental change often ignores historical
                            precedents, a theme we can explore while we analyze
                            political corruption. By using Castagno&apos;s
                            article along with geographical data and zoning
                            records, we can more effectively show how ghost
                            forests are consequences of long-term political and
                            economic choices.
                        </div>

                        {/* Democracy NC */}
                        <div style={{ textIndent: "-2em", paddingLeft: "2em" }}>
                            <strong>Democracy North Carolina.</strong>{" "}
                            <em>
                                Political Donations Decide NC&apos;s
                                Environmental Future.
                            </em>{" "}
                            Democracy NC, July 1995,{" "}
                            <a
                                href="https://democracync.org/research/political-donations-decide-ncs-environmental-future"
                                className="text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                democracync.org/research/political-donations-decide-ncs-environmental-future
                            </a>
                            .<br />
                            This report examines the connection between
                            corporate political donations and the weakening of
                            environmental protections in North Carolina.
                            Democracy NC documents that in 1994,
                            anti-environmental groups donated more than $1.3
                            million to state legislators, accounting for 40% of
                            identifiable campaign contributions. The report
                            argues that these contributions gave corporate
                            lobbyists significant influence over legislation,
                            enabling policies that limited state agencies&apos;
                            ability to regulate environmental issues such as
                            housing density in vulnerable watersheds. This
                            source is particularly valuable for our project
                            because it shows how environmental degradation, such
                            as the spread of ghost forests, is tied to human
                            decision-making rather than natural causes alone. It
                            helps us frame the issue as one of political
                            accountability and power. However, the report was
                            published in 1995, and while it offers strong
                            historical context, it lacks insight into more
                            recent legislative actions. To address this, we will
                            pair it with updated sources on current state laws
                            and lobbying trends. Even with its limitations, this
                            report offers an essential foundation for
                            understanding how policy decisions continue to shape
                            North Carolina&apos;s environmental landscape.
                        </div>

                        {/* Gverdtsiteli & Kukutschka */}
                        <div style={{ textIndent: "-2em", paddingLeft: "2em" }}>
                            <strong>
                                Gverdtsiteli, Gvantsa, and Roberto Kukutschka.
                            </strong>{" "}
                            &quot;How Corruption Undermines Global Climate
                            Efforts.&quot; <em>Transparency International</em>,
                            11 Feb. 2025,{" "}
                            <a
                                href="https://www.transparency.org/en/news/how-corruption-undermines-global-climate-effort"
                                className="text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                transparency.org/en/news/how-corruption-undermines-global-climate-effort
                            </a>
                            . Accessed 24 June 2025.
                            <br />
                            Gverdtsiteli and Kukutschka articulate the
                            detrimental effects of corruption on global climate
                            policy and environmental health, presenting evidence
                            of systemic failures across various levels of
                            governance due to undue corporate influence,
                            bribery, and misappropriation of funds. By plotting
                            graphs that show correlation between corruption and
                            environmental health or readiness for climate
                            adaptations, it clearly demonstrates how corruption
                            diverts critical financial resources from climate
                            mitigation and adaptation projects, weakening the
                            efficacy of climate policies and perpetuating
                            environmentally harmful practices. The report&apos;s
                            global perspective provides comparative insights
                            into how corruption operates differently yet
                            consistently across the Global North and South,
                            significantly shaping policy outcomes and community
                            resilience. Nonetheless, the generality of global
                            examples may obscure specific regional dynamics like
                            those directly pertinent to North Carolina&apos;s
                            coastal policy landscape. This limitation can be
                            solved by further research into North
                            Carolina&apos;s regional environmental policies and
                            residents&apos; anecdotes on how environmental
                            policies and sea-level rising shape each other over
                            time. As our project seeks to discover how the rise
                            of ghost forest resulting from political failures
                            exacerbates environmental degradation in North
                            Carolinian coastal communities, the positive
                            correlation between corruption and weakened
                            environmental health and mitigations as proven in
                            this source acts as a critical foundation to base
                            our hypothesis on. Overall, Gverdtsiteli and
                            Kukutschka robustly contextualize the influence of
                            corruption on environmental policymaking, directly
                            informing the critical narrative on policy-driven
                            environmental degradation.
                        </div>

                        {/* Hansen et al. */}
                        <div style={{ textIndent: "-2em", paddingLeft: "2em" }}>
                            <strong>Hansen, Matthew C., et al.</strong>{" "}
                            &quot;High-Resolution Global Maps of 21st-Century
                            Forest Cover Change.&quot; <em>Science</em>, vol.
                            342, no. 6160, 15 Nov. 2013, pp. 850–853. Google
                            Earth Engine.
                            <br />
                            This study provides global, high-resolution maps of
                            forest cover change since 2000, using Landsat
                            satellite imagery processed through Google Earth
                            Engine. Hansen et al.&apos;s dataset allows for
                            precise tracking of forest loss across regions and
                            time. In this project, the data plays a key role in
                            mapping ghost forests in the Albemarle-Pamlico
                            region, revealing how forest loss corresponds with
                            specific shifts in policy and land use. The major
                            strength of this source lies in its scientific rigor
                            and accessibility — the data is open and
                            reproducible, making it ideal for transparent visual
                            analysis. However, while the data clearly
                            illustrates where forest loss is occurring, it does
                            not by itself explain why these changes are
                            happening. It also does not directly capture the
                            role of policy, lobbying, or human influence. To
                            overcome this limitation, we combine this dataset
                            with policy analysis and historical records,
                            allowing us to create a more complete story about
                            how political forces have contributed to
                            environmental outcomes.
                        </div>

                        {/* Hibbs */}
                        <div style={{ textIndent: "-2em", paddingLeft: "2em" }}>
                            <strong>Hibbs, Mark.</strong> &quot;Judge Boyle
                            Rejects Preliminary Injunction in Wetlands
                            Case.&quot; <em>Coastal Review</em>, June 2024,{" "}
                            <a
                                href="https://coastalreview.org/2024/06/judge-boyle-rejects-preliminary-injunction-in-wetlands-case/"
                                className="text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                coastalreview.org/2024/06/judge-boyle-rejects-preliminary-injunction-in-wetlands-case/
                            </a>
                            .<br />
                            In this article, Hibbs reports on U.S. District
                            Judge Boyle&apos;s 17 June 2024 order denying North
                            Carolina landowner Robert White&apos;s bid to halt
                            enforcement of amended Clean Water Act (CWA)
                            regulations. White, who hopes to mine sand on the
                            wetlands along Big Flatty Creek and Pasquotank River
                            in North Carolina, argues that the WOTUS rule
                            unlawfully extends to its adjacent wetlands. This is
                            based on the precedent set in post-Sackett v. EPA
                            and the &quot;waters of the United States.&quot;
                            Judge Boyle rejected the notion stating that
                            &quot;White has failed to show that he is likely to
                            succeed on the merits of either of his claims,&quot;
                            and being at odds with public interest. For our
                            ghost-forest project, this article supplies very
                            recent legal context. It confirms that despite there
                            are many core federal protections that cover much of
                            North Carolina wetlands, there is still much
                            constant debate and fight over these vulnerable
                            lands. This article highlights how various
                            stakeholders shape wetland policy, such as the
                            Pacific Legal Foundation and the Southern
                            Environmental Law Center and wildlife federation.
                            Each of these lobbying entities could accelerate or
                            decelerate the enactment of conservation policies.
                            Although the Coastal Review is a nonprofit newsroom
                            affiliated with the North Carolina Coastal
                            Federation, the organization the story offers
                            limited detail on hydrology or ecological impacts
                            and relies on court filings rather than
                            environmental analysis. In any case, this article
                            provides a clear and concise narrative of a pivotal
                            district level court decision that reveals the
                            forces behind the legalities behind environment and
                            policy-making.
                        </div>

                        {/* Igelman */}
                        <div style={{ textIndent: "-2em", paddingLeft: "2em" }}>
                            <strong>Igelman, Jack.</strong> &quot;&apos;Ghost
                            Forests&apos; Are Creeping Across NC&apos;s Coast at
                            an Alarming Rate. Researchers Are Trying to Stop
                            Them.&quot; <em>Carolina Public Press</em>, 12 Aug.
                            2022,{" "}
                            <a
                                href="https://carolinapublicpress.org/55902/ghost-forests-are-creeping-across-ncs-coast-at-an-alarming-rate-researchers-are-trying-to-stop-them"
                                className="text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                carolinapublicpress.org/55902/ghost-forests-are-creeping-across-ncs-coast-at-an-alarming-rate-researchers-are-trying-to-stop-them
                            </a>
                            . Accessed 24 June 2025.
                            <br />
                            Igelman provides a vivid, detailed narrative of
                            ghost forest proliferation across North
                            Carolina&apos;s coastline, combining scientific
                            research insights with compelling firsthand accounts
                            from local communities. It outlines the ecological
                            and cultural significance of coastal forests to
                            North Carolina residents and tribal communities, the
                            rapid loss in Down East coastal ecosystems due to
                            rising sea levels and saltwater intrusion, and the
                            limited support and readiness from policymakers
                            regarding effective mitigation strategies.
                            Summarizing the complex ecological phenomena of
                            ghost forest formation through engaging narratives
                            by people across different sectors who care about
                            the issue, including scientific researchers, local
                            residents, and seafood industry workers, Igelman
                            persuasively enhances public awareness of multiple
                            perspectives on North Carolina&apos;s ghost forests.
                            This aligns with a crucial objective for our digital
                            humanities project, as we are not trying to prove
                            causation but raising awareness of ghost forest as a
                            rarely known yet stark signature of climate change,
                            and how it&apos;s influenced by political factors
                            and perpetuating loss to local communities. By
                            incorporating direct quotes from credible sources,
                            Igelman aids us in establishing our
                            authoritativeness and emotional connection with our
                            audience. Moreover, Igelman underscores the
                            socioeconomic implications of ghost forests in North
                            Carolina, highlighting how ghost forests exacerbate
                            existing vulnerabilities among coastal communities,
                            including fishermen, Down East residents, and
                            Indigenous people. Despite offering abundant
                            real-life accounts and descriptive quotes regarding
                            ghost forests, Igelman lacks rigorous analytical
                            data, limiting the article&apos;s utility in
                            providing precise metrics or actionable policy
                            recommendations. Overall, Igelman&apos;s article is
                            crucial in grounding environmental phenomena within
                            North Carolina community experiences, complementing
                            more quantitative research methodologies and
                            macroscopic analysis.
                        </div>

                        {/* Moore */}
                        <div style={{ textIndent: "-2em", paddingLeft: "2em" }}>
                            <strong>Moore, Andrew.</strong> &quot;Ask an Expert:
                            What Are Ghost Forests?&quot;{" "}
                            <em>NC State: College of Natural Resources News</em>
                            , 21 Oct. 2022,{" "}
                            <a
                                href="https://cnr.ncsu.edu/news/2022/10/ghost-forests-ask-an-expert/"
                                className="text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                cnr.ncsu.edu/news/2022/10/ghost-forests-ask-an-expert/
                            </a>
                            .<br />
                            This article provides a strong foundational overview
                            of ghost forests — from their causes and
                            environmental impact to suggested approaches in
                            mitigating their spread. Featuring an interview with
                            Marcelo Ardón, a professor at North Carolina State
                            University, it contextualizes the research and
                            policies affecting ghost forest emergence to North
                            Carolina, specifically. This article is valuable to
                            our project in many ways. First, it clarifies the
                            science behind ghost forest formation, allowing us
                            to understand how certain environmental policies may
                            either accelerate or prevent its emergence. Second,
                            although the article does not cover specific policy
                            suggestions, it does explain the science behind the
                            spread of ghost forests — therefore giving us the
                            tools to approach our project&apos;s topic of policy
                            analysis through a more critical lens. Because ghost
                            forests are formed not only through legislation, but
                            also through factors like extreme weather and rising
                            sea levels, we are not able to claim direct
                            causation. However, this source helps us explore how
                            policy interacts with those environmental forces,
                            which is a key part of our research question. That
                            said, its lack of direct policy discussion is also
                            one of its limitations — however, that gap is part
                            of what makes the article helpful, showcasing
                            what&apos;s missing and where our project serves a
                            purpose. This source supports our effort to create a
                            narrative that&apos;s both grounded and nuanced,
                            helping us balance environmental science with the
                            political and social aspects of ghost forest
                            emergence in North Carolina.
                        </div>

                        {/* Natural Resources Defense Council */}
                        <div style={{ textIndent: "-2em", paddingLeft: "2em" }}>
                            <strong>Natural Resources Defense Council.</strong>{" "}
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
                            .<br />
                            This article from the NRDC provides a very clear
                            overview of the U.S. Supreme Court&apos;s Sackett v.
                            EPA decision and its ramifications for wetland
                            protections across the country. It outlines how the
                            ruling dramatically reduces the oversight of the
                            Clean Water Act by removing federal boundaries over
                            millions of acres of wetlands, especially those not
                            directly connected to larger waterways. The article
                            also emphasizes how this legal decision creates
                            available loopholes that developers and
                            industry-aligned lawmakers can exploit, leaving the
                            surrounding ecology without any meaningful
                            protection. For our group project, this source gives
                            context with legal and political details that
                            explains how states like North Carolina were able to
                            pass legislation like the 2023 Farm Act. It supports
                            our research question by illustrating how changes in
                            federal policy and judicial decisions interact with
                            lobbying and negligence to produce ecological harm.
                            The NRDC article strengthens our timeline with a
                            clear turning point in the Sackett ruling, which was
                            a catalyst for decisions that weakened North
                            Carolina&apos;s environmental regulations.
                            Ultimately, this source deepens our argument that
                            ghost forests are not just natural signs of
                            sea-level rise, but visible outcomes of political
                            and legal choices that prioritize industry interests
                            over the strength of the ecological community.
                        </div>

                        {/* Peck */}
                        <div style={{ textIndent: "-2em", paddingLeft: "2em" }}>
                            <strong>Peck, Kaitlin.</strong> &quot;Measuring the
                            Emergency of &apos;Ghost Forests&apos; From 1986 to
                            2016 and Their Enviro-Cultural Impacts on the
                            Communities of Down East, North Carolina, USA.&quot;{" "}
                            <em>Carolina Digital Repository</em>, Apr. 2023,{" "}
                            <a
                                href="https://doi.org/10.17615/m3jc-5167"
                                className="text-blue-700 underline"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                doi.org/10.17615/m3jc-5167
                            </a>
                            .<br />
                            Peck&apos;s senior honors thesis critically examines
                            the progression and impacts of ghost forests in the
                            Down East communities of North Carolina using
                            GIS-based remote sensing methods. Analyzing NDVI
                            values derived from Landsat imagery over a
                            thirty-year span, Peck identifies significant forest
                            loss, linking it primarily to saltwater intrusion
                            driven by rising sea levels and climate-induced
                            extreme weather events. This study&apos;s value lies
                            in its professional and comprehensive quantitative
                            assessment of environmental transformation within
                            Down East, a focused region in North Carolina
                            severely impacted by ghost forests, providing a
                            solid baseline for understanding the direct
                            ecological and socio-cultural impacts of ghost
                            forests on affected inhabitants. Through in-person
                            visits, it practically examines how environmental
                            degradation translates into tangible community
                            distress, underscoring the interconnection between
                            ecological health and human livelihoods. However,
                            limitations include the spatial resolution
                            constraints inherent in satellite imagery,
                            potentially missing smaller-scale yet significant
                            ecological changes and nuances within individual
                            community responses. It also lacks the narrative
                            about how policies have influenced the exacerbation
                            of climate issues and the formation of ghost forests
                            in North Carolina, requiring further research into
                            specific examples of governmental decisions that
                            influence environmental transformations. As a
                            result, Peck&apos;s study significantly advances the
                            understanding of local-scale climate impacts and
                            sets an empirical foundation for further research on
                            policy implications.
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
