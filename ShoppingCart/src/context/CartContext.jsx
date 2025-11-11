import { createContext,useContext,useReducer } from "react";
import { CartReducer } from "../reducer/CartReducer";

const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalItems: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
    const  [state, dispatch] = useReducer(CartReducer, initialState);

    const addToCart = (product) => {
        const updatedCartItems = state.cartItems.concat(product);
        updateTotal(updatedCartItems);
        
        dispatch({
            type: 'ADD_TO_CART',
            payload:{product: updatedCartItems}
        });
    }

    const removeFromCart = (product) =>{
        const updatedCartItems = state.cartItems.filter(item => item.n !== product.n);
        updateTotal(updatedCartItems);
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload:{product: updatedCartItems}
        });
    } 

    const updateTotal=(products)=>{
        let total=0;
        products.forEach((item)=>{
            total+=parseInt(item.des);
        });
        dispatch({
            type:'UPDATE_TOTAL',
            payload:{totalAmount:total}
        });
    }
    


    const value={
        total:state.cartItems.length,
        addToCart,
        removeFromCart,
        cartItems:state.cartItems,
        totalAmount:state.totalAmount
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );

}



export const useCart=() => {
    return useContext(CartContext);
}