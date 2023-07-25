import React from "react";
import { StateProps, StoreProducts } from "../../type";
import { useSelector } from "react-redux";
import CartProducts from "@/components/CartProducts";
import ResetCart from "@/components/ResetCart";
import Link from "next/link";
import CartPayment from "@/components/CartPayment";

function cart() {
  const { productData } = useSelector((state: StateProps) => state.next);

  return (
    <div className="max-w-screen-3xl mx-auto px-6 grid grid-cols-5 py-4 gap-10">
      {productData.length > 0 ? (
        <>
          <div className="bg-white p-4 col-span-4 rounded-lg">
            <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 pb-1">
              <p className="text-amazon_blue text-2xl font-semibold">
                Shopping Cart
              </p>
              <p className="text-amazon_blue text-lg font-semibold">Subtotal</p>
            </div>
            <div className="gap-2 flex flex-col pt-2">
              {productData.map((item: StoreProducts) => (
                <div key={item._id}>
                  <CartProducts item={item} />
                </div>
              ))}
              <ResetCart />
            </div>
          </div>
          <div className="rounded-lg items-center justify-center flex h-64 bg-white col-span-1">
            <CartPayment/>
          </div>
        </>
      ) : (
        <div className="bg-white h-64 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg gap-2 shadow-lg">
          <p className="font-medium text-lg text-amazon_blue">
            Cart is Empty!!
          </p>
          <Link href={"/"}>
            <button className="bg-amazon_blue border-black border-[1px] text-white rounded-md px-4 py-2 font-semibold text-sm hover:bg-amazon_yellow hover:text-amazon_blue">
              Go to Shopping!
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default cart;
