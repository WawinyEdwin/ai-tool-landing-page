"use client";
import { getProducts } from "@/lib/db";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import Divider from "../Common/Divider";

const Features = async () => {
  const productData: Product[] = await getProducts();
  return (
    <>
      <section id="features">
        <div className="container">
          <Divider />
          <div className="mt-4 grid items-center justify-center">
            {productData && productData.length > 1 ? (
              <>
                {productData.map((product) => (
                  <Link href={product.link} key={product.id}>
                    <div className="flex items-start space-x-4 pb-4">
                      <Image
                        src={product.logo}
                        alt="logo"
                        width={70}
                        height={70}
                        className=" rounded-lg object-cover"
                      />
                      <div className="justify-center">
                        <p className="">
                          {product.name} - {product.short_description}
                        </p>
                        <br />
                        <p>{product.category[0]?.name} </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </>
            ) : (
              <>
                Oops! No products to be showcased as per this time, try adding
                your product
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
