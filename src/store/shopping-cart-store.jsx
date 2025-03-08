import { createContext, use, useReducer, useState } from "react";
import {Books} from '../data/books';

export const CartContext = createContext({ items: [] });

function reducer(carts, action) {
    switch (action.type) {
        case 'ADD':
            const id = action.id;
            const book = Books.find(book => book.id === id);
            if (!book) {
                return;
            }
            const cloneCarts = carts.items.map(cart => ({...cart}));
            let countItem = 0;
            for (let item of cloneCarts) {
                if (item.id === id) {
                    countItem++;
                    item.quantity++;
                }
            }
            if (countItem === 0) {
                cloneCarts.push({
                    id: book.id,
                    name: book.name,
                    author: book.author,
                    price: book.price,
                    quantity: 1,
                });
            }
            return {...carts, items: cloneCarts};
        case 'SHOW':
            return {...carts, show: !carts.show};
        default:
            return carts;
    }
}

export default function ShoppingCardProvider({ children }) {
    const [carts, dispatchReducer] = useReducer(reducer, {items: [], show: false})

    const addToCart = function(id) {
        dispatchReducer({type: 'ADD', id: id});
    }

    const showModal = function() {
        dispatchReducer({type: 'SHOW'});
    }

    const ctxValue = {
        items: carts.items,
        show: carts.show,
        addToCart,
        showModal,
    }

  return <CartContext value={ctxValue}>{children}</CartContext>;
}
