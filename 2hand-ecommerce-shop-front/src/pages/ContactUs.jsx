import "../assets/css/pagescss/ContactUs.css";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import { MapView } from "../components/MapView";

export function ContactUs() {
    return (
      <>
      <Categories />
      <section className="sectionContactUs">
        <p className="pContactUs">
        For any inquiries, feedback, or vintage exchange-related assistance, feel free to reach out to us via email at <span className="spanInfoTroco">info@troco.pro.</span>
        </p>
        <p className="pContactUs">
        Our dedicated team is eager to assist you and ensure your experience with our platform is seamless and enjoyable.
        </p>
        <div className="map">

        </div>
      </section>
        <MapView className="map"/>
        <p className="pContactUs">
        C/ Trueque 123 Trocolin Street, 15055 Trocolo, Trocolandia.
        </p>
      <Footer />
      </>
    )
  }