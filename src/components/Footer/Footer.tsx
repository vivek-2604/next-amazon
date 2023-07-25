import Image from "next/image";
import logo from "../../images/logo.png";

const Footer = () => {
  return (
    <div className="gap-4 w-full h-20 bg-amazon_light text-geay-300 flex items-center justify-center">
      <Image className="w-24 justify-center mt-2" src={logo} alt="logo" />
      <p className="text-white text-xs">All Rights Reserved</p>
    </div>
  );
};

export default Footer;
