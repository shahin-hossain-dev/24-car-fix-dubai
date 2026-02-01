import { FaRegCalendarCheck } from "react-icons/fa";
import { CgEye } from "react-icons/cg";
import Link from "next/link";
import useModalController from "@/context/useModalController";
import Booking from "../Booking";

const OurServiceHandler = ({ service }) => {
  const { showModal, isModalOpen, handleCancel } = useModalController();
  return (
    <>
      <div className="flex items-center gap-2 px-4 pb-4">
        <Link
          href={`/service-details/${service?.slug}`}
          className="border border-primary-500/50 font-semibold hover:border-primary-500 duration-200 !text-neutral-500 cursor-pointer py-2 px-4 rounded-lg w-full flex gap-2 items-center justify-center "
        >
          <CgEye />
          <span>Details</span>
        </Link>
        <button
          onClick={showModal}
          className="flex items-center text-white! font-semibold hover:text-neutral-500! justify-center gap-2 bg-primary-500 border border-primary-500 py-2 px-4 rounded-lg w-full cursor-pointer hover:bg-white duration-200"
        >
          <FaRegCalendarCheck /> <span className="truncate">Book Now</span>
        </button>
      </div>
      <Booking isModalOpen={isModalOpen} handleCancel={handleCancel} />
    </>
  );
};

export default OurServiceHandler;
