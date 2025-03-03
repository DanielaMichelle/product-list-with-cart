import styles from "./styles/OrderCart.module.css";
import Image from "next/image"; 
import { useContext } from "react";
import { UserDessertsDispatchContext} from '../UserDessertsContext.js'


export default function OrderCart({ userDessertItem }) {
    const userDessertsDispatch = useContext(UserDessertsDispatchContext);

    return (
        <div className={styles.orderCart}> 
            <div className={styles.orderCartContent}>
                <h4>{userDessertItem.name}</h4>
                <div>
                    <span className={styles.quantity}>{userDessertItem.quantity}x</span>
                    <span className={styles.singlePrice}>${userDessertItem.price.toFixed(2)}</span>
                    <span className={styles.totalPrice}>${(userDessertItem.quantity * userDessertItem.price).toFixed(2)}</span>
                </div>
            </div>
            <div role="button" onClick={() => {
                userDessertsDispatch({
                    type: 'removeGroupDessert',
                    dessertItem: userDessertItem,
                })
            }} className={styles.orderCartRemoveBtn}>
                <Image 
                    className={styles.removeIcon}
                    src="/assets/images/icon-remove-item.svg"
                    width={10}
                    height={10}
                    alt="remove item"
                />
            </div>
        </div>
    );
}
