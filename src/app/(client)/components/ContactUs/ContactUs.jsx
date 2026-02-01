"use client";
import Section from "@/components/partials/Section";
import { Button, Form, Input } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import ContactTop from "./ContactTop";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import AnimatedText from "@/components/animations/AnimatedText";
import useSendEmail from "@/hooks/useSendEmail";
import { siteInfo } from "@/constants";

const ContactUs = ({
  title = "Got car repair questions? 24 Car Fix Dubai is here to help.",
  description = "24 Car Fix Dubai provides fast, reliable car battery repair and replacement services across Dubai. Ask anything about car issues — our experts are ready to help with quick, affordable, and professional solutions.",
}) => {
  const { onFinish, sending } = useSendEmail();

  return (
    <div
      id="contact-us"
      className={"bg-[url(/images/others/bg-ctf.png)] bg-gray-50 relative  "}
    >
      <ContactTop />
      <Section className={"py-6 md:py-12 lg:pt-24 lg:mt-24"}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-[80vh] place-content-center">
          {/* text content  */}
          <div className="flex justify-center items-center h-full">
            <div>
              <AnimatedText>
                <h2 className="text-xl md:text-3xl ">{title}</h2>
              </AnimatedText>

              <p className="text-sm lg:text-base !mt-4">{description}</p>
              <div className="!space-y-4 mt-4 font-light">
                <h2 className="text-primary-700 font-bold text-xl lg:text-2xl">
                  Reach Us Anytime
                </h2>
                <Link
                  href={`tel:${siteInfo.phone}`}
                  className="flex text-2xl lg:text-4xl gap-2 items-center"
                >
                  <span>
                    <FaPhoneAlt className="text-primary-500" />
                  </span>
                  <span className="text-neutral-500 font-bold font-bai-jamjuree">
                    {siteInfo.phone}
                  </span>
                </Link>
                <Link
                  href={`mailto:${siteInfo.email}`}
                  className="flex gap-2 items-center text-base lg:text-lg font-bold"
                >
                  <span>
                    <HiOutlineMail className="text-primary-500" />
                  </span>
                  <span className="neutral-500">{siteInfo.email}</span>
                </Link>
                <p className="flex gap-2 items-center text-base lg:text-lg font-bold">
                  <span className="shrink-0">
                    <IoLocationSharp className="text-primary-500 " />
                  </span>
                  <span className="neutral-500">{siteInfo.location}</span>
                </p>
              </div>
            </div>
          </div>
          {/* from start */}

          <div>
            <Form
              name="basic"
              className="!w-full "
              initialValues={{ remember: true }}
              onFinish={onFinish}
              //   onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 !w-full gap-4">
                <Form.Item
                  name="fullname"
                  className=""
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input
                    className="!py-3 md:!py-4 !px-4 text-xl lg:text-3xl !w-[100%] "
                    placeholder="Your Full Name"
                  />
                </Form.Item>
                <Form.Item
                  name="phone"
                  className="!w-full"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your phone number",
                    },
                  ]}
                >
                  <Input
                    className="!py-3 md:!py-4 !px-4 text-xl lg:text-2xl"
                    placeholder="Phone Number "
                  />
                </Form.Item>
              </div>
              <Form.Item
                name="subject"
                className="!w-full"
                rules={[
                  { required: true, message: "Please enter your subject" },
                ]}
              >
                <Input
                  className="!py-3 md:!py-4 !px-4 text-xl  lg:text-2xl"
                  placeholder="Subject "
                />
              </Form.Item>
              <Form.Item
                name="message"
                className="!w-full"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
              >
                <TextArea
                  rows={8}
                  className="!py-3 md:!py-4 text-xl lg:text-2xl"
                  placeholder="Message"
                />
              </Form.Item>

              <Form.Item label={null}>
                <Button
                  type="primary"
                  className="!bg-primary-500 !text-white hover:!bg-primary-700 font-medium"
                  size="large"
                  htmlType="submit"
                >
                  {sending ? "Sending..." : "Send Mail"}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactUs;
