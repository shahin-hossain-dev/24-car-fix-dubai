"use client";
import React from "react";
import Booking from "../Booking";
import { FaCalendarCheck } from "react-icons/fa6";
import useModalController from "@/context/useModalController";

const BookingWrapper = () => {
  const { showModal, isModalOpen, handleCancel } = useModalController();

  return (
    <div className="relative z-10  ">
      <div className="w-[130px] h-[40px] lg:w-[145px] lg:h-[55px] bg-green-500/70  absolute top-1/2 left-1/2 -translate-1/2 -z-10 rounded-3xl animate-pulse"></div>
      <button
        onClick={showModal}
        className="  cursor-pointer bg-primary-500 !text-white flex-center roboto-serif gap-2 rounded-3xl px-3 py-1 md:px-4 md:py-2 "
      >
        <FaCalendarCheck />
        <span className="text-sm md:text-base font-bai-jamjuree truncate">
          Book Now
        </span>
      </button>
      <Booking isModalOpen={isModalOpen} handleCancel={handleCancel} />
    </div>
  );
};

export default BookingWrapper;
