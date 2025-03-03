import { createContext, useReducer } from "react";
import Data from "../../data.json";

export const UserDessertsContext = createContext(null);
export const UserDessertsDispatchContext = createContext(null);

export function UserDessertProvider({ children }) {
    const [userDesserts, userDessertsDispatch] = useReducer(userDessertsReducer, [])

    return (
        <UserDessertsContext.Provider value={userDesserts}>
            <UserDessertsDispatchContext.Provider value={userDessertsDispatch}>
                {children}
            </UserDessertsDispatchContext.Provider>
        </UserDessertsContext.Provider>
    );
}


function userDessertsReducer(userDesserts, action) {
    switch(action.type) {
      case 'addOneDessert': {
        if(userDesserts.some(dessert => dessert.name === action.dessertItem.name)) {
          return (userDesserts.map(dessert => 
              dessert.name === action.dessertItem.name ? {...dessert, quantity: dessert.quantity + 1} : dessert
          ));
        } else {
          let thumbnailImage;
          Data.map(dessert => {
            if(dessert.name === action.dessertItem.name) {
              thumbnailImage = dessert.image.thumbnail;
            }
          })
          return([...userDesserts, {name: action.dessertItem.name, price: action.dessertItem.price, quantity: 1, thumbnail: thumbnailImage}]);
        };
      }
  
      case 'removeOneDessert': {
        let newUserDesserts = userDesserts.map(dessert => 
            dessert.name === action.dessertItem.name ?  {...dessert, quantity: dessert.quantity - 1} : dessert
        );
        newUserDesserts = newUserDesserts.filter(dessert => dessert.quantity > 0);
        return [...newUserDesserts];
      }
  
      case 'removeGroupDessert': {
        return userDesserts.filter(dessert => dessert.name !== action.dessertItem.name);
      }

      case 'cleanUserDesserts': {
        return [];
      }
      
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }