"use client";
import NavBar from "@/components/navbar";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function BranchCreate() {
  return (
    <section>
      <NavBar>
        <div>
          <h1 className="text-[24px] text-[#21003D] leading-[33px] font-[700]">
            Branch
          </h1>
        </div>
      </NavBar>
      <main className="px-4 lg:px-8 mt-[50px]">
        <div className="bg-[#FFFFFF] rounded-[10px] mb-9">
          <div className="border-b-[2px] border-b-[#F3F4F6] p-10">
            <Link
              href={"/dashboard/branch"}
              className="text-[#1E2C31] font-[500] leading-[30px] text-[16px] flex items-center"
            >
              <Icon icon="teenyicons:left-outline" className="me-2" />
              <span>Create Branch</span>
            </Link>
          </div>
          <div className="p-10 mb-9">
            <div className="border border-[#F3F4F6] py-10 px-5 rounded-[10px]">
              <div className="p-8 grid grid-cols-1 sm:grid-cols-2 gap-10 ">
                <div>
                  <label
                    htmlFor="name"
                    className="text-[12px] font-[500] text-[#21003D] leading-[22px]"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full outline-none p-4 border-[1px] border-[#F0F0F0] text-[#9CA3AF] text-[12px] font-[500] rounded-[4px] mt-2"
                    placeholder="Enter State"
                  />
                </div>
                <div>
                  <label
                    htmlFor="last name"
                    className="text-[12px] font-[500] text-[#21003D] leading-[22px] mb-[10px]"
                  >
                    Local Government Area
                  </label>
                  <input
                    type="text"
                    id="last name"
                    className="w-full outline-none p-4 border-[1px] border-[#F0F0F0] text-[#9CA3AF] text-[12px] font-[500] rounded-[4px] mt-2"
                    placeholder="Enter Local Government Area"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="text-[12px] font-[500] text-[#21003D] leading-[22px] mb-[10px]"
                  >
                    Closest Landmark (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full outline-none p-4 border-[1px] border-[#F0F0F0] text-[#9CA3AF] text-[12px] font-[500] rounded-[4px] mt-2"
                    placeholder="Enter Closest Landmark"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-[12px] font-[500] text-[#21003D] leading-[22px] mb-[10px]"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="w-full outline-none p-4 border-[1px] border-[#F0F0F0] text-[#9CA3AF] text-[12px] font-[500] rounded-[4px] mt-2"
                    placeholder="Enter Address"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-[12px] font-[500] text-[#21003D] leading-[22px] mb-[10px]"
                  >
                    Branch Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full outline-none p-4 border-[1px] border-[#F0F0F0] text-[#9CA3AF] text-[12px] font-[500] rounded-[4px] mt-2"
                    placeholder="Enter Email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="number"
                    className="text-[12px] font-[500] text-[#21003D] leading-[22px] mb-[10px]"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="tel"
                    className="w-full outline-none p-4 border-[1px] border-[#F0F0F0] text-[#9CA3AF] text-[12px] font-[500] rounded-[4px] mt-2"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
