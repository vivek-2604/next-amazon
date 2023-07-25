import React from "react";
import { LuMenu } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../type";
import { signOut } from "next-auth/react";
import { removeUser } from "@/store/nextSlice";

function BottomHeader() {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state: StateProps) => state.next);

  const handleSignIn = () => {
    signOut();
    dispatch(removeUser());
  }

  return (
    <div className="bg-amazon_light w-full h-10 text-sm text-white px-4 items-center flex">
      <p className="flex items-center gap-1 h-8 border border-transparent hover:border-white px-2 cursor-pointer duration-300">
        <LuMenu /> All
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white px-2 cursor-pointer duration-300">
        Today's Deal
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white px-2 cursor-pointer duration-300">
        Customer Support
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white px-2 cursor-pointer duration-300">
        Registry
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white px-2 cursor-pointer duration-300">
        Gift Cart
      </p>
      <p className="hidden md:inline-flex items-center h-8 border border-transparent hover:border-white px-2 cursor-pointer duration-300">
        Sell
      </p>
      {userInfo && (
        <button
          onClick={handleSignIn}
          className="hidden md:inline-flex items-center h-8 border border-transparent gap-1 hover:text-red-400 hover:border-red-600 text-amazon_yellow px-2 cursor-pointer duration-300"
        >
          Sign Out
        </button>
      )}
    </div>
  );
}

export default BottomHeader;
