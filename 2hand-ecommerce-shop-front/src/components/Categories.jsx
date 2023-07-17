import "../assets/css/Categories.css";

import calculators from "../assets/img/retro_calculators_white.svg";
import cameras from "../assets/img/retro_cameras_white.svg";
import computers from "../assets/img/retro_computers_white.svg";
import accesories from "../assets/img/retro_gaming_accesories_white.svg";
import televisions from "../assets/img/retro_televisions_white.svg";
import user from "../assets/img/user_white.svg";
import audio from "../assets/img/vintage_audio_equipment_white.svg";
import console from "../assets/img/vintage_consoles_white.svg";
import mobile from "../assets/img/vintage_mobile_phones_white.svg";
import radios from "../assets/img/vintage_radios_white.svg";
import watches from "../assets/img/vintage_watches_and_clocks_white.svg";

export function Categories() {
    return (
        <>
            <nav className="pageCategories">
                <section className="categories">
                    <div>
                        <img src={computers} alt="Retro Computers" />
                        <a href="#">Retro Computers</a>
                    </div>
                    <div>
                        <img src={console} alt="Vintage Consoles" />
                        <a href="#">Vintage Consoles</a>
                    </div>
                    <div>
                        <img src={televisions} alt="Retro Televisions" />
                        <a href="#">Retro Televisions</a>
                    </div>
                    <div>
                        <img src={audio} alt="Vintage Audio Equipment" />
                        <a href="#">Vintage Audio Equipment</a>
                    </div>
                    <div>
                        <img src={cameras} alt="Retro Cameras" />
                        <a href="#">Retro Cameras</a>
                    </div>
                    <div>
                        <img src={mobile} alt="Vintage Mobile Phones" />
                        <a href="#">Vintage Mobile Phones</a>
                    </div>
                    <div>
                        <img src={accesories} alt="Retro Gaming Accessories" />
                        <a href="#">Retro Gaming Accessories</a>
                    </div>
                    <div>
                        <img src={radios} alt="Vintage Radios" />
                        <a href="#">Vintage Radios</a>
                    </div>
                    <div>
                        <img src={calculators} alt="Retro Calculators" />
                        <a href="#">Retro Calculators</a>
                    </div>
                    <div>
                        <img src={watches} alt="Vintage Watches & Clocks" />
                        <a href="#">Vintage Watches & Clocks</a>
                    </div>
                    <div>
                        <img src={user} alt="Retro Office Equipment" />
                        <a href="#">Retro Office Equipment</a>
                    </div>
                </section>
            </nav>
        </>
    );
}
