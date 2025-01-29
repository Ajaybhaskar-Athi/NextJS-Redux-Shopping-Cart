import { auth } from "@/auth";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

import { redirect } from "next/navigation";

const UnAuthPage=async()=>{
    const getSession=await auth();
    if(getSession?.user)redirect("/");
    return(
        <div className="p-20">
            {/* <h2 className="text-6xl font-extrabold">You Are Not Logged In. Please LogIn</h2> */}
            <Alert>
  {/* <Terminal className="h-4 w-4" /> */}
  <AlertTitle className="text-red-500 font-bold text-xl">Heads up!</AlertTitle>
  <AlertDescription className="text-slate-700">
   <p>Please log in to continue. You need to be authenticated to access this page.  </p> 
    If you're having trouble, try refreshing the page or checking your network connection.
  </AlertDescription>
</Alert>

        </div>
    )
}

export default UnAuthPage;