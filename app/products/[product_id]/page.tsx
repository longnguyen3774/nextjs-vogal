import { fetchData } from "@/app/lib/data";
import ProductItem from "@/app/ui/product_item";
import {
  faCircleQuestion,
  faHeart,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState, useRef } from "react";

export default async function Page({
  params,
}: {
  params: { product_id: string };
}) {
  const id = params.product_id;

  const data = await fetchData(id);

  return (
    <>
      <ProductItem product_data={data} />
      <div className="bg-slate-100 px-8 py-16">
        <h2 className="text-center text-2xl font-semibold">
          Recommended Products
        </h2>
        <div className="mt-8 grid grid-cols-5 gap-5 text-sm">
          <div className="bg-white p-4">
            <div className="cursor-pointer overflow-hidden">
              <img
                className="duration-500 hover:scale-110"
                src="https://vogal-demo.myshopify.com/cdn/shop/products/newled.jpg?v=1673247422&width=1200"
                alt=""
              />
            </div>
            <div className="text-center">
              <p>32 inch HD Smart LED TV</p>
              <p className="my-2 font-semibold">$500.00</p>
              <div className="flex justify-center">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4">
            <div className="cursor-pointer overflow-hidden">
              <img
                className="duration-500 hover:scale-110"
                src="https://vogal-demo.myshopify.com/cdn/shop/products/4_1ce65a53-92c9-4ca9-87b4-4b4dafac2a91_1800x1800.jpg?v=1673257037"
                alt=""
              />
            </div>
            <div className="text-center">
              <p>Xbox Series Wireless Controller</p>
              <p className="my-2 font-semibold text-jasper">
                <span className="mr-2 text-gray-600 line-through">$600.00</span>
                $300.00
              </p>
              <div className="flex justify-center">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4">
            <div className="cursor-pointer overflow-hidden">
              <img
                className="duration-500 hover:scale-110"
                src="https://vogal-demo.myshopify.com/cdn/shop/products/6_0fa05577-aa4b-4495-89cf-8170db7b1c49.jpg?v=1673182470&width=1200"
                alt=""
              />
            </div>
            <div className="text-center">
              <p>Samsung S201FE Blue</p>
              <p className="my-2 font-semibold">$900.00</p>
              <div className="flex justify-center">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4">
            <div className="cursor-pointer overflow-hidden">
              <img
                className="duration-500 hover:scale-110"
                src="https://vogal-demo.myshopify.com/cdn/shop/products/6_875b0653-6e20-44d8-9e53-43f7e55d14c9_1800x1800.jpg?v=1673180746"
                alt=""
              />
            </div>
            <div className="text-center">
              <p>Airdopes 125 PRO</p>
              <p className="my-2 font-semibold">$50.00</p>
              <div className="flex justify-center">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
          <div className="bg-white p-4">
            <div className="cursor-pointer overflow-hidden">
              <img
                className="duration-500 hover:scale-110"
                src="https://vogal-demo.myshopify.com/cdn/shop/products/13_1800x1800.jpg?v=1673182606"
                alt=""
              />
            </div>
            <div className="text-center">
              <p>Samsung S201FE Pink</p>
              <p className="my-2 font-semibold text-jasper">
                <span className="mr-2 text-gray-600 line-through">
                  $1,400.00
                </span>
                $900.00
              </p>
              <div className="flex justify-center">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
