
import { fetchAllProducts } from "@/actions";
import ProductCard from "../components/product-card";
import { Badge } from "@/components/ui/badge";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async  function Home() {

  const getSession=await auth();//OAuth package
  console.log(getSession);
  if(!getSession?.user)redirect("/unauth-page");
  const getAllProducts=await fetchAllProducts();
    const data=getAllProducts?.data;


  return (
    <div>
      <Badge className="text-xl mt-2 ml-2">Shopping Cart Home</Badge>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 mx-auto p-2">
        {
          data && data.length>0 && data.map((item,index)=>(
            <div key={index}>
                <ProductCard item={item}></ProductCard>
              </div>

          ))
        }
      </div>
    </div>
  );
}
