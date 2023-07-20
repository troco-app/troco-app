import "../assets/css/ItemProduct.css";
import chinon from "../assets/img/chinon.png";
import masterSystem from "../assets/img/retro_master.png";
import turbosquid from "../assets/img/retro_turbo.png";

export function ItemProduct() {
    return (
        <section className="productContent">
            <h1 className="productH1">Most exchanges goodies:</h1>
            <div className="productContainer">
                <article className="product">
                    <div
                        className="imageProduct"
                        style={{ backgroundImage: `url(${chinon})` }}
                    ></div>
                    <div className="textProduct">
                        <h2 className="categoriesProduct">Retro Cameras</h2>
                        <h3 className="nameProduct">Chinon Super 8</h3>
                        <p className="paragraphProduct">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. 
                        </p>
                        <div className="userButtonWrapper">
                            <p className="userName">Richard Fortus</p>
                            <button onClick="#">EXCHANGE</button>
                        </div>
                    </div>
                </article>
                <article className="product">
                    <div
                        className="imageProduct"
                        style={{ backgroundImage: `url(${masterSystem})` }}
                    ></div>
                    <div className="textProduct">
                        <h2 className="categoriesProduct">Retro Consoles</h2>
                        <h3 className="nameProduct">Sega Master System</h3>
                        <p className="paragraphProduct">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. 
                        </p>
                        <div className="userButtonWrapper">
                            <p className="userName">Duff McKagan</p>
                            <button onClick="#">EXCHANGE</button>
                        </div>
                    </div>
                </article>
                <article className="product">
                    <div
                        className="imageProduct"
                        style={{ backgroundImage: `url(${turbosquid})` }}
                    ></div>
                    <div className="textProduct">
                        <h2 className="categoriesProduct">Vintage Radios</h2>
                        <h3 className="nameProduct">Turbo Squid</h3>
                        <p className="paragraphProduct">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                        <div className="userButtonWrapper">
                            <p className="userName">Slash</p>
                            <button onClick="#">EXCHANGE</button>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
