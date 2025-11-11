export const CartReducer=(state,action)=>{
    const {type,payload}=action;

    switch(type){
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: payload.product,
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: payload.product,
            };

        case 'UPDATE_TOTAL':
            return {
                ...state,
                totalAmount: payload.totalAmount,
            };
        default:
            return state;
    }


}