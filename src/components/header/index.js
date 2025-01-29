

import { loginAction, logoutAction } from "@/actions";
import { Button } from "../ui/button";

const { default: Link } = require("next/link")

const Header=({getSession})=>{
        console.log("In header getsession: ",getSession);

    const hanldeOauthSignIn=async()=>{
        await loginAction();
    }
    const hanldeOauthSignOut=async()=>{
        await logoutAction();
    }
    return(
        <div className="flex shadow-md py-4 px-4 bg-white min-h[70px] tracking-wide relative z-50">
            <div className="flex flex-wrap items-center justify-between gap-5 w-full">
            <Link href={"/"}>Shopping cart</Link>
            </div>
                <ul className="gap-6 items-center justify-center mr-10">
                    <li className="text-lg font-semibold">
                        <Link href={'/'}>Products</Link>
                    </li>
                    <li>
                        <Link href={'/cart'}>Cart</Link>
                    </li>
                </ul>
                
            <div className="flex space-x-3">
        <form action={getSession?.user ? hanldeOauthSignOut : hanldeOauthSignIn}>
            <Button type='submit' >{getSession?.user ?"LogOut":"LogIn"}</Button>
        </form>
            </div>
        </div>
    )
}

export default Header;