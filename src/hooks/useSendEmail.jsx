"use client";
import React, { useState } from "react";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

const useSendEmail = () => {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleModalClose = (handleCancel) => {
    handleCancel();
  };

  const onFinish = async (data) => {
    setSending(true);

    const appointmentTitle = data?.brand ? "Appointment Email" : "";
    const callbackTitle = data?.time ? "Callback Email" : "";

    const appointment = data?.brand ? `Car Brand:  ${data?.brand},` : "";
    const callback = data?.time ? `Callback Time Slot: ${data?.time},` : "";

    const message = data?.message || "";

    try {
      const res = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_KEY,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        {
          title: data?.subject || appointmentTitle || callbackTitle,
          from_name: data?.fullname,
          phone: data?.phone,
          message: `${appointment} ${callback} ${message}`,
          email: data?.email,
        },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY,
        }
      );

      if (res.status === 200) {
        toast.success("Message Sent!");
        setSending(false);
        setSuccess(true);
      }
    } catch (error) {
      toast.error("Message Not Sent!");
      console.log(error.message);
      setSending(false);
    }
  };

  return { onFinish, sending, success, handleModalClose };
};

export default useSendEmail;
