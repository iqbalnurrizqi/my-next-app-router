import { retrieveData, retrieveDataById } from "@/libs/firebase/services";
import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    title: "sepatu baru",
    price: 100000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dd62f510-4f88-4218-b630-8a6cf250f6fb/invincible-3-road-running-shoes-Bkj9VF.png"
  },
  {
    id: 2,
    title: "sepatu eribrow",
    price: 200000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/42675380-d8ce-461e-973d-629b4b23a3b3/pegasus-trail-4-gore-tex-waterproof-trail-running-shoes-pQ2Pzs.png"
  },
  {
    id: 3,
    title: "sepatu adibrow",
    price: 300000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/16646387-202c-4857-bb83-b44d6903819d/blazer-mid-77-se-older-shoes-rDgDHf.png"
  },
  {
    id: 4,
    title: "sepatu adibrow",
    price: 300000,
    image: "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/16646387-202c-4857-bb83-b44d6903819d/blazer-mid-77-se-older-shoes-rDgDHf.png"
  },

];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (id) {
    const DetailProduct = await retrieveDataById("products", id);
    if (DetailProduct) {
      return NextResponse.json({
        status: 200,
        message: "test api product success",
        data: DetailProduct,
      });
    }
    return NextResponse.json({
      status: 404,
      message: "data undefined",
      data: {},
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({
    status: 200,
    message: "test api product success",
    data: products,
  });
}
