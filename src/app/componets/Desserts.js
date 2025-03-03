import styles from "./styles/Desserts.module.css";
import DessertCart from "./DessertCart";

export default function Desserts({ desserts }) {
    const dessertList = desserts.map(dessertItem => {
        return (
            <DessertCart 
                key={dessertItem.name}
                dessertItem={dessertItem}
            />
        )
    })
    return(
        <div className={styles.desserts}>
            <h1 className={styles.dessertsTitle}>Desserts</h1>
            <div className={styles.dessertsContent}>     
                {dessertList}
            </div>
        </div>
    );
}
