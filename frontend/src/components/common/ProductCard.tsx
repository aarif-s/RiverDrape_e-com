import React from "react";
import Slider from "react-slick";

interface ProductCardProps {
  images: string[];
  title: string;
  price: string;
  mrp?: string;
  discount?: string;
  description?: string;
}

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const ProductCard: React.FC<ProductCardProps> = ({
  images,
  title,
  price,
  description = "",
  mrp = "",
  discount = "",
}) => {
  return (
    <div className="w-[230px] max-w-[230px] bg-white rounded-lg shadow hover:shadow-md transition duration-200 flex-shrink-0">
      {/* Product Images */}
      <div className="w-full h-[280px] rounded-t-lg overflow-hidden">
        {images.length > 1 ? (
          <Slider {...sliderSettings}>
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${title}-${idx}`}
                className="w-full h-[280px] object-cover"
              />
            ))}
          </Slider>
        ) : (
          <img
            src={images[0]}
            alt={title}
            className="w-full h-[280px] object-cover"
          />
        )}
      </div>

      {/* Product Details */}
      <div className="p-3">
        <h4 className="text-sm font-medium text-gray-900 mb-1 leading-5 line-clamp-2">
          {title}
        </h4>
        <div className="flex items-center gap-2 mt-1"></div>
        {description && (
          <p className="text-xs text-gray-600 line-clamp-2 mt-1">
            {description}
          </p>
        )}

        <div className="flex items-center gap-2 mt-1">
          <span className="font-semibold text-black text-base">{price}</span>
          {mrp && (
            <span className="text-sm line-through text-gray-500">{mrp}</span>
          )}
          {discount && (
            <span className="text-sm text-red-500 font-semibold">
              {discount} off
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
