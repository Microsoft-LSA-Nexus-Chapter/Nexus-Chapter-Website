"use client";
import React from "react";
import Image from "next/image";
import ContactImg from "../../../public/images/contact2.jpg";

const Contact = () => {
  return (
    <div className="bg-white p-8 lg:pb-0 font-sans min-h-screen w-screen md:flex lg:flex-row md:flex-col items-center justify-around overflow-x-hidden">
      <div className=" h-fit w-full lg:mt-5 lg:h-full pt-24 lg:pt-0 lg:w-[50%] flex flex-col justify-center ">
        <p className=" text-[3rem] md:text-[3.5rem] lg:pl-0 text-gray-700 font-bold font-italiana text-left lg:mb-5 text leading-tight">
          Let's discuss <br /> on something{" "}
          <span className="text-[#51ADCF]">cool</span> <br /> together.....
        </p>
        <Image
          className=" my-16 lg:my-0 h-3/4 lg:h-2/4 lg:w-3/4 animate-glide"
          src={ContactImg}
          alt="contact"
        />
      </div>
      <div className="bg-[#0278AE] h-fit w-full md:w-[70%]  lg:w-1/3 flex items-center justify-center rounded-2xl shadow-[20px_10px_40px_gray]">
        <div className=" w-[70%]  lg:w-[80%] mx-auto my-10 mb-20 py-2 lg:p-10">
          <h1 className="text-3xl lg:text-[2.5rem] font-italiana font-bold text-center mb-5">
            Get in Touch
          </h1>
          <form className="mt-5 max-w-md mx-auto text-gray-800 ">
            <div className="mb-10">
              {/* <label className="block text-gray-700" htmlFor="name">
                Name
              </label> */}
              <input
                className="border rounded-2xl w-full py-2 px-3"
                type="text"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="mb-10">
              {/* <label className="block text-gray-700" htmlFor="email">
                Email
              </label> */}
              <input
                className="border rounded-2xl w-full py-2 px-3"
                type="email"
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="mb-5">
              {/* <label className="block text-gray-700" htmlFor="message">
                Message
              </label> */}
              <textarea
                className="border rounded-2xl w-full py-2 px-3 resize-none"
                id="message"
                rows={3}
                placeholder="Message"
              />
            </div>
            <button
              type="submit"
              className="bg-slate-300 w-[70%]  lg:w-2/4 lg:hover:w-3/4 transition-all mx-[50%] -translate-x-[50%] text-black hover:text-white py-2 px-4 hover:bg-slate-700 rounded-xl font-semibold"
            >
              Send Message{" "}
              {/* planned to use third party services in future for sendind the response to gmail */}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
