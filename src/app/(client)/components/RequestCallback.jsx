"use client";
import Modal from "@/components/ui/Modal";
import useModalController from "@/context/useModalController";
import useSendEmail from "@/hooks/useSendEmail";
import { Button, Form, Input, Select } from "antd";
import FormItem from "antd/es/form/FormItem";
import React, { useEffect } from "react";
import { LuPhoneCall } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";

const RequestCallback = () => {
  const { showModal, isModalOpen, handleCancel } = useModalController();
  const { onFinish, sending, success, handleModalClose } = useSendEmail();

  useEffect(() => {
    if (success) {
      handleModalClose(handleCancel);
    }
  }, [success]);

  return (
    <>
      <button
        onClick={showModal}
        className="fixed z-50  bottom-0 left-0 cursor-pointer w-full md:w-[20%]"
      >
        <p className="text-white bg-primary-500 px-3 py-3 rounded-t-lg md:rounded-tr-lg flex items-center justify-center font-medium gap-2">
          <span>Request a Callback</span>
          <FaArrowRight className="" />
        </p>
      </button>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        title={
          <span className="text-white font-medium text-lg lg:text-2xl">
            Request a callback
          </span>
        }
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <div>
            <div className="grid grid-cols-1 gap-3">
              <Form.Item
                name={"fullname"}
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input size="large" placeholder="Enter Your Name" />
              </Form.Item>
              <Form.Item
                name={"phone"}
                rules={[
                  { required: true, message: "Please enter your phone no." },
                ]}
              >
                <Input size="large" placeholder="Enter Your Phone No." />
              </Form.Item>
              <Form.Item
                name={"time"}
                rules={[
                  { required: true, message: "Please select a time slot" },
                ]}
              >
                <Select
                  size="large"
                  defaultValue={"select"}
                  options={[
                    {
                      value: "select",
                      disabled: true,
                      label: <span>Choose a time slot</span>,
                    },
                    {
                      value: "9AM-12PM",
                      label: <span>9 AM - 12 PM (Morning) </span>,
                    },
                    {
                      value: "12PM-3PM",
                      label: <span>12 PM - 3 PM (Afternoon)</span>,
                    },
                    {
                      value: "3PM-6PM",
                      label: <span>3 PM - 6 PM (Evening) </span>,
                    },
                  ]}
                />
              </Form.Item>
            </div>

            <Form.Item>
              <Button
                htmlType="submit"
                size="large"
                className="!bg-primary-500 !text-white font-medium w-full flex items-center gap-1"
              >
                <LuPhoneCall />{" "}
                <span> {sending ? "Requesting" : "Call Me"}</span>
              </Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>
    </>
  );
};

export default RequestCallback;
