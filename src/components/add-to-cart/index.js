

'use client'

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { addToCart, removeFromCart } from "@/store/slices/cart-slice";

const AddToCartButton = ({ productItem }) => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  // Check if the product is already in the cart
  const isInCart = cartItems.some((item) => item.id === productItem.id);

  const handleAdd = () => {
    dispatch(addToCart(productItem));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(productItem.id)); 
  };

  return (
    <div className="mt-8 max-w-md">
      <Button type="button" onClick={isInCart ? handleRemove : handleAdd}>
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default AddToCartButton;
