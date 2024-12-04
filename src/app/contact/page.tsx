"use client";
import React, { useState } from "react";
import Image from "next/image";
import ContactImg from "../../../public/images/contact-removebg.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _gotcha: ""
  });
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://getform.io/f/ayvvwjzb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          message: "",
          _gotcha: ""
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("An error occurred.");
    }
  };

  return (
    <div className="bg-white p-8 lg:pb-0 font-sans min-h-screen w-screen md:flex lg:flex-row md:flex-col items-center justify-around overflow-x-hidden">
      <div className="h-fit w-full lg:mt-5 lg:h-full pt-24 lg:pt-0 lg:w-[50%] flex flex-col justify-center">
        <p className="text-[3rem] md:text-[3.5rem] lg:pl-0 text-gray-700 font-bold font-italiana text-left lg:mb-5 leading-tight">
          Let's discuss <br /> on something{" "}
          <span className="text-[#51ADCF]">cool</span> <br /> together.....
        </p>
        <Image
          className="my-16 lg:my-0 h-3/4 lg:h-2/4 lg:w-3/4 animate-glide"
          src={ContactImg}
          alt="contact"
        />
      </div>
      <div className="bg-[#0278AE] h-fit w-full md:w-[70%] lg:w-1/3 flex items-center justify-center rounded-2xl shadow-[20px_10px_40px_gray]">
        <div className="w-[70%] lg:w-[80%] mx-auto my-10 mb-20 py-2 lg:p-10">
          <h1 className="text-3xl lg:text-[2.5rem] font-italiana font-bold text-center mb-5 text-white">
            Get in Touch
          </h1>
          <form onSubmit={handleSubmit} className="mt-5 max-w-md mx-auto text-gray-800">
            <div className="mb-6">
              <input
                className="border rounded-2xl w-full py-2 px-3"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <input
                className="border rounded-2xl w-full py-2 px-3"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                className="border rounded-2xl w-full py-2 px-3 resize-none"
                name="message"
                rows={3}
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <input type="hidden" name="_gotcha" style={{ display: 'none' }} />

            <button
              type="submit"
              className="bg-slate-300 w-[70%] lg:w-2/4 lg:hover:w-3/4 transition-all mx-[50%] -translate-x-[50%] text-black hover:text-white py-2 px-4 hover:bg-slate-700 rounded-xl font-semibold"
            >
              Send Message
            </button>
          </form>
          {status && (
            <p className="text-center mt-5 text-white font-semibold">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;