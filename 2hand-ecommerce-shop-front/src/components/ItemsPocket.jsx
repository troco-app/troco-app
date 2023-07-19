import "../assets/css/ItemsPocket.css";
import canon from "../assets/img/canon.png";
import telefunken from "../assets/img/telefunken.png";
import cube from "../assets/img/cube.png";

export function ItemsPocket() {
    return (
        <section className="itemContent">
            <h1 className="itemH1">Fresh from the oven:</h1>
            <div className="itemsContainer">
                <article className="item">
                    <div
                        className="imageItem"
                        style={{ backgroundImage: `url(${canon})` }}
                    ></div>
                    <div className="textItem">
                        <h2 className="titleItem">Camera Canon AE-1</h2>
                        <p className="paragraphItem">
                            Lorem ipsum dolor 
                        </p>
                        <p className="nameUser">George Sexy</p>
                    </div>
                </article>
                <article className="item">
                    <div
                        className="imageItem"
                        style={{ backgroundImage: `url(${telefunken})` }}
                    ></div>
                    <div className="textItem">
                        <h2 className="titleItem">Telefunken TV Retro</h2>
                        <p className="paragraphItem">
                            Lorem ipsum dolor 
                        </p>
                        <p className="nameUser">Saul Hudson</p>
                    </div>
                </article>
                <article className="item">
                    <div
                        className="imageItem"
                        style={{ backgroundImage: `url(${cube})` }}
                    ></div>
                    <div className="textItem">
                        <h2 className="titleItem">Nintendo Game Cube</h2>
                        <p className="paragraphItem">
                            Lorem ipsum dolor 
                        </p>
                        <p className="nameUser">Axl Rose</p>
                    </div>
                </article>
            </div>
        </section>
    );
}
