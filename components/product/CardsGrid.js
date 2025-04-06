"use client";
import Image from 'next/image';
import useHefcodeStore from '@/store/HecodeStore'; // Make sure this path is correct
import Link from 'next/link';

const CardsGrid = ({ Product }) => {
  const { setSelectedProduct } = useHefcodeStore();

  return (
    <Link
      href={`/product/${Product.slug}`}
      className="w-[22rem] h-[30rem] bg-white rounded-3xl flex flex-col shadow-lg overflow-hidden"
      onClick={() => setSelectedProduct(Product)} // Use a function here
    >
      <div
        className="w-full h-1/2 flex justify-center items-center rounded-t-3xl"
        style={{ backgroundColor: Product.color }}
      >
        <Image
          src={Product.src}
          alt={Product.title}
          width={400}
          height={400}
          className="object-cover w-[15rem] "
        />
      </div>
      <div className="w-full h-1/2 flex flex-col p-6 justify-center items-center text-center gap-4">
        <div className="text-2xl font-semibold">{Product.title}</div>
        <div className="text-sm text-gray-600">{Product.description}</div>
      </div>
    </Link>
  );
};

export default CardsGrid;
