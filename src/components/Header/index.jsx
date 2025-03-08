import { useContext } from "react";
import {CartContext} from "../../store/shopping-cart-store"
export default function Header() {
    const {items, showModal} = useContext(CartContext);
    return (
        <header>
            <h1>Book Store</h1>
            <button id="cart-button" onClick={showModal}>Cart (<span id="cart-count">{items.length}</span>)</button>
        </header>
    );
}