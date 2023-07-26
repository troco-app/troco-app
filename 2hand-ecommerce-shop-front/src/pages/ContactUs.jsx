import "../assets/css/pagescss/ContactUs.css";
import { Categories } from "../components/Categories";
import { Footer } from "../components/Footer";
import MapView from "../components/MapView";

export function ContactUs() {
    return (
<>
  <Categories />
  <section className="sectionContactUs">
    <div className="textContact">
      <h1 className="pageHeading">Contact Us</h1>
      <p className="pContactUs">
        If you have any inquiries, feedback, or need assistance with vintage exchanges, don't hesitate to reach out to us via email at{" "}
        <span className="spanInfoTroco">info@troco.pro.</span>
      </p>
      <p className="pContactUs">
        Our dedicated team is eager to assist you and ensure a seamless and enjoyable experience with our platform.
      </p>
    </div>
    <div className="containerMap">
      
        {<MapView/>}
      
      <p className="pContactUs">
        C/ Trueque 123 Trocolin Street, 15055 Trocolo, Trocolandia.
      </p>
    </div>
  </section>
  <Footer />
</>
    );
}
