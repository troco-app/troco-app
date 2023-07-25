import "../assets/css/ProductList.css";
/* eslint-disable react/prop-types */
export function ProductList({ products }) {
    const BASE_URL = import.meta.env.VITE_APP_BASE_URL;
    
    return (
        <div className="sellerProducItems">
          <h1 className="productListH1">Things offer to exchange:</h1>
            {products
                .filter((product) => product.status === "available")
                .map((product) => (                 
                    <>
                        <section className="productListContent">
                        <div className="listContainer">
                            <article className="productUser">
                                <div className="imageProduct">
                                    <img                
                                        src={`${BASE_URL}${product.imageURL}`}
                                        alt={product.name}
                                    />
                                </div>
                                <div key={product.id} className="textProductList">
                                    <h2 className="titleProduct">{product.name}</h2>
                                    <p className="paragraphProductList">{product.category_name}</p>
                                    <p className="nameUserProduct">Sold by: {product.username}</p>
                                </div>
                            </article>
                        </div>
                        </section>
                    </>
                ))}
        </div>
    );
}
