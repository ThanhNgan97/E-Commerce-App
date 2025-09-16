"use client";

import Image from "next/image";
import React, { useState } from "react";

// Mảng ảnh (link trực tiếp từ images.pexels.com)
const images = [
  { id: 1, url: "https://images.pexels.com/photos/669015/pexels-photo-669015.jpeg" },
  { id: 2, url: "https://images.pexels.com/photos/33646740/pexels-photo-33646740.jpeg" },
  { id: 3, url: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg" },
  { id: 4, url: "https://images.pexels.com/photos/20787/pexels-photo.jpg" },
  { id: 5, url: "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg" },
];

const ProductImage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Ảnh chính */}
      <div className="relative w-full h-[500px]">
        <Image
          src={images[activeIndex].url}
          alt="Main Product"
          fill
          className="object-cover rounded-md"
          sizes="500px"
          priority
        />
      </div>

      {/* Ảnh nhỏ */}
      <div className="flex flex-wrap gap-4 mt-8 cursor-pointer">
        {images.map((img, index) => (
          <div
            key={img.id}
            className={`relative w-[120px] h-[120px] cursor-pointer rounded-md overflow-hidden ${
              activeIndex === index ? "ring-2 ring-blue-500" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          >
            <Image
              src={img.url}
              alt={`Thumbnail ${img.id}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default ProductImage;
