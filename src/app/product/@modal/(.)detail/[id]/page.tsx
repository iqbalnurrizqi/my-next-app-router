"use client"
import Modal from "@/components/core/Modal/Index";
import Image from "next/image";
import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());


export default function DetailProduct(props: any) {
  const { params } = props;
  const {data, error, isLoading} = useSWR(`${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=` + params.id, fetcher)
  console.log(data)
  const products = {
    data: data?.data
  }
  // const product = await getData(
  //   `${process.env.NEXT_PUBLIC_API_URL}/api/product/?id=` + params.id
  // );
  return (
    <Modal>
      <Image  
        src={products.data?.image}
        alt=""
        className=" object-cover aspect-square col-span-2"
        width={500}
        height={500}
      />
      <div className="bg-white p-4 px-6">
        <h3 className="text-black font-bold text-xl">{products.data?.name}</h3>
        <p className="text-black">Price: ${products.data?.price}</p>
        <p className="text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, numquam. Illum ipsam sit cum dicta doloremque adipisci repellendus, iure reiciendis!</p>
      </div>
    </Modal>
  );
}
