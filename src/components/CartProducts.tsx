import Image from "next/image";
import React from "react";
import FormatedPrice from "./FormatedPrice";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
} from "@/store/nextSlice";

interface Item {
  brand: string;
  category: string;
  description: string;
  image: string;
  isNew: boolean;
  oldPrice: number;
  price: number;
  title: string;
  _id: number;
  quantity: number;
}

interface cartProductsProps {
  item: Item;
}

function CartProducts({ item }: cartProductsProps) {
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 rounded-lg flex items-center gap-4">
      <Image
        className="object-cover"
        height={150}
        width={150}
        src={item.image}
        alt="product_image"
      />
      <div className="flex items-center px-2 gap-4">
        <div className="flex flex-col gap-1">
          <p className="text-amazon_blue text-xl font-semibold">{item.title}</p>
          <p className="text-sm  text-gray-600">{item.description}</p>
          <p className="flex gap-2 text-sm text-gray-600">
            Unit Price
            <span className="font-semibold text-amazon_blue">
              <FormatedPrice amount={item.price} />
            </span>
          </p>
          <div className="flex gap-6 items-center">
            <div className="justify-between flex items-center mt-1 border border-gray-300 px-4 py-1 rounded-full w-28 shadow-lg shadow-gray-300">
              <span
                onClick={() =>
                  dispatch(
                    increaseQuantity({
                      brand: item.brand,
                      category: item.category,
                      description: item.description,
                      image: item.image,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      _id: item._id,
                      quantity: 1,
                    })
                  )
                }
                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer duration-300"
              >
                <LuPlus />
              </span>
              <span>{item.quantity}</span>
              <span
                onClick={() =>
                  dispatch(
                    decreaseQuantity({
                      brand: item.brand,
                      category: item.category,
                      description: item.description,
                      image: item.image,
                      isNew: item.isNew,
                      oldPrice: item.oldPrice,
                      price: item.price,
                      title: item.title,
                      _id: item._id,
                      quantity: 1,
                    })
                  )
                }
                className="w-6 h-6 flex items-center justify-center rounded-full text-base bg-transparent hover:bg-gray-300 cursor-pointer duration-300"
              >
                <LuMinus />
              </span>
            </div>
            <div
              onClick={() =>
                dispatch(
                  deleteProduct(item._id)
                )
              }
              className="text-sm flex text-gray-400 items-center font-medium hover:text-red-600 cursor-pointer duration-300"
            >
              <IoMdClose className="mt-[2px]" />
              <p>remove</p>
            </div>
          </div>
        </div>
        <div className="text-lg font-semibold text-amazon_blue">
          <FormatedPrice amount={item.price * item.quantity} />
        </div>
      </div>
    </div>
  );
}

export default CartProducts;
