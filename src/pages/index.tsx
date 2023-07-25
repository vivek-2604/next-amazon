import Banner from "@/components/Banner";
import Product from "@/components/Product";
import ProductsProps from "../../type";

interface Props {
  productData: { ProductsProps: any };
}

export default function Home({ productData }: Props) {
  return (
    <main>
      <div className="max-w-screen-3xl mx-auto">
        <Banner />
        <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Product productData={productData} />
        </div>
      </div>
    </main>
  );
}

//SSR for data fetching
export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};
