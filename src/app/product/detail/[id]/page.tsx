"use client";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function DetailProduct(props: any) {
  const { params } = props;
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=${params.id}`,
    fetcher
  );
  console.log(data);
  const products = {
    data: data?.data,
  };
  // const product = await getData(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=` + params.id
  // );

  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <Image
          src={products?.data?.image}
          alt=""
          className="w-full object-cover aspect-square col-span-2"
          width={500}
          height={500}
        />
        <div className="bg-white p-4 px-6">
          <h3 className="text-black font-bold text-xl">
            {products?.data?.name}
          </h3>
          <p className="text-black">Price: ${products?.data?.price}</p>
        </div>
      </div>
    </div>
  );
}
