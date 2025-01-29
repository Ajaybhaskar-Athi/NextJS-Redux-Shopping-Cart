'use server'

import { signIn, signOut } from "@/auth";
// import { signIn, signOut } from "next-auth/react"; 

export const fetchAllProducts=async()=>{
    try{
        const res=await fetch('https://dummyjson.com/products',{
            method:"GET",
            cache:'no-cache'
        });
        const data=await res.json();
        // console.log(data.products);
        return{
            success:true,
            data: data?.products
        }
    }catch(err){
        console.log(err.message);
        return{
            success:false,
            message:"Error in Fetching the Products List"
        }
    }
}

export async function fetchProductDetails(id){
    console.log(id);
    try{
        const result=await fetch(`https://dummyjson.com/products/${id}`)
        const data=await result.json();
        // console.log(data);
        return{
            success:true,
            data: data
        }

    }   catch(err){
        console.log(err.message);
        return{
            success:false,
            message:"Error in Products Details Fetching!!"
        }
    }
}



export async function loginAction(){
    await signIn("github");
}

export async function logoutAction(){
 await signOut();
}