"use client";
import Image from "next/image";
import React, { useState } from "react";
import { IoArrowForward } from "react-icons/io5";
import { PiHandbag } from "react-icons/pi";
import { TiStarFullOutline, TiStarOutline } from "react-icons/ti";
import { IProduct } from "@/types/Product";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";

interface Props {
  data: IProduct[];
}

const PopularProductCard: React.FC<Props> = ({ data }) => {
  const [selectedProductIds, setSelectedProductIds] = useState<number[]>([]);
  const [cartedProductIds, setCartedProductIds] = useState<number[]>([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleSnackbarClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleBagClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    productId: number
  ) => {
    e.preventDefault();
    e.stopPropagation();

    setCartedProductIds((prevIds) =>
      prevIds.includes(productId)
        ? prevIds.filter((id) => id !== productId)
        : [...prevIds, productId]
    );

    const isCarted = cartedProductIds.includes(productId);

    if (isCarted) {
      // Decrement Cart
      const totalCart = localStorage.getItem("numberOffCart") as string;
      const result = parseInt(totalCart) - 1;

      // Set New Total Count of Cart
      localStorage.setItem("numberOffCart", result.toString());

      // Notify Event Storage So That Listener could know total cart is changing
      window.dispatchEvent(new Event("storage"));

      // Set Snackbar message
      setSnackbarMessage("Your item has been removed from cart successfully");
    } else {
      // Increment Cart
      const totalCart = localStorage.getItem("numberOffCart")
        ? (localStorage.getItem("numberOffCart") as string)
        : "0";
      const result = parseInt(totalCart) + 1;

      // Set New Total Count of Cart
      localStorage.setItem("numberOffCart", result.toString());

      // Notify Event Storage So That Listener could know total cart is changing
      window.dispatchEvent(new Event("storage"));

      // Set Snackbar message
      setSnackbarMessage("Your item has been added to cart successfully.");
    }

    // Show Snackbar
    setSnackbarOpen(true);
  };

  const isSelected = (productId: number) =>
    selectedProductIds.includes(productId);

  const isCarted = (productId: number) => cartedProductIds.includes(productId);

  return (
    <div className="container mx-auto p-2 md:p-0">
      <div className="flex justify-between items-center my-[32px]">
        <div>
          <p className="text-[20px] md:text-[32px] font-semibold">
            Popular Products
          </p>
        </div>
        <div className="flex items-center gap-3 text-primary">
          <p className="text-sm md:text-md">View All</p>
          <IoArrowForward />
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4">
        {data.map((product) => (
          <div
            key={product.id}
            className="w-full h-[420px] md:h-[526px] border p-1 md:p-[16px] hover:border-primary cursor-pointer"
          >
            <div className="h-[290px] md:h-[369.3px] relative flex justify-center items-center">
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={100}
                height={100}
                className="w-[100px] h-[100px] md:w-[120px] md:h-[120px]"
              />
              {product.discount && (
                <p className="absolute top-2 md:top-0 left-1 bg-[#EA4B48] py-[3px] md:py-[5px] px-[10px] md:px-[12px] font-normal text-white rounded-md">
                  Sale {product.discount}%
                </p>
              )}
              {isSelected(product.id) && (
                <div className="absolute inset-0 rounded-lg"></div>
              )}
            </div>
            <div className="h-[149.7px] flex justify-between items-center">
              <div>
                <p className="text-xs md:text-sm text-[#4D4D4D]">
                  {product.category}
                </p>
                <h1 className="text-sm md:text-xl text-[#374151] font-extrabold">
                  {product.productName}
                </h1>
                <div className="text-md md:text-2xl text-[#1A1A1A]">
                  <h3>
                    ${product.price}
                    {product.discount && product.oldPrice && (
                      <span className="text-[#999999] ml-1 font-normal line-through">
                        ${product.oldPrice}
                      </span>
                    )}
                  </h3>
                </div>

                <div className="flex text-yellow-300 mt-1">
                  {[...Array(product.rating)].map((_, index) => (
                    <TiStarFullOutline key={index} />
                  ))}
                  {[...Array(5 - product.rating)].map((_, index) => (
                    <TiStarOutline key={index} />
                  ))}
                </div>
              </div>
              <div
                className={`py-2.5 px-2 rounded-full ${
                  isCarted(product.id)
                    ? "bg-primary text-white"
                    : "hover:bg-primary text-[#1A1A1A] hover:text-white"
                }`}
                onClick={(e) => handleBagClick(e, product.id)}
              >
                <PiHandbag className="w-[28px] h-[22px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        message={snackbarMessage}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        ContentProps={{
          className: "bg-primary",
        }}
        action={
          <React.Fragment>
            <IconButton
              size="large"
              aria-label="close"
              color="inherit"
              onClick={handleSnackbarClose}
            >
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
};

export default PopularProductCard;
