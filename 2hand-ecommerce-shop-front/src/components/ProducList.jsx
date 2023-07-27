import "../assets/css/ProductList.css";
/* eslint-disable react/prop-types */
export function ProductList({ products }) {
    const BASE_URL = import.meta.env.VITE_APP_BASE_URL;

    return (
        <div className="sellerProductItems">
            <h1 className="productListH1">Things offered for exchange:</h1>
            {products
                .filter((product) => product.status === "available")
                .map((product) => (
                    <section className="productListContent" key={product.id}>
                        <div className="listContainer">
                            <div className="productUser">
                                <div className="imageProduct">
                                    <img
                                        src={`${BASE_URL}${product.imageURL}`}
                                        alt={product.name}
                                    />
                                </div>
                                <div className="textProductList">
                                    <h2 className="titleProduct">
                                        <a
                                            className="aTitleProduct"
                                            href={`/product/${product.id}`}
                                        >
                                            {product.name}
                                        </a>
                                    </h2>
                                    <p className="paragraphProductList">
                                        <a
                                            href={`/category/${product.category_id}`}
                                        >
                                            {product.category_name}
                                        </a>
                                    </p>
                                    <p className="nameUserProduct">
                                        Sold by: {product.username}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                ))}
        </div>
    );
}
