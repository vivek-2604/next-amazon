import Image from "next/image";
import logo from "../../images/logo.png";
import cartIcon from "../../images/cartIcon.png";
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../type";
import { useSession, signIn, signOut } from "next-auth/react";
import { data } from "autoprefixer";
import { useEffect } from "react";
import { addUser } from "@/store/nextSlice";

function Headers() {
  const dispatch = useDispatch();
  const { data: session } = useSession();
  const { productData, favoriteData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );

  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    }
  }, [session]);

  return (
    <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
      <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
        {/* Logo */}
        <Link
          href={"/"}
          className="px-2 border border-transparent hover:border-white cursure-pointer duration-300 flex justify-center items-center h-[70%]"
        >
          <Image className="w-28 object-cover mt-1" src={logo} alt={"logo"} />
        </Link>
        {/* Location */}
        <div className="px-2 border border-transparent hover:border-white cursure-pointer duration-300 justify-center items-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Delivery to</p>
            <p className="font-bold uppercase text-white">India</p>
          </div>
        </div>
        {/* Search */}
        <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
          <input
            className="h-full w-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
            type="text"
            placeholder="Search Products"
          />
          <span className="w-12 h-full bg-amazon_yellow text-black text-2xl flex items-center justify-center absolute right-0 rounded-md">
            <HiOutlineSearch />
          </span>
        </div>
        {/* signin */}
        {userInfo ? (
          <div className="flex items-center px-2 boreder border-transparent hover:border-white cursor-pointer duration-300 h-[70%] gap-1">
            <img
              src={userInfo.image}
              alt="user_image"
              className="w-8 h-8 rounded-full"
            />
            <div className="text-xs text-gray-100 flex flex-col justify-between">
              <p className="text-white font-bold">{userInfo.name}</p>
              <p className="text-">{userInfo.email}</p>
            </div>
          </div>
        ) : (
          <div
            onClick={() => signIn()}
            className="text-xs boreder border-transparent flex flex-col text-gray-100 justify-center px-2 hover:border-white cursor-pointer duration-300 h-[70%]"
          >
            <p>Hello, Sign in!</p>
            <p className="flex gap-0.5 text-white font-bold">
              Account & list{" "}
              <span className="mt-0.5 ">
                <BiCaretDown />
              </span>
            </p>
          </div>
        )}
        {/* favorit */}
        <div className="text-xs boreder border-transparent flex flex-col text-gray-100 justify-center px-2 hover:border-white cursor-pointer duration-300 h-[70%] relative">
          <p>Marked</p>
          <p className="text-white font-bold">& Favorite</p>
          {favoriteData.length > 0 && (
            <span className="absolute h-4 w-4 right-2 top-2 border-[1px] border-gray-400 flex items-center justify-center text-xs text-amazon_yellow ">
              {favoriteData.length}
            </span>
          )}
        </div>
        {/* cart */}
        <Link
          href={"/Cart"}
          className="flex items-center px-2 border border-transparent hover:border-white cursur-pointer duration-300 h-[70%] relative"
        >
          <Image
            className="w-auto object-cover h-8"
            src={cartIcon}
            alt="cartIcon"
          />
          <p className="text-white text-sm font-bold mt-3">cart</p>
          <span className="absolute text-sm font-semibold text-amazon_yellow top-2 left-[29px]">
            {productData ? productData.length : 0}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Headers;
