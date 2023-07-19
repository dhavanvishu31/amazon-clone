import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";

const Max_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (Max_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
        {category}
      </p>
      <Image  src={image} height={200} width={200} objectfit="contain" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2 ">{description}</p>
      <div className="mb-5">
        <Currency quantity={price} />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img
            className="w-25 pt-5"
            src="https://images-na.ssl-images-amazon.com/images/G/01/prime/delivery-landingpage/prime_logo_new._V524737024_.jpg"
            alt=""
          />
          <p className="mb-10 text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}

      <button className="mt-auto     p-2 text-xs md: text-sm bg-gradient-to-b from-yellow-200 to-yellow-400 border border-yellow-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 active:from-yellow-500 ">Add to Basket</button>
    </div>
  );
}

export default Product;
