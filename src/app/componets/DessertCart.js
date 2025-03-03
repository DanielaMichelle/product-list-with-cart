import { useRef, useContext } from 'react';
import styles from './styles/DessertCart.module.css';
import Image from 'next/image';
import { UserDessertsContext, UserDessertsDispatchContext } from '../UserDessertsContext.js';

export default function DessertCart({ dessertItem }) {

    const imageContainerRef = useRef(null);
    const userDesserts = useContext(UserDessertsContext);
    const userDessertsDispatch = useContext(UserDessertsDispatchContext);

    function showBorderImageContainerRef() {
        imageContainerRef.current.style.border = "1.5px solid hsl(14, 86%, 42%)";  
    }

    function removeBorderImageContainerRef() {
        const itemDessertQuantity = userDesserts.map(dessert => {
            if(dessert.name === dessertItem.name) {
                return dessert;
            }
        })[0].quantity;
        
        itemDessertQuantity === 1 && (imageContainerRef.current.style.border = "none");
    }

    return (
        <div className={styles.dessertCart}>
            <div className={styles.dessertCartTop}>
                <figure ref={imageContainerRef} className={styles.dessertCartImageContainer}>
                    <Image 
                        className={styles.dessertCartImage}
                        src={dessertItem.image.desktop}
                        srcSet={
                            `${dessertItem.image.mobile} 425w,
                            ${dessertItem.image.tablet} 768w,
                            ${dessertItem.image.desktop} 1024w`
                        }
                        sizes="
                            (max-width: 425px) 425px,
                            (max-width: 768px) 768px,
                            1024px
                        "
                        width={200}
                        height={200}
                        alt={dessertItem.name}
                    />
                </figure>

                <button onClick={() =>{
                    userDessertsDispatch({
                        type: 'addOneDessert',
                        dessertItem: dessertItem,
                    });
                    // showBorderImageContainerRef();
                }} className={styles.addToCartBtn}>
                        <Image 
                            src={"/assets/images/icon-add-to-cart.svg"}
                            width={14}
                            height={14}
                            alt="Add to cart"
                        />
                        Add to cart
                </button>
                {
                    userDesserts.some(dessert => dessert.name === dessertItem.name) && 
                    <button className={styles.addOneDessertBtn}>
                    <figure role="button" onClick={() => {
                            userDessertsDispatch({
                                type: 'removeOneDessert',
                                dessertItem: dessertItem,
                            });
                            // removeBorderImageContainerRef();
                        }} className={styles.decrementIconContainer}>                   
                        <Image 
                            className={styles.decrementIcon}
                            src={"/assets/images/icon-decrement-quantity.svg"}
                            width={6}
                            height={6}
                            alt="Decrement quantity"
                        />
                    </figure>  
                    {
                        userDesserts.find(dessert => dessert.name === dessertItem.name).quantity
                    }
                    <figure role="button" onClick={() => {
                        userDessertsDispatch({
                            type: 'addOneDessert',
                            dessertItem: dessertItem,
                        });
                    }} className={styles.incrementIconContainer}>  
                        <Image 
                            className={styles.incrementIcon}
                            src={"/assets/images/icon-increment-quantity.svg"}
                            width={6}
                            height={6}
                            alt="Increment quantity"
                        />
                    </figure>
                    </button>
                }
            </div>        
            <div className={styles.dessertCartBottom}>
                <span className={styles.dessertCartType}>{dessertItem.category}</span>
                <h3>{dessertItem.name}</h3>
                <span className={styles.dessertCartPrice}>${dessertItem.price.toFixed(2)}</span>
            </div>
        </div>
    );
}