'use client';

import { useState, useEffect} from "react";
import { UserDessertProvider } from './UserDessertsContext'; 
import styles from "./page.module.css";
import Data from "../../data.json";
import Cart from "./componets/Cart.js";
import Desserts from "./componets/Desserts";
import DessertModal from "./componets/DessertModal";


export default function Home() {  
  const [desserts, setDesserts] = useState(Data);
  const [showModal, setShowModal] = useState(false);
  console.log('showModal', showModal);
  
  return(
      <UserDessertProvider>
        <main className={styles.home}>
          <Desserts desserts={desserts} />
          <Cart setShowModal={setShowModal}/>
          {showModal && <DessertModal setShowModal={setShowModal} />}
        </main>
      </UserDessertProvider>
  );  
}


// function userDessertsReducer(userDesserts, action) {
//   switch(action.type) {
//     case 'addOneDessert': {
//       if(userDesserts.some(dessert => dessert.name === action.dessertItem.name)) {
//         return (userDesserts.map(dessert => 
//             dessert.name === action.dessertItem.name ? {...dessert, quantity: dessert.quantity + 1} : dessert
//         ));
//       } else {
//         return([...userDesserts, {name: action.dessertItem.name, price: action.dessertItem.price, quantity: 1}]);
//       };
//     }

//     case 'removeOneDessert': {
//       let newUserDesserts = userDesserts.map(dessert => 
//           dessert.name === action.dessertItem.name ?  {...dessert, quantity: dessert.quantity - 1} : dessert
//       );
//       newUserDesserts = newUserDesserts.filter(dessert => dessert.quantity > 0);
//       return [...newUserDesserts];
//     }

//     case 'removeGroupDessert': {
//       return userDesserts.filter(dessert => dessert.name !== action.dessertItem.name);
//     }
//   }
// }

////////////////////////////////////////////////////////////////////

// function addOneDessertToUserDesserts(dessertItem) {
  //   userDessertsDispatch({
  //     type: 'addOneDessert',
  //     dessertItem: dessertItem,
  //   });
  // }

  // function removeOneDessertFromUserDesserts(dessertItem) {
  //   userDessertsDispatch({
  //     type: 'removeOneDessert',
  //     dessertItem: dessertItem,
  //   });
  // }

  // function removeGroupFromUserDesserts(dessertItem) {
  //   userDessertsDispatch({
  //     type: 'removeGroupDessert',
  //     dessertItem: dessertItem,
  //   })
  // }

// function addOneDessertToUserDessertsReducer(dessertItem) {
//   if(userDesserts.some(dessert => dessert.name === dessertItem.name)) {
//       setUserDesserts(prevUserDesserts => prevUserDesserts.map(dessert => 
//           dessert.name === dessertItem.name ? {...dessert, quantity: dessert.quantity + 1} : dessert
//       ));
//   } else {
//       setUserDesserts(prevUserDesserts => 
//           [...prevUserDesserts, {name: dessertItem.name, price: dessertItem.price, quantity: 1}]
//       );
//   }
// } 
////////////////////////////////////////////////////////////////////


// function removeOneDessertFromUserDessertsReducer(dessertItem) {
//     setUserDesserts(prevUserDesserts => {
//         let newUserDesserts = prevUserDesserts.map(dessert => 
//             dessert.name === dessertItem.name ?  {...dessert, quantity: dessert.quantity - 1} : dessert
//         );
//         newUserDesserts = newUserDesserts.filter(dessert => dessert.quantity > 0);
//         return [...newUserDesserts];
//     });
// }

// function removeGroupFromUserDessertsReducer(dessertItem) {
//   setUserDesserts(prevUserDesserts => {
//       return prevUserDesserts.filter(dessert => dessert.name !== dessertItem.name);
//   });
// }