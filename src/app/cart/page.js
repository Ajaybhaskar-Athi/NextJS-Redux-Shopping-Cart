const { default: Cart } = require("@/components/cart")

import { auth } from "@/auth";
import { redirect } from "next/navigation";

const CartPage=async ()=>{
      const getSession=await auth();//OAuth package
      if(!getSession?.user)redirect("/unauth-page");
    return <Cart/>
}

export default CartPage;