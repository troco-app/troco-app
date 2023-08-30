import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import "../assets/css/pagescss/OurStory.css";
import Image from "../assets/img/Team-A-2.jpg";
import { CustomButtonBack } from "../components/CustomButtonBack";

export function OurStory() {
    return (
        <>
            <Categories />
            <section className="ourStory">
                <header className="headerOurStory">
                    <div
                        className="imageOurStory"
                        style={{ backgroundImage: `url(${Image})` }}
                    ></div>
                    <div className="headTextCareers">
                        <h1 className="h1OurStory">Troco</h1>
                        <h2 className="h2OurStory">
                            Where Retro Gaming Enthusiasts Connect
                        </h2>
                    </div>
                </header>
                <main>
                    <p className="pOurStory">
                        In a bustling Academy, four aspiring programming
                        students - Lithu, Edu, Yorch, and Edu - formed an
                        unbreakable bond over their love for retro video games,
                        consoles, computers, and radios during a challenging
                        coding project. Inspired by their shared passion, they
                        embarked on a daring venture: creating a website
                        dedicated to the exchange of classic gaming treasures
                        and nostalgic electronic wonders.
                    </p>

                    <p className="pOurStory">
                        Combining their programming skills and unwavering
                        camaraderie, they crafted a user-friendly platform that
                        quickly gained traction among retro gaming communities
                        worldwide.
                    </p>

                    <p className="pOurStory">
                        Their project thrived through late nights of debugging,
                        becoming a hub for retro enthusiasts to trade cherished
                        relics. Today, their legendary website unites global
                        souls, a testament to their friendship and vintage
                        gaming's enduring charm.
                    </p>
                </main>
            </section>
            <CustomButtonBack/>

            <Footer />
        </>
    );
}
