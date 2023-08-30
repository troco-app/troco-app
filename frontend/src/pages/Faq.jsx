import "../assets/css/pagescss/Faq.css";
import { Categories } from "../components/Categories";
import { CustomButtonBack } from "../components/CustomButtonBack";
import { Footer } from "../components/Footer";

export function Faq() {
    return (
        <>
            <Categories />
            <section className="section-faq">
                <header className="header-faq">
                    <h1 className="h1-faq">FAQ </h1>
                </header>
                <main className="main-ul-faq">
                    <ul className="ul-faq">
                        <li className="li-faq">
                            <h2 className="h2-faq">What is TROCO Exchange?</h2>
                            <p className="p-faq">
                                TROCO Exchange is an online platform dedicated
                                to the exchange of retro treasures, including
                                consoles, video games, radios, and more. It
                                provides a vibrant community for enthusiasts to
                                connect, trade, and relive the nostalgia of
                                classic items.
                            </p>
                        </li>
                        <li className="li-faq">
                            <h2 className="h2-faq">
                                How do I list a product for exchange?
                            </h2>
                            <p className="p-faq">
                                To list your cherished retro item, click on the
                                List Product button and provide a detailed
                                description, clear photos, current location, and
                                the item&apos;s condition. Once submitted, your
                                product will be visible to other users for
                                potential exchanges.
                            </p>
                        </li>
                        <li className="li-faq">
                            <h2 className="h2-faq">
                                Can I propose an exchange with any user&apos;s
                                product?
                            </h2>
                            <p className="p-faq">
                                Absolutely! Feel free to browse through other
                                users&apos; offerings and propose an exchange
                                for the item you desire. Just click on the
                                Propose Exchange button and wait for their
                                response.
                            </p>
                        </li>
                        <li className="li-faq">
                            <h2 className="h2-faq">
                                How will I know if my exchange proposal is
                                accepted or rejected?
                            </h2>
                            <p className="p-faq">
                                Once you propose an exchange, you&apos;ll
                                receive a prompt email confirmation. The user
                                whose product you&apos;ve selected will respond
                                via email, either accepting or declining your
                                proposal.
                            </p>
                        </li>
                        <li className="li-faq">
                            <h2 className="h2-faq">
                                Is my information secure during the exchange
                                process?
                            </h2>
                            <p className="p-faq">
                                We take your privacy seriously. All
                                communications and personal information are
                                encrypted and secured. Rest assured that your
                                details will remain confidential throughout the
                                exchange.
                            </p>
                        </li>
                        <li className="li-faq">
                            <h2 className="h2-faq">
                                How do I contact the user for exchange
                                arrangements?
                            </h2>
                            <p className="p-faq">
                                Once both parties agree on the exchange, you can
                                communicate through our secure messaging system.
                                Coordinate a convenient meeting point to
                                complete the trade and share the joy of vintage
                                treasures!
                            </p>
                        </li>
                        <li className="li-faq">
                            <h2 className="h2-faq">
                                Can I rate and review my exchange experience?
                            </h2>
                            <p className="p-faq">
                                Absolutely! After completing the exchange,
                                you&apos;ll have the opportunity to leave a
                                rating and review for the user. Your feedback
                                helps build trust within our community and
                                enhances future exchange experiences.
                            </p>
                        </li>
                        <li className="li-faq">
                            <h2 className="h2-faq">
                                Are there any fees for listing products or
                                making exchanges?
                            </h2>
                            <p className="p-faq">
                                Listing your products and making exchanges are
                                completely free! Our goal is to foster a
                                thriving community of retro enthusiasts,
                                promoting the joy of vintage exchanges without
                                any additional charges.
                            </p>
                        </li>
                        <li className="li-faq">
                            <h2 className="h2-faq">
                                How do I build a career with TROCO Exchange?
                            </h2>
                            <p className="p-faq">
                                We welcome individuals from all backgrounds and
                                profiles to join our team. Explore the Careers
                                section on our website to find open positions
                                that align with your skills and interests.
                                Submit your resume and show us your passion for
                                vintage articles!
                            </p>
                        </li>
                        <li className="li-faq">
                            <h2 className="h2-faq">Still have questions?</h2>
                            <p className="p-faq">
                                If you have any further inquiries or need
                                assistance, don&apos;t hesitate to reach out to
                                our friendly support team at{" "}
                                <span className="span-faq">
                                    info@troco.pro.
                                </span>{" "}
                                We&apos;re here to make your retro journey a
                                delightful experience!
                            </p>
                        </li>
                    </ul>
                </main>
            </section>
            <CustomButtonBack />
            <Footer />
        </>
    );
}
