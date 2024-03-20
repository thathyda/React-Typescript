import { Card } from "flowbite-react";
import { Product } from "../HomeComponent";

export default function CardComponent({ title, image, price }: Product) {
  return (
    <Card className="max-w-sm">
      <img
        src={image}
        alt={title}
        className="object-cover w-full h-56"
      />
      <div className="p-4">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-black-900 dark:text-white">
            {title}
          </h5>
        </a>
        <div className="mb-5 mt-2.5 flex items-center">
          {/* Rating SVGs */}
          <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
            5.0
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-red-900 dark:text-white">
            ${price}
          </span>
          <a
            href="#"
            className="rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
          >
            Add to cart
          </a>
        </div>
      </div>
    </Card>
  );
}
