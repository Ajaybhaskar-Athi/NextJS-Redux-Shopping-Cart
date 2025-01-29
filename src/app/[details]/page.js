import { fetchProductDetails } from "@/actions";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import AddToCartButton from "@/components/add-to-cart";
import UnAuthPage from "../unauth-page/page";

const ProductDetails = async ({ params }) => {


        const getSession=await auth();//OAuth package
        if(!getSession?.user)redirect("/unauth-page");
     


  const { details } = await params; //this is id
  const { data, success } = await fetchProductDetails(details);
//   console.log("In dispaly ", data);
  return (
    <div className="max-w-6xl mx-auto p-2">
      <div className="p-6">
        <div className="grid items-start grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3 bg-gray-100 w-full lg:sticky top-0 text-center p-8">
            <img
              src={data?.thumbnail}
              alt={data?.title}
              className="w-4/5 rounded object-cover"
            />
            <hr className="border-black border-2 my-6" />
            <div className="flex flex-wrap gap-5 justify-center mx-auto">
              {data?.images.map((item,index) => (
                <img src={item} alt={item} key={index} className="w-24 cursor-pointer" />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">{data?.title}</h2>
            <p className="text-gray-800 text-xl mt-5">{data?.price} $</p>
            <h3 className="text-lg font-bold text-gray-600">
              {data?.description}
            </h3>
            <AddToCartButton productItem={data}/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
