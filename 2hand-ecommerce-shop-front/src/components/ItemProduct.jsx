import "../assets/css/ItemProduct.css";
import chinon from "../assets/img/chinon.png";
import masterSystem from "../assets/img/retro_master.png";
import turbosquid from "../assets/img/retro_turbo.png";
import StarRating from "./StarRating";
import { FaHeart } from "react-icons/fa";

export function ItemProduct() {
    return (
        <section className="productContent">
            <h1 className="productH1">Most exchanges goodies:</h1>
            <div className="productContainer">
                <article className="product">
                    <div className="textProduct">
                        <div
                            className="imageProduct"
                            style={{ backgroundImage: `url(${chinon})` }}
                        ></div>
                        <a className="buttonWishList" href="/wishlist">
                            <button className="wishListButtonProduct">
                                <FaHeart className="faHeart" /> Wishlist
                            </button>
                        </a>
                        <h2 className="categoriesProduct">Retro Cameras</h2>
                        <h3 className="nameProduct">Chinon Super 8</h3>
                        <p className="paragraphProduct">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                        <div className="footerProduct">
                            <div className="valorationUser">
                                <p className="userName">Richard Fortus</p>
                                <StarRating />
                            </div>
                            <div className="contenedorUserButtonWrapper">
                                <a
                                    className="buttonExchangeProduct"
                                    href="/ExchangeProduct"
                                >
                                    <button
                                        className="userButtonWrapper"
                                        
                                    >
                                        EXCHANGE
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="product">
                    <div className="textProduct">
                        <div
                            className="imageProduct"
                            style={{ backgroundImage: `url(${masterSystem})` }}
                        ></div>

                        <a className="buttonWishList" href="/wishlist">
                            <button className="wishListButtonProduct">
                                <FaHeart className="faHeart" /> Wishlist
                            </button>
                        </a>

                        <h2 className="categoriesProduct">Retro Consoles</h2>
                        <h3 className="nameProduct">Sega Master System</h3>
                        <p className="paragraphProduct">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                        <div className="footerProduct">
                            <div className="valorationUser">
                                <p className="userName">Duff McKagan</p>
                                <StarRating />
                            </div>
                            <div className="contenedorUserButtonWrapper">
                                <a
                                    className="buttonExchangeProduct"
                                    href="/ExchangeProduct"
                                >
                                    <button
                                        className="userButtonWrapper"
                                        
                                    >
                                        EXCHANGE
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="product">
                    <div className="textProduct">
                        <div
                            className="imageProduct"
                            style={{ backgroundImage: `url(${turbosquid})` }}
                        ></div>
                        <a className="buttonWishList" href="/wishlist">
                            <button className="wishListButtonProduct">
                                <FaHeart className="faHeart" /> Wishlist
                            </button>
                        </a>
                        <h2 className="categoriesProduct">Retro Consoles</h2>
                        <h3 className="nameProduct">Sega Master System</h3>
                        <p className="paragraphProduct">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                        <div className="footerProduct">
                            <div className="valorationUser">
                                <p className="userName">Slash</p>
                                <StarRating />
                            </div>
                            <div className="contenedorUserButtonWrapper">
                                <a
                                    className="buttonExchangeProduct"
                                    href="/ExchangeProduct"
                                >
                                    <button
                                        className="userButtonWrapper"
                                        
                                    >
                                        EXCHANGE
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
}
