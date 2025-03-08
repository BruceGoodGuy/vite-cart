import { useContext } from "react";
import { CartContext } from "../../store/shopping-cart-store";

export default function Cart({product}) {
    const {addToCart} = useContext(CartContext);
    return (
        <div className="book">
            <img src={product.image} alt="Book 1" />
            <h3>{product.name} - {product.author}</h3>
            <p>{product.summary.slice(0, 50)}{product.summary.length > 50 && '...'}</p>
            <p className="price">{product.price}</p>
            <button onClick={() => addToCart(product.id)} className="add-to-cart" data-name="Book 1" data-price={product.price}>Add to Cart</button>
        </div>
    );
}