import { getData } from "@/Servicess/products";
import Modal from "@/components/core/Modal/Index";

export default async function detailProduct(props: any) {
  const { params } = props;
  const product = await getData(
    "http://localhost:3000/api/product/?id=" + params.id
  );
  return (
    <Modal>
      <img
        src={product.data.image}
        alt=""
        className="w-full object-cover aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h3 className="text-black font-bold text-xl">{product.data.title}</h3>
        <p className="text-black">Price: ${product.data.price}</p>
      </div>
    </Modal>
  );
}
