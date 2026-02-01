"use client";
import Section from "@/components/partials/Section";
import SectionTitle from "@/components/ui/SectionTitle";
import React from "react";
import ReviewCard from "./ReviewCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

const reviews = [
  {
    name: "AK47 GAMING YT",
    time: "1 week ago",
    rating: 5,
    review:
      "Good job bro.. battery fix and change engine oil... And also have good price",
  },
  {
    name: "MD Raihan",
    time: "1 week ago",
    rating: 5,
    review: "Good job Salauddin",
  },
  {
    name: "Hazrat Khan",
    time: "a month ago",
    rating: 5,
    review:
      "This is very good electrical and vehicle Requiring workshop and goat price",
  },
  {
    name: "Tushar Mehta",
    time: "a month ago",
    rating: 5,
    review: "Battery replacement was done in no time and high quality.",
  },
  {
    name: "Amin Ali",
    time: "a month ago",
    rating: 5,
    review: "My car new battery fixing..and god work.",
  },
  {
    name: "Sukesh Kp",
    time: "a month ago",
    rating: 5,
    review: "Affordable price and good service",
  },
  {
    name: "Shawon Ahamed",
    time: "2 month ago",
    rating: 5,
    review: "Very good service.",
  },
  {
    name: "Nooruddin Satwa",
    time: "2 month ago",
    rating: 5,
    review: "Good service..",
  },
];

const Review = () => {
  return (
    <div>
      <Section>
        <SectionTitle>Customer Review</SectionTitle>
        <p className="text-center text-secondary-700">
          Customer says about 24 Car Fix Dubai
        </p>

        <div className="my-4">
          <Swiper
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide>
                <ReviewCard review={review} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Section>
    </div>
  );
};

export default Review;
