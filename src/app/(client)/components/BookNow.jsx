"use client";
import React from "react";
import { TbEdit } from "react-icons/tb";
import Booking from "./Booking";
import useModalController from "@/context/useModalController";

const BookNow = () => {
  const { showModal, isModalOpen, handleCancel } = useModalController();
  return (
    <>
      <button
        onClick={showModal}
        className="flex items-center cursor-pointer gap-1 md:gap-2 bg-white hover:bg-gray-100 text-[#003366] font-semibold py-2 px-3 lg:py-3 lg:px-6 rounded-lg border border-gray-200 transition-colors"
      >
        <TbEdit className="text-xs lg:text-xl" />
        <span className="text-xs lg:text-base">Book Now</span>
      </button>
      <Booking isModalOpen={isModalOpen} handleCancel={handleCancel} />
    </>
  );
};

export default BookNow;
