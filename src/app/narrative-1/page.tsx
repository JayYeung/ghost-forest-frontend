"use client";
import Navigation from "@/components/Navigation";
import { useRef } from "react";
import ReadAloudControls from "@/components/ReadAloudControls";
import NDVIMap from "@/components/NDVIMap";

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
                        Project Narrative 1
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
                                    (Brayden/Arlen)
                                </span>
                            </h2>
                            <div
                                className="relative w-full"
                                style={{ paddingTop: "75%" }}
                            >
                                <iframe
                                    src="graph.html"
                                    className="absolute top-0 left-0 w-full h-full"
                                    style={{ border: "none" }}
                                    title="NC Environmental Spending and Forest Loss Graph"
                                    scrolling="no"
                                ></iframe>
                            </div>
                            <p className="mb-4 text-[14px] text-gray-500">
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
                        </div>
                        {/* Thesis */}
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-blue-800">
                                Thesis{" "}
                                <span className="font-normal text-base">
                                    (Brayden/Arlen)
                                </span>
                            </h2>
                            <p className="mb-4">
                                Our project is grounded in the ideas of data feminism and ethical storytelling.
                                We argue that ghost forests in North Carolina aren’t just caused by climate change 
                                — they’re also the result of deeper systemic problems, like political lobbying, weakened regulations, 
                                and uneven environmental enforcement. By mapping forest loss and tracking environmental spending, 
                                we show how certain policy decisions have made ghost forests worse and placed an unfair burden on 
                                coastal communities. In many of these places, younger people have moved away — often because of job 
                                opportunities or rising costs — leaving behind older adults who may not have the money or mobility to 
                                leave. It’s a pattern that needs more research, but it points to a kind of quiet marginalization where 
                                the elderly are left to deal with the impacts of environmental change on their own. Through all of this, 
                                we try to keep the focus on people — especially those most affected. Ghost forests are more than dying trees; 
                                they reflect bigger issues of neglect and inequality. We’re not saying policy alone causes these changes,
                                but we hope our work helps people see how data, lived experience, and local knowledge can come together to
                                tell a bigger story — and maybe even spark new conversations and action.
                            </p>
                        </div>
                        {/* Methodology and Tools */}
                        <div>
                            <h2 className="text-2xl font-bold mb-2 text-blue-800">
                                Methodology and Tools{" "}
                                <span className="font-normal text-base">
                                    (Jay & Arlen)
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
                            <p className="mb-4 text-[14px] text-gray-500">
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
                                    <p className="mt-3 text-[14px] text-gray-500">
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
                                    <p className="mt-3 text-[14px] text-gray-500">
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
                                    <p className="mt-3 text-[14px] text-gray-500">
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
                                Lastly, to strengthen the oral history with factual 
                                statistics, we created an interactive visualization 
                                of the total population composition by age groups 
                                across coastal counties in North Carolina from 2001 
                                to 2024. We retrieved and cleaned the public dataset 
                                of &quot;Population by Age, Race, Sex&quot; produced by the State 
                                Demographer of North Carolina (North Carolina Office 
                                of State Budget and Management, State Demographer). 
                                Data cleaning is performed in three steps. Firstly, 
                                we filtered the data to only include years between 
                                2001 and 2024. The time frame is the same as the one 
                                in our map about forest loss in eastern North Carolina 
                                to effectively reflect how the recent rise of ghost 
                                forests has impacted certain communities in North Carolina. 
                                Secondly, we selected only the counties in the outer 
                                coastal plain of North Carolina: Bertie, Beaufort, 
                                Brunswick, Camden, Carteret, Chowan, Craven, Currituck, 
                                Dare, Gates, Hertford, Hyde, New Hanover, Onslow, Pamlico, 
                                Pasquotank, Pender, Perquimans, Tyrrell, and Washington 
                                (North Carolina Office of State Archaeology). This step 
                                allows us to effectively visualize the population composition 
                                over time as a pie chart in the region where the forest 
                                loss is most severe. Thirdly, after examining the labels 
                                in the &quot;race&quot; and &quot;age groups&quot; categories, we chose to 
                                visualize the population composition by age groups as it 
                                pertains to the framework of ethical data visualization 
                                by containing all possible ages in the dataset. An unethical 
                                visualization would otherwise be created as the original 
                                dataset only includes a &quot;White&quot; and &quot;Other&quot; label for the 
                                racial composition in North Carolina, despite the region&apos;s 
                                significant number of African American and Hispanic residents 
                                (Data USA). The interactive pie chart is created using the 
                                Graph_objects module from the Plotly package. We additionally 
                                combined the unevenly defined, small age groups (each age group 
                                only has one or five years) into larger, evenly binned age groups 
                                (each age group has a ten-year range) that span across 0 years 
                                old to 80 and above, simplifying the interpretability of the 
                                interactive pie chart. By automatically sorting the nine pie 
                                chart slices from the largest composition to the smallest 
                                composition, the audience can see a clear trend in the shifts 
                                in age groups over time in relation to the rise of ghost forests.
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
                                key legislation such as the Sackett
                                v. EPA helps us trace how deregulation,
                                lobbying, and development priorities contribute
                                to forest loss. At the same time, our
                                examination of public narratives reveals how
                                these processes are hidden from public view and
                                whose voices are left out. This multi-method
                                approach allows us to argue that ghost forests
                                are not inevitable results of climate change,
                                but outcomes of political corruption and
                                neglect&mdash;reinforcing our central claim
                                about environmental injustice.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
