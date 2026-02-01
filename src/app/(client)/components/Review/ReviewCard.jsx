import { Card } from "antd";
import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { Rating, Star } from "@smastrom/react-rating";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineShieldCheck } from "react-icons/hi";
import Link from "next/link";

const ReviewCard = ({ review }) => {
  return (
    <div>
      <Card>
        <div className="flex !flex-col !justify-between">
          {/* header */}
          <div className="flex gap-3">
            <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center bg-green-500">
              <span className="font-bold text-lg text-white">
                {" "}
                {review.name[0]}
              </span>
            </div>
            <div>
              <span className="flex items-center gap-2">
                <span className="font-bold text-lg">{review.name}</span>
                <BsPatchCheckFill className="text-sky-500" />
              </span>
              <p className="text-secondary-700 text-sm">{review.time}</p>
            </div>
          </div>
          {/* rating */}
          <div className="w-[110px] py-3 flex items-center gap-1">
            <Rating
              value={review.rating}
              readOnly
              className="!text-primary-500"
              itemStyles={{
                itemShapes: Star,
                activeFillColor: "#ffb600",
                inactiveFillColor: "#ffb600",
              }}
            />
            <div className="text-secondary-700">({review.rating}.0)</div>
          </div>
          {/* comment  */}
          <div className="py-2">
            <p>
              {review.review.length < 50
                ? `${review.review}`
                : `${review.review.slice(0, 50)}...`}
            </p>

            <div className="pt-2 flex items-center justify-between">
              <Link
                href={"https://share.google/BKRQjp1le8yA08jSw"}
                target="_blank"
                className="flex items-center gap-1 font-bold text-green-500"
              >
                <span className="">Read full review</span>
                <MdOutlineKeyboardArrowRight className="text-lg" />
              </Link>

              <div className="bg-sky-100 gap-1 text-sky-600 flex items-center py-1 px-2 rounded-lg">
                <HiOutlineShieldCheck className="text-lg" />
                <span>Google Verified</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ReviewCard;
