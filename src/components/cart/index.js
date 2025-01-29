
'use client'

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "@/store/slices/cart-slice";
import { Button } from "../ui/button";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log("In Cart Route", cartItems);
  
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);

  const handleRemove = (id) => {
    console.log("Removing item with ID:", id);
    dispatch(removeFromCart(id));
  };

  useEffect(() => {
    // Ensure that the total is correctly calculated and set
    setTotalAmount(
      cartItems.reduce((acc, curr) => acc + (curr?.price || 0), 0)
    );
  }, [cartItems]);

  return (
    <div className="bg-white py-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-[#333]">Cart</h2>
        <div className="overflow-y-auto">
          {cartItems.length > 0 ? (
            <table className="mt-12 w-full border-collapse divide-y">
              <thead className="whitespace-nowrap text-left">
                <tr>
                  <th className="text-base text-gray-700 p-4">Title</th>
                  <th>Price</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="whitespace-nowrap divide-y">
                {cartItems.map((item) => (
                  <tr key={item?.id}>
                    <td className="py-5 px-4">
                      <div className="flex items-center gap-6 w-max">
                        <div className="h-36 shrink-0">
                          <img
                            src={item?.thumbnail}
                            alt={item?.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <p className="text-lg font-bold text-black">
                            {item?.title}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <p>{item?.price}</p>
                    </td>
                    <td className="py-5 px-4">
                      <Button onClick={() => handleRemove(item?.id)}>
                        Remove
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No items in the cart.</p>
          )}
          
        </div>
        <div className="max-w-xl ml-auto mt-6">
          <div>
            <p className="text-lg font-bold">
              Total <span>{totalAmount}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
