import { auth } from "@/auth";

const { default: ReduxProvider } = require("@/provider");
const { Children } = require("react");



const CommonLayout=async({children})=>{
    const getSession=await auth();
    return <ReduxProvider getSession={getSession}> {children}</ReduxProvider>;
}

export default CommonLayout;
