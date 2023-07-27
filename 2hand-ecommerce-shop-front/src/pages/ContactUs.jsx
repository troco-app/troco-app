import "../assets/css/pagescss/ContactUs.css";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import MapView from "../components/MapView";

export function ContactUs() {
    return (
        <>
            <Categories />
            <main
                className="sectionContactUs"
                role="region"
                aria-label="Contact Information"
            >
                <div className="textContact">
                    <p className="pContactUs">
                        If you have any inquiries, feedback, or need assistance
                        with vintage exchanges, don&apos;t hesitate to reach out to
                        us via email at{" "}
                        <span className="spanInfoTroco">info@troco.pro.</span>
                    </p>
                    <p className="pContactUs">
                        Our dedicated team is eager to assist you and ensure a
                        seamless and enjoyable experience with our platform.
                    </p>
                </div>
                <div className="containerMap">
                    {<MapView />}
                    <address>
                        <p className="pContactUs">
                            C/ Trueque 123 Trocolin Street, 15055 Trocolo,
                            Trocolandia.
                        </p>
                    </address>
                </div>
            </main>
            <Footer />
        </>
    );
}
