import { Icon } from "../components/Icon";
import "../pagesCSS/Categories.css";

export function Categories() {
    return (
        <section className="pageCategories">
            
            <nav className="categories">
                <div>
                    <Icon name="computer" className="icon" />
                    <a href="#">Retro Computers</a>
                </div>
                <div>
                    <Icon name="videogame_asset" className="icon" />
                    <a href="#">Vintage Consoles</a>
                </div>
                <div>
                    <Icon name="tv" className="icon" />
                    <a href="#">Retro Televisions</a>
                </div>
                <div>
                    <Icon name="audio_video_receiver" className="icon" />
                    <a href="#">Vintage Audio Equipment</a>
                </div>
                <div>
                    <Icon name="linked_camera" className="icon" />
                    <a href="#">Retro Cameras</a>
                </div>
                <div>
                    <Icon name="phone_android" className="icon" />
                    <a href="#">Vintage Mobile Phones</a>
                </div>
                <div>
                    <Icon name="joystick" className="icon" />
                    <a href="#">Retro Gaming Accessories</a>
                </div>
                <div>
                    <Icon name="radio" className="icon" />
                    <a href="#">Vintage Radios</a>
                </div>
                <div>
                    <Icon name="calculate" className="icon" />
                    <a href="#">Retro Calculators</a>
                </div>
                <div>
                    <Icon name="watch" className="icon" />
                    <a href="#">Vintage Watches & Clocks</a>
                </div>
                <div>
                    <Icon name="print" className="icon" />
                    <a href="#">Retro Office Equipment</a>
                </div>
            </nav>
        </section>
    );
}
