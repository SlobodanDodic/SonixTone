import { useState } from "react";
import Image from "next/image";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { useFormState } from "@/context/FormContext";

export default function Gallery() {
  const { formData } = useFormState();
  const images = formData?.photos;

  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full">
      <h2 className="my-5 block text-center">Guitar gallery:</h2>
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {images.map((imagePath, index) => (
          <div
            key={index}
            className={`${activeIndex === index ? "flex" : "hidden"} absolute h-full w-full justify-center p-3 duration-700 ease-in-out`}
          >
            <Image className="object-contain" src={imagePath} alt={`Image ${index + 1}`} width={310} height={110} />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute left-0 top-1/2 z-30 flex h-full -translate-y-1/2 transform cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={prevSlide}
      >
        <BiLeftArrow />
      </button>
      <button
        type="button"
        className="absolute right-0 top-1/2 z-30 flex h-full -translate-y-1/2 transform cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={nextSlide}
      >
        <BiRightArrow />
      </button>
    </div>
  );
}
