import "../assets/css/Categories.css";
import calculators from "../assets/img/retro_calculators_white.svg";
import cameras from "../assets/img/retro_cameras_white.svg";
import computers from "../assets/img/retro_computers_white.svg";
import accesories from "../assets/img/retro_gaming_accesories_white.svg";
import televisions from "../assets/img/retro_televisions_white.svg";
import office from "../assets/img/Retro_office_equipment_white.svg";
import audio from "../assets/img/vintage_audio_equipment_white.svg";
import console from "../assets/img/vintage_consoles_white.svg";
import mobile from "../assets/img/vintage_mobile_phones_white.svg";
import radios from "../assets/img/vintage_radios_white.svg";
import watches from "../assets/img/vintage_watches_and_clocks_white.svg";

import { useRef } from "react";

export function Categories() {
    const categoriesRef = useRef(null);

    const handleScrollLeft = () => {
        categoriesRef.current.scrollBy({
            left: -250,
            behavior: "smooth",
        });
    };

    const handleScrollRight = () => {
        categoriesRef.current.scrollBy({
            left: 250,
            behavior: "smooth",
        });
    };

    return (
        <>
            <nav className="pageCategories">
                <div className="scroll left" onClick={handleScrollLeft}>
                    <span>
                        <i
                            className="material-symbols-rounded "
                            id="scroll-left"
                        >
                            chevron_left
                        </i>
                    </span>
                </div>
                <section className="categories" ref={categoriesRef}>
                    <div>
                        <img src={computers} alt="Retro Computers" />
                        <a href="#">Computers</a>
                    </div>
                    <div>
                        <img src={console} alt="Vintage Consoles" />
                        <a href="#">Consoles</a>
                    </div>
                    <div>
                        <img src={televisions} alt="Retro Televisions" />
                        <a href="#">Televisions</a>
                    </div>
                    <div>
                        <img src={audio} alt="Vintage Audio Equipment" />
                        <a href="#">Audio Equipment</a>
                    </div>
                    <div>
                        <img src={cameras} alt="Retro Cameras" />
                        <a href="#">Cameras</a>
                    </div>
                    <div>
                        <img src={mobile} alt="Vintage Mobile Phones" />
                        <a href="#">Mobile Phones</a>
                    </div>
                    <div>
                        <img src={accesories} alt="Retro Gaming Accessories" />
                        <a href="#">Gaming Accessories</a>
                    </div>
                    <div>
                        <img src={radios} alt="Vintage Radios" />
                        <a href="#">Radios</a>
                    </div>
                    <div>
                        <img src={calculators} alt="Retro Calculators" />
                        <a href="#">Calculators</a>
                    </div>
                    <div>
                        <img src={watches} alt="Vintage Watches & Clocks" />
                        <a href="#">Watches & Clocks</a>
                    </div>
                    <div>
                        <img src={office} alt="Retro Office Equipment" />
                        <a href="#">Office Equipment</a>
                    </div>
                </section>

                <div className="scroll right" onClick={handleScrollRight}>
                    <span>
                        <i
                            className="material-symbols-rounded "
                            id="scroll-right"
                        >
                            chevron_right
                        </i>
                    </span>
                </div>
            </nav>
        </>
    );
}
