import styles from "./styles/Cart.module.css";
import Image from "next/image";
import OrderCart from "./OrderCart.js";
import { useContext } from "react";
import { UserDessertsContext } from '../UserDessertsContext.js'

export default function Cart({ setShowModal }) {

    const userDesserts = useContext(UserDessertsContext);
    const quantityDesserts = userDesserts.reduce((total, dessert) => total + dessert.quantity, 0);
    const totalOrder = userDesserts.reduce((total, dessert) => total + (dessert.quantity * dessert.price), 0); 

    const orderCarts = userDesserts.map(userDessertItem => {
        return (
            <OrderCart 
                key={userDessertItem.name}
                userDessertItem={userDessertItem}
            />
        );
    });

    return (
        <div className={styles.cart}>
            <h2 className={styles.cartTitle}>Your Cart (<span>{quantityDesserts}</span>)</h2>
            {
                userDesserts.length === 0 ?
                (<div className={styles.cartEmpty}>
                    <Image 
                        src={"/assets/images/illustration-empty-cart.svg"}
                        width={150}
                        height={150}
                        alt="Empty cart"
                    />
                    <p>Your added items will appear here</p>
                </div>)
                :
                (<>
                    <div className={styles.cartItems}>
                        {orderCarts}
                    </div>
                    <div className={styles.cartTotal}>
                        <span>Order Total</span>
                        <span>${totalOrder.toFixed(2)}</span>
                    </div>
                    <div className={styles.cartCarbonNeutralMsg}>
                        <Image
                            className={styles.carbonNeutralIcon} 
                            src="/assets/images/icon-carbon-neutral.svg"
                            width={20}
                            height={20}
                            alt="Carbon neutral"
                        />
                        <span>This is a <b>carbon-neutral</b> delibery</span>
                    </div>
                    <button onClick={() => setShowModal(true)} className={styles.confirmOrderBtn}>Confirm Order</button>
                </>) 
            }
        </div>
    );
}