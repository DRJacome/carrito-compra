import { useId } from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import PropTypes from "prop-types";
import "./Cart.css";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
    return (
        <>
            <li>
                <img src={thumbnail} alt={title} />
                <div>
                    <strong>{title}</strong> - ${price}
                </div>
                <footer>
                    <small>Cantidad: {quantity}</small>
                    <button onClick={addToCart}>+</button>
                </footer>
            </li>
        </>
    );
}

export function Cart() {
    const cartCheckboxId = useId();
    const { cart, clearCart, addToCart } = useCart();
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input id={cartCheckboxId} type='checkbox' hidden />

            <aside className='cart'>
                <span>Cesta:</span>
                <ul>
                    {cart.map((product) => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                        />
                    ))}
                </ul>
                <button className='clearCartButton' onClick={clearCart}>
                    <ClearCartIcon />
                    Vaciar carrito
                </button>
            </aside>
        </>
    );
}

CartItem.propTypes = {
    thumbnail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
};
