import imagen from "../assets/img/imagen.svg";
import "../assets/css/Footer.css";

export function Footer() {
  return (
    <footer className="footer">
      <div className="section1">
        <h3>T</h3>
      </div>
      <div className="section2">
        <ul className="ulFooter">
          <li>
            <a href="#">Our Story</a>
          </li>
          <li>
            <a href="#">Exchange Guide</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
      <div className="section3">
        <ul className="ulFooter2">
          <li>
            <a href="#">Terms & Conditions</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contact us</a>
          </li>
        </ul>
      </div>
      <div className="section4">
        <div
          className="logoFooter"
          style={{ backgroundImage: `url(${imagen})` }}
        ></div>
        <div className="copyrightFooter">
          <p>Troco Copyright © 2023</p>
        </div>
      </div>
    </footer>
  );
}
