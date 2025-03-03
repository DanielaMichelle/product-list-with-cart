import styles from './styles/DessertModal.module.css';
import Image from 'next/image';
import OrderModal from './OrderModal.js';
import { useContext } from 'react';
import { UserDessertsContext, UserDessertsDispatchContext } from '../UserDessertsContext.js'


export default function DessertModal({ setShowModal }) {

    const userDesserts = useContext(UserDessertsContext);
    const userDessertsDispatch = useContext(UserDessertsDispatchContext);
    const totalOrder = userDesserts.reduce((total, dessert) => total + (dessert.quantity * dessert.price), 0);
    
    const ordersList = userDesserts.map(userDessertItem => {
        return (
            <OrderModal 
                key={userDessertItem.name}
                userDessertItem={userDessertItem}
            />
        );
    });

    return (
        <dialog className={styles.dessertModal}>
            <div className={styles.dessertModalContent}>
                <Image 
                    className={styles.dessertModalImage}
                    src={"/assets/images/icon-order-confirmed.svg"}
                    alt='Order Confirmed'
                    width={32}
                    height={32}
                />
                <h3>Order Confirmed</h3>
                <p>We hope you enjoy your food!</p>
                
                <div className={styles.order}>
                    {ordersList}
                    <div className={styles.orderTotalPrice}>
                        <span>Order Total</span>
                        <span>${totalOrder.toFixed(2)}</span>
                    </div>
                </div>
                
                <button onClick={() =>{
                    setShowModal(false);
                    userDessertsDispatch({type: 'cleanUserDesserts'});
                }} className={styles.dessertModalBtn}>Start New Order</button>
            </div>

        </dialog>
    )
}