import { SiMediamarkt } from "react-icons/si";
import FormatedPrice from "./FormatedPrice";
import { useSelector } from "react-redux";
import { StateProps, StoreProducts } from "../../type";
import { useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";


function CartPayment() {
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state.next
  );
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    let amt = 0;
    productData.map((item: StoreProducts) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmount(amt);
  }, [productData]);

  return (
    <div className="flex flex-col gap-4 px-2">
      <div className="flex gap-2">
        <span className="bg-green-600 rounded-full m-1 p-1 h-6 w-6 text-sm text-white flex items-center justify-center mt-1">
          <SiMediamarkt />
        </span>
        <p className="text-sm">
          your order qualifies for Free Shipping by Choosing this option at
          Checkout. See details....
        </p>
      </div>
      <p className="flex items-center justify-between px-2 font-semibold">
        Total:{" "}
        <span className="font-bold text-xl">
          <FormatedPrice amount={totalAmount} />
        </span>
      </p>
      {userInfo ? (
        <div className="flex flex-col items-center gap-2">
            <button className="w-full h-10 text-sm font-semibold bg-amazon_blue hover:bg-amazon_yellow hover:text-amazon_blue text-white rounded-lg cursor-pointer">
              Proceed to Buy
            </button>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-2">
          <button className="w-full h-10 text-sm font-semibold bg-amazon_blue bg-opacity-50 text-white rounded-lg cursor-not-allowed">
            Proceed to Buy
          </button>
          <p className="text-sm mt-1 text-red-500 animate-bounce">
            please login to continue
          </p>
        </div>
      )}
    </div>
  );
}

export default CartPayment;
