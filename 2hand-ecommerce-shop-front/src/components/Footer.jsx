import imagen from "../assets/img/imagen.svg";
import "../assets/css/Footer.css";

export function Footer() {
  return (
<footer className="footer">
  <nav className="section1">
    <a className="aFooter1" href="/">
      <h2 className="footerH2">T</h2>
    </a>
    
    <p className="footerContact">Contact: <span className="footerContact">info@troco.pro</span></p>
  </nav>
  <nav className="section2">
    <h3 className="section2H3">Explore</h3>
    <ul className="ulFooter">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/ourStory">Our Story</a>
      </li>
      <li>
        <a href="/exchangeGuide">Exchange Guide</a>
      </li>
      <li>
        <a href="/careers">Careers</a>
      </li>
    </ul>
  </nav>
  <nav className="section3">
    <h3 className="section3H3">Help & Support</h3>
    <ul className="ulFooter2">
      <li>
        <a href="/termsConditions">Terms & Conditions</a>
      </li>
      <li>
        <a href="/faq">FAQ</a>
      </li>
      <li>
        <a href="/ContactUs">Contact us</a>
      </li>
    </ul>
  </nav>
  <div className="section4">
    <a href="/">
      <div
        className="logoFooter"
        style={{ backgroundImage: `url(${imagen})` }}
        alt="Troco Logo"
      ></div>
    </a>
    <div className="copyrightFooter">
      <p>Troco Copyright © 2023</p>
    </div>
  </div>
</footer>
  );
}
