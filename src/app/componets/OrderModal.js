import style from "./styles/OrderModal.module.css";
import Image from "next/image";

export default function OrderModal ({ userDessertItem }) {
    return (
        <div className={style.orderModal}>
            <div className={style.orderModalContent}>
                <div className={style.orderModalImageContainer}>
                    <Image 
                        className={style.orderModalImage}
                        src={userDessertItem.thumbnail}
                        width={50}
                        height={50}
                        alt={userDessertItem.name}
                    />
                </div>
                <div>
                    <h4 className={style.orderModalName}>{userDessertItem.name}</h4>
                    <div className={style.orderModalSpecifications}>
                        <span className={style.orderModalQuantity}>{userDessertItem.quantity}x</span>
                        <span className={style.orderModalPrice}>${userDessertItem.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
            <span className={style.orderModalTotalPrice}>
                ${(userDessertItem.quantity * userDessertItem.price).toFixed(2)}
            </span>
        </div>
    );
};