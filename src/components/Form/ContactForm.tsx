import React from "react";
import { PiMapPinLineLight } from "react-icons/pi";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import Button from "../Button/Button";

const ContactForm = () => {
  return (
    <>
      <div className="container mx-auto grid grid-cols-12 gap-4">
        {/* Left column for contact card */}
        <div className="col-span-12 lg:col-span-3 lg:flex lg:flex-col lg:p-6 lg:shadow-lg lg:rounded-[8px]">
          {/* Address section */}
          <div className="w-full flex justify-center items-center flex-col my-8">
            <PiMapPinLineLight className="w-12 h-12 lg:w-[51px] lg:h-[51px] text-primary" />
            <p className="text-center text-[#374151] my-4 lg:my-8 text-sm lg:text-base">
              No.2A, Down Town Road No 7, Kork Chambak Village, Phnom Penh.
            </p>
            <span className="border text-[#E6E6E6] w-full"></span>
          </div>
          {/* Email section */}
          <div className="w-full flex justify-center items-center flex-col my-14">
            <TfiEmail className="w-12 h-12 lg:w-[51px] lg:h-[51px] text-primary" />
            <div className="text-center text-[#374151] my-4 lg:my-8 text-sm lg:text-base">
              <p>info@medi.com,</p>
              <p>jycatry@medi.com</p>
            </div>
            <span className="border text-[#E6E6E6] w-full"></span>
          </div>
          {/* Phone section */}
          <div className="w-full flex justify-center items-center flex-col my-14 lg:my-0">
            <FiPhoneCall className="w-12 h-12 lg:w-[51px] lg:h-[51px] text-primary" />
            <div className="text-center text-[#374151] my-4 lg:my-8 text-sm lg:text-base">
              <p>052 804 122 </p>
              <p>(164) 333-0487</p>
            </div>
          </div>
        </div>
        {/* Right column for content */}
        <div className="col-span-12 lg:col-span-9 shadow-xl p-4">
          <div>
            <h1 className="text-[#1A1A1A] text-[32px] font-semibold">
              Just Say Hello!
            </h1>
            <p className="w-full md:w-6/12 text-[#808080] mt-4 text-sm md:text-base">
              Do you fancy saying hi to me or you want to get started with your
              project and you need my help? Feel free to contact me.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 mt-4">
            <div className="mt-4">
              <label htmlFor="fullname">Full name</label> <br />
              <input
                type="text"
                id="fullname"
                placeholder="example : John"
                className="border border-[#D1D5DB] rounded-[8px] w-full mt-3 py-[14px] px-[20px] text-[#6B7280] focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="email">Email</label> <br />
              <input
                type="text"
                id="email"
                placeholder="name@example.com"
                className="border border-[#D1D5DB] rounded-[8px] w-full mt-3 py-[14px] px-[20px] text-[#6B7280] focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="reason">Reason</label> <br />
              <select
                id="reason"
                className="border border-[#D1D5DB] rounded-[8px] w-full mt-3 py-[14px] px-[20px] text-[#6B7280] focus:ring-green-500 focus:border-green-500"
              >
                <option value="" disabled selected>
                  Choose your reason
                </option>
                <option value="reason1">Reason 1</option>
                <option value="reason2">Reason 2</option>
                <option value="reason3">Reason 3</option>
              </select>
            </div>
            <div className="mt-4">
              <label htmlFor="phone">Phone number</label> <br />
              <input
                type="text"
                id="phone"
                placeholder="+(12) 345 6789"
                className="border border-[#D1D5DB] rounded-[8px] w-full mt-3 py-[14px] px-[20px] text-[#6B7280] focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message">Your message</label> <br />
            <textarea
              id="message"
              className="border h-[160px] border-[#D1D5DB] rounded-[8px] w-full mt-3 py-[14px] px-[20px] text-[#6B7280] focus:ring-green-500 focus:border-green-500"
              placeholder="Enter your message..."
            ></textarea>
          </div>
          <div>
            <Button className="text-sm md:text-base rounded-full py-[10px] px-[30px] md:py-[16px] md:px-[40px] mt-5">
              Send Message
            </Button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default ContactForm;
