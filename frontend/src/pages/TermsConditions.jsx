import "../assets/css/pagescss/TermsConditions.css";
import { Categories } from "../components/Categories";
import { CustomButtonBack } from "../components/CustomButtonBack";
import { Footer } from "../components/Footer";

export function TermsConditions() {
    return (
        <>
            <Categories />
            <section className="section-term-condition">
                <header className="header-term-condition">
                    <h1 className="h1-term-condition">Terms & Conditions </h1>
                    <h2 className="h2-term-condition">
                        Welcome to Troco! These Terms and Conditions govern your
                        use of our website and services. By using Troco, you
                        agree to these terms. Please read them carefully.
                    </h2>
                </header>
                <main className="main-ul-term-condition">
                    <ul className="ul-term-condition">
                        <li className="li-term-condition">
                            <h2 className="h2-term-condition">
                                1. Acceptance of Terms
                            </h2>
                            <p className="p-term-condition">
                                By accessing or using Troco, you agree to be
                                bound by these Terms and Conditions. If you do
                                not agree with any part of these terms, you may
                                not use our services.
                            </p>
                        </li>
                        <li className="li-term-condition">
                            <h2 className="h2-term-condition">
                                2. Description of Service
                            </h2>
                            <p className="p-term-condition">
                                Troco is an online platform that facilitates
                                item exchange between users. Users can post
                                items they wish to exchange and communicate with
                                other users to arrange trades.
                            </p>
                        </li>
                        <li className="li-term-condition">
                            <h2 className="h2-term-condition">
                                3. User Conduct
                            </h2>
                            <p className="p-term-condition">
                                You are responsible for the content you post on
                                Troco. Content must not violate any laws or
                                infringe on the rights of others. You may not
                                engage in any fraudulent or deceptive activities
                                on Troco. You may not use Troco to promote or
                                sell illegal or prohibited items.
                            </p>
                        </li>
                        <li className="li-term-condition">
                            <h2 className="h2-term-condition">
                                4. Intellectual Property
                            </h2>
                            <p className="p-term-condition">
                                The content on Troco, including logos,
                                trademarks, and other intellectual property, is
                                owned by Troco and protected by applicable laws.
                                You may not use or reproduce our content without
                                our permission.
                            </p>
                        </li>
                        <li className="li-term-condition">
                            <h2 className="h2-term-condition">
                                5. Privacy Policy
                            </h2>
                            <p className="p-term-condition">
                                Our Privacy Policy governs the collection and
                                use of your personal information. Please review
                                our Privacy Policy for more details.
                            </p>
                        </li>
                        <li className="li-term-condition">
                            <h2 className="h2-term-condition">
                                6. Disclaimer of Warranty
                            </h2>
                            <p className="p-term-condition">
                                Troco is provided as is without warranties of
                                any kind. We do not guarantee the accuracy,
                                completeness, or reliability of any content on
                                our platform.
                            </p>
                        </li>
                        <li className="li-term-condition">
                            <h2 className="h2-term-condition">
                                7. Limitation of Liability
                            </h2>
                            <p className="p-term-condition">
                                Troco shall not be liable for any damages,
                                direct or indirect, arising from your use of our
                                services or inability to access our platform.
                            </p>
                        </li>
                        <li className="li-term-condition">
                            <h2 className="h2-term-condition">8. Indemnity</h2>
                            <p className="p-term-condition">
                                You agree to indemnify and hold Troco harmless
                                from any claims, damages, or losses resulting
                                from your use of our services.
                            </p>
                        </li>
                        <li className="li-term-condition">
                            <h2 className="h2-term-condition">
                                9. Modification of Terms
                            </h2>
                            <p className="p-term-condition">
                                Troco reserves the right to modify these Terms
                                and Conditions at any time. Changes will be
                                effective upon posting on our website.
                            </p>
                        </li>
                        <li className="li-term-condition">
                            <h2 className="h2-term-condition">
                                10. Termination
                            </h2>
                            <p className="p-term-condition">
                                Troco may terminate your access to our services
                                at any time, with or without cause.
                            </p>
                        </li>
                        <li className="li-term-condition">
                            <h2 className="h2-term-condition">
                                11. Governing Law
                            </h2>
                            <p className="p-term-condition">
                                These Terms and Conditions shall be governed by
                                and construed in accordance with the laws of
                                [Your Country/State], without regard to its
                                conflict of law principles.
                            </p>
                        </li>
                        <li className="li-term-condition">
                            <h2 className="h2-term-condition">
                                12. Contact Us
                            </h2>
                            <p className="p-term-condition">
                                If you have any questions or concerns regarding
                                these Terms and Conditions, please contact us at{" "}
                                <span className="span-term-condition">
                                    info@troco.pro.
                                </span>{" "}
                                By using Troco, you acknowledge that you have
                                read and agree to these Terms and Conditions.
                                Thank you for using our platform!
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
