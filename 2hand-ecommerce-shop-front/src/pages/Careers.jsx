import "../assets/css/pagescss/Careers.css";
import img from "../assets/img/Careers.png";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";

export function Careers() {
    return (
        <>
            <Categories />
            <section className="sectionCareers">
                <header className="headerCareers">
                    <div
                        className="imgCareers"
                        style={{ backgroundImage: `url(${img})` }}
                        alt="Imagen de Career"
                    ></div>
                    <div className="headTextCareers">
                        <h1 className="h1Careers">Careers:</h1>
                        <h2 className="h2Careers">Join Our Vintage Journey</h2>
                        <p className="pCareers">
                            Are you a passionate soul with a love for all things
                            vintage? Do you have a keen eye for unique retro
                            treasures and a desire to be part of a thriving
                            community? Look no further, as we welcome
                            individuals from all backgrounds and profiles to
                            embark on a rewarding career with us!
                        </p>
                    </div>
                </header>
                <main className="mainUl">
                    <ul className="ulCareers">
                        <li className="liCareers">
                            <h3>Embrace Diversity:</h3>
                            <p className="pCareers">
                                At TROCO, we cherish diversity and believe that
                                every individual brings a unique perspective to
                                our team. Whether you&apos;re a seasoned professional
                                or a fresh graduate, your passion for vintage
                                articles is what matters most to us.
                            </p>
                        </li>
                        <li className="liCareers">
                            <h3>Open Positions for All:</h3>
                            <p className="pCareers">
                                From tech-savvy developers to creative content
                                creators, from meticulous customer support
                                experts to strategic marketing gurus, we have a
                                place for you. Our dynamic and growing platform
                                offers a myriad of opportunities to match your
                                skills and interests.
                            </p>
                        </li>
                        <li className="liCareers">
                            <h3>A Journey of Growth:</h3>
                            <p className="pCareers">
                                When you join us, you become a part of our
                                vintage journey - a path that fosters personal
                                and professional growth. You&apos;ll have the chance
                                to work with a talented team, learning from each
                                other and expanding your horizons.
                            </p>
                        </li>
                        <li className="liCareers">
                            <h3>Impactful Collaboration:</h3>
                            <p className="pCareers">
                                Collaboration lies at the heart of our success.
                                As you join our vibrant community, you&apos;ll
                                experience the power of teamwork and contribute
                                your ideas to shape the future of our vintage
                                exchange platform.
                            </p>
                        </li>
                        <li className="liCareers">
                            <h3>Make a Difference:</h3>
                            <p className="pCareers">
                                We take pride in creating an impact in the
                                vintage world. With your talents and passion,
                                you&apos;ll help us build a platform that brings joy
                                to retro enthusiasts, preserving the magic of
                                bygone eras.
                            </p>
                        </li>
                        <li className="liCareers">
                            <h3>How to Apply:</h3>
                            <p className="pCareers">
                                Ready to join the TROCO Team? Send us your
                                resume and a brief introduction highlighting
                                your love for vintage articles and the position
                                you&apos;re interested in. We value enthusiasm,
                                creativity, and dedication above all else:
                                info@troco.pro Step into the enchanting world of
                                vintage wonders and carve a meaningful career
                                with us. Join our Vintage Exchange today and
                                become part of a community that celebrates the
                                past while shaping the future!
                            </p>
                        </li>
                    </ul>
                </main>
            </section>
            <a className="aSellerButtonBack" href="/">
                <div className="buttonContainer">
                    <button className="sellerButtonBack ">Back to Troco</button>
                </div>
            </a>
            <Footer />
        </>
    );
}
