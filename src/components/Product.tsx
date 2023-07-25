import Image from "next/image";
import { ProductsProps } from "../../type";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";
import FormatedPrice from "./FormatedPrice";
import { useDispatch } from "react-redux";
import { addToCart, addToFavorite } from "@/store/nextSlice";

function Product({ productData }: any) {
  console.log(productData);
  const dispatch = useDispatch();

  return (
    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
      {productData.map(
        ({
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
          title,
          _id,
        }: ProductsProps) => (
          <div
            key={_id}
            className="w-full bg-white rounded-lg p-4 text-black  border border-gray-300 group overflow-hidden"
          >
            <div className="w-full h-[360px] relative">
              <Image
                className="w-full h-full object-cover scale-90 hover:scale-105 transition-transform duration-300"
                width={200}
                height={200}
                src={image}
                alt="product_iamge"
              />
              <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
                <span
                  onClick={() =>
                    dispatch(
                      addToCart({
                        brand: brand,
                        category: category,
                        description: description,
                        image: image,
                        isNew: isNew,
                        oldPrice: oldPrice,
                        price: price,
                        title: title,
                        _id: _id,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"
                >
                  <HiShoppingCart />
                </span>
                <span
                  onClick={() =>
                    dispatch(
                      addToFavorite({
                        brand: brand,
                        category: category,
                        description: description,
                        image: image,
                        isNew: isNew,
                        oldPrice: oldPrice,
                        price: price,
                        title: title,
                        _id: _id,
                        quantity: 1,
                      })
                    )
                  }
                  className="w-full h-full flex items-center justify-center text-xl bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300"
                >
                  <FaHeart />
                </span>
              </div>
              {isNew && (
                <p className="absolute top-0 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce">
                  !save <FormatedPrice amount={oldPrice - price} />
                </p>
              )}
            </div>
            <hr />
            <div className="px-4 py-3 flex flex-col gap-1">
              <p className="tracking-wide text-xs text-gray-500">{category}</p>
              <p className="font-medium text-base">{title}</p>
              <p className="items-center flex gap-2">
                <span className="text-sm line-through">
                  <FormatedPrice amount={oldPrice} />
                </span>
                <span className="text-amazon_blue font-semibold">
                  <FormatedPrice amount={price} />
                </span>
              </p>
              <p className="text-gray-600 text-xs text-justify">
                {description.substring(0, 120)}
              </p>
              <button
                onClick={() =>
                  dispatch(
                    addToCart({
                      brand: brand,
                      category: category,
                      description: description,
                      image: image,
                      isNew: isNew,
                      oldPrice: oldPrice,
                      price: price,
                      title: title,
                      _id: _id,
                      quantity: 1,
                    })
                  )
                }
                className="bg-amazon_blue text-white h-10 rounded-md font-medium mt-2 hover:bg-amazon_yellow hover:text-amazon_blue transition-transform duration-300 scale-100 hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Product;
