const { createSlice } = require("@reduxjs/toolkit")


const initialState={
    cartItems:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
            console.log("Before Adding",action.payload);
                // state.cartItems.push(action.payload);//may behave differently 
                state.cartItems = [...state.cartItems, action.payload];
                console.log("In Cart Slice",state.cartItems);
        },
        removeFromCart(state,action){
            let temp=[...state.cartItems];
            temp=temp.filter(item=>item.id!==action.payload);
            state.cartItems=temp;
            console.log(state.cartItems);
            // return state;
        }

    }
});

export const {addToCart,removeFromCart}=cartSlice.actions;
export default cartSlice.reducer;