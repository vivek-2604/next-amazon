import { resetCart } from "@/store/nextSlice";
import React from "react";
import { useDispatch } from "react-redux";

function ResetCart() {
  const dispatch = useDispatch();
  const resetCartHandler = () => {
    const confirmReset = window.confirm("Are You Sure?");
    if (confirmReset) dispatch(resetCart());
  };

  return (
    <button
      onClick={resetCartHandler}
      className="w-44 h-10 bg-gray-200 font-semibold text-amazon_blue rounded-lg hover:bg-red-600 hover:text-white duration-300 "
    >
      Reset Cart
    </button>
  );
}

export default ResetCart;
