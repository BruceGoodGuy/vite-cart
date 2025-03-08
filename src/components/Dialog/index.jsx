import { useContext } from "react";
import { CartContext } from "../../store/shopping-cart-store";

export default function Dialog() {
    const {show, items, showModal} = useContext(CartContext);
    let total = 0;
    return (
        <div id="cart-dialog" className="dialog" style={{display: show && 'flex'}}>
            <div className="dialog-content">
            <h2>Your Cart</h2>
            <ul id="cart-items">
                {
                    items.map(item => {
                        total += item.price * item.quantity;
                        return <li key={item.id}>{item.name} ({item.author}) - {item.quantity} - {item.price}$ - {item.price * item.quantity}$</li>
                    })
                }
            </ul>
            <p>Total: $<span id="cart-total">{total}</span></p>
            <button id="close-cart" onClick={showModal}>Close</button>
            </div>
        </div>
    );
}