"use client";
import {
  faCircleQuestion,
  faHeart,
  faStar,
} from "@fortawesome/free-regular-svg-icons";
import { faCalendarDays, faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";
import Image from "next/image";
import ProductDescription from "./products/description";
import Shipping from "./products/shipping";
import GeneralTab from "./products/general_tab";
import Reviews from "./products/reviews";

interface ProductTechnical {
  [key: string]: string | Array<string>;
}

interface ProductData {
  product_id: string;
  product_brand: string;
  product_name: string;
  product_price: number;
  product_info: string;
  product_images: Array<string>;
  product_description: string;
  product_technical: ProductTechnical;
}

function ProductItem({ product_data }: { product_data: ProductData }) {
  const product_id = product_data.product_id || "";
  const product_brand = product_data.product_brand || "";
  const product_name = product_data.product_name || "";
  const product_price = product_data.product_price || 0;
  const product_info = product_data.product_info || "";
  const product_images = product_data.product_images || [];
  const product_description = product_data.product_description || "";
  const product_technical = product_data.product_technical || {};

  const [quantity, setQuantity] = useState(1);

  const [recent_select, setRecentSelect] = useState({
    'description': true,
    'shipping': false,
    'reviews': false,
    'general': false,
  });

  const disableSelectAll = {
    'description': false,
    'shipping': false,
    'reviews': false,
    'general': false,
  }

  const minusQtyHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const plusQtyHandler = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="p-8">
      <div className="grid grid-cols-5">
        <div className="col-span-3">
          <div className="overflow-hidden">
            <Image
              className="cursor-pointer transition duration-500 hover:scale-125"
              src={`/products/${product_id}/${product_images[0]}`}
              width={1800}
              height={1800}
              alt="Main Product Image"
            />
          </div>
          <div className="grid grid-cols-5">
            {product_images.map((image, index) => (
              <Image
                className="cursor-pointer focus:border"
                key={index}
                src={`/products/${product_id}/${image}`}
                width={150}
                height={150}
                alt="Product Image"
              />
            ))}
          </div>
        </div>
        <div className="col-span-2 flex flex-col justify-center">
          <p>{product_brand}</p>
          <h2 className="text-2xl font-bold">{product_name}</h2>
          <div className="mt-2 flex">
            <FontAwesomeIcon icon={faStar} className="h-4" />
            <FontAwesomeIcon icon={faStar} className="h-4" />
            <FontAwesomeIcon icon={faStar} className="h-4" />
            <FontAwesomeIcon icon={faStar} className="h-4" />
            <FontAwesomeIcon icon={faStar} className="h-4" />
          </div>
          <div className="mt-4 flex">
            <p className="text-lg font-semibold text-jasper">
              <span className="text-gray-600 line-through">$900.00</span>
              {` $${product_price}.00`}
            </p>
            <div className="ml-2 rounded bg-jasper px-2 py-1 text-sm text-white">
              Save $300
            </div>
          </div>
          <p className="mt-4 text-sm">{product_info}</p>
          <div className="flex items-center justify-between">
            <div className="my-4 inline-block rounded border">
              <button
                onClick={minusQtyHandler}
                id="qtyMinusBtn"
                className="py-2 pl-4 pr-3"
              >
                -
              </button>
              <input
                className="max-w-12 border-x py-2 pl-2 text-center"
                type="number"
                defaultValue={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                name="quantity"
                id="quantity"
              />
              <button
                onClick={plusQtyHandler}
                id="qtyPlusBtn"
                className="py-2 pl-3 pr-4"
              >
                +
              </button>
            </div>
            <div className="text-sm">
              <a href="">
                <FontAwesomeIcon icon={faHeart} className="h-4 mr-1" />
                Add to Wishlist
              </a>
              <a className="ml-2" href="">
                <FontAwesomeIcon icon={faCircleQuestion} className="h-4 mr-1" />
                Ask A Question
              </a>
            </div>
          </div>
          <div className="mt-3 w-full cursor-pointer rounded border border-yankees-blue bg-yankees-blue py-3 text-center text-sm uppercase text-white hover:bg-white hover:text-yankees-blue">
            add to cart
          </div>
          <div className="mt-3 w-full cursor-pointer rounded bg-mint py-3 text-center text-sm uppercase text-white">
            buy it now
          </div>
          <Image
            className="mt-4"
            src="/products/safe-checkout.jpg"
            width={781}
            height={51}
            alt="Safe Checkout"
          />
          <div className="mt-4 text-sm">
            <div>
              <FontAwesomeIcon icon={faTruck} className="h-4 mr-2" />
              Spent <span className="font-semibold">$199.00</span> more for free
              shipping
            </div>
            <div className="mt-4 h-2 rounded bg-gray-200"></div>
            <p className="mt-4">
              <FontAwesomeIcon icon={faCalendarDays} className="h-4 mr-2" />
              Estimated Delivery Between :{" "}
              <span className="font-semibold">11 January - 17 January</span>.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center font-semibold uppercase">
        <div className="hover:text-mint cursor-pointer px-6 py-2">
          <a
            className={(recent_select['description'] && "text-mint border-b-mint border-b-2") + " py-2"}
            onClick={(e) => {
              e.preventDefault();
              setRecentSelect((prev) => ({...disableSelectAll, 'description': true}));
            }}
            href="#"
          >
            description
          </a>
        </div>
        <div className="hover:text-mint cursor-pointer px-6 py-2">
        <a
            className={(recent_select['shipping'] && "text-mint border-b-mint border-b-2") + " py-2"}
            onClick={(e) => {
              e.preventDefault();
              setRecentSelect((prev) => ({...disableSelectAll, 'shipping': true}));
            }}
            href="#"
          >
            shipping & returns
          </a>
        </div>
        <div className="hover:text-mint cursor-pointer px-6 py-2">
          <a
            className={(recent_select['reviews'] && "text-mint border-b-mint border-b-2") + " py-2"}
            onClick={(e) => {
              e.preventDefault();
              setRecentSelect((prev) => ({...disableSelectAll, 'reviews': true}));
            }}
            href="#"
          >
            product reviews
          </a>
        </div>
        <div className="hover:text-mint cursor-pointer px-6 py-2">
          <a
            className={(recent_select['general'] && "text-mint border-b-mint border-b-2") + " py-2"}
            onClick={(e) => {
              e.preventDefault();
              setRecentSelect((prev) => ({...disableSelectAll, 'general': true}));
            }}
            href="#"
          >
            general tab
          </a>
        </div>
      </div>
      <hr />
      {recent_select['description'] && <ProductDescription product_data={product_data} />}
      {recent_select['shipping'] && <Shipping />}
      {recent_select['general'] && <GeneralTab />}
      {recent_select['reviews'] && <Reviews />}
    </div>
  );
}

export default ProductItem;
