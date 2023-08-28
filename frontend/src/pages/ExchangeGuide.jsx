import "../assets/css/pagescss/ExchangeGuide.css";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";

export function ExchangeGuide() {
    return (
        <>
            <Categories />
            <section className="sectionExchangeGuide">
                <header className="headerExchangeGuide">
                    <h1 className="h1ExchangeGuide">Exchange Guide: </h1>
                    <h2 className="h2ExchangeGuide">
                        Your Getaway to Retro Treasures
                    </h2>
                </header>
                <main className="mainUlExchangeGuide">
                    <ul className="ulExchangeGuide">
                        <li className="liExchangeGuide">
                            <h3 className="h3ExchangeGuide">
                                1. How it Works:
                            </h3>
                            <p className="pExchangeGuide">
                                Welcome to our Exchange Guide, your ultimate
                                resource for trading retro gems! To get started,
                                simply upload a product you&apos;d like to exchange,
                                complete with a clear photo, detailed
                                description, location, and the item&apos;s current
                                condition. Once listed, browse through other
                                users&apos; offerings and select a product that
                                catches your eye
                            </p>
                        </li>
                        <li className="liExchangeGuide">
                            <h3 className="h3ExchangeGuide">
                                2. Proposal Confirmation:
                            </h3>
                            <p className="pExchangeGuide">
                                Upon submitting your exchange proposal, rest
                                assured that you&apos;ll receive a prompt
                                confirmation via email. We&apos;ll keep you informed
                                throughout the process, ensuring you stay in the
                                loop every step of the way.
                            </p>
                        </li>
                        <li className="liExchangeGuide">
                            <h3 className="h3ExchangeGuide">
                                3. User Response:
                            </h3>
                            <p className="pExchangeGuide">
                                Within a short span, you&apos;ll receive an email
                                response from the user whose item you&apos;ve
                                selected. They&apos;ll either accept or reject your
                                proposal. If it&apos;s a match made in retro heaven,
                                get ready to proceed with the exchange
                                arrangements!
                            </p>
                        </li>
                        <li className="liExchangeGuide">
                            <h3 className="h3ExchangeGuide">
                                4. Contact and Exchange:
                            </h3>
                            <p className="pExchangeGuide">
                                Once both parties are on board, it&apos;s time to
                                establish a point of exchange. Our secure
                                messaging system allows you to communicate with
                                ease. Arrange a meeting at a convenient location
                                and time to complete the trade, keeping the
                                retro spirit alive!
                            </p>
                        </li>
                        <li className="liExchangeGuide">
                            <h3 className="h3ExchangeGuide">
                                5. Rating and Review:
                            </h3>
                            <p className="pExchangeGuide">
                                Once the exchange is completed, don&apos;t forget to
                                leave a thoughtful rating and review. This helps
                                build trust within our community and ensures
                                future exchanges run smoothly. Unleash the magic
                                of nostalgia and dive into a world of exciting
                                exchanges with our user-friendly Exchange Guide.
                                Remember, there&apos;s no limit to the retro
                                treasures waiting to find new homes!
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
