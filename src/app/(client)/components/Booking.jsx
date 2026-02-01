"use client";
import Modal from "@/components/ui/Modal";
import { brandsItems } from "@/constants";
import useSendEmail from "@/hooks/useSendEmail";
import { Button, Form, Input, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useEffect } from "react";

const Booking = ({ isModalOpen, handleCancel }) => {
  const { onFinish, sending, success, handleModalClose } = useSendEmail();

  const brands = brandsItems.map((brand) => {
    return { value: brand.name, label: brand.name };
  });

  useEffect(() => {
    if (success) {
      handleModalClose(handleCancel);
    }
  }, [success]);

  return (
    <Modal
      open={isModalOpen}
      onCancel={handleCancel}
      title={
        <span className="text-neutral-500 text-lg lg:text-2xl">
          Book An Appointment
        </span>
      }
    >
      <Form name="basic" onFinish={onFinish} initialValues={{ remember: true }}>
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <Form.Item
              name={"fullname"}
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input size="large" placeholder="Enter Your Name" />
            </Form.Item>
            <Form.Item
              name={"phone"}
              rules={[
                { required: true, message: "Please enter your phone number" },
              ]}
            >
              <Input size="large" placeholder="Enter Your Phone" />
            </Form.Item>
          </div>
          <div className="grid grid-cols-1">
            <Form.Item name={"email"}>
              <Input
                type="email"
                size="large"
                style={{ width: "100%" }}
                placeholder="Enter Your Email (optional)"
              />
            </Form.Item>
          </div>
          <div className="grid grid-cols-1 gap-3">
            <Form.Item
              name={"brand"}
              rules={[{ required: true, message: "Please select any a brand" }]}
            >
              <Select
                size="large"
                defaultValue="Select a Car"
                style={{ width: "100%" }}
                //   onChange={handleChange}
                options={[
                  {
                    value: "Select a Car",
                    label: "Select a Car",
                    disabled: true,
                  },
                  ...brands,
                ]}
              />
            </Form.Item>
          </div>
          <div>
            <Form.Item name={"message"}>
              <TextArea
                rows={4}
                placeholder="Write Your Message"
                maxLength={500}
              />
            </Form.Item>
          </div>
          <Form.Item label={null}>
            <Button
              type="primary"
              size="large"
              htmlType="submit"
              className="!bg-primary-500 !text-white w-full font-medium"
            >
              {sending ? "Booking..." : "Book Confirm"}
            </Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default Booking;
