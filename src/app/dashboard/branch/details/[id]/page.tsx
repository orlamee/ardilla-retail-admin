"use client";
import NavBar from "@/components/navbar";
import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function BranchDetails() {
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
              <span>Branch</span>
            </Link>
          </div>
          <div className="p-10 mb-9">
            <div className="border border-[#F3F4F6] py-10 px-5 rounded-[10px]">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-[#9CA3AF] font-[500] leading-[16px] text-[12px]">
                  State
                </h4>
                <h4 className="text-[#000] font-[600] leading-[16px] text-[12px]">
                  Lagos
                </h4>
              </div>
              <hr />
              <div className="flex items-center justify-between my-6">
                <h4 className="text-[#9CA3AF] font-[500] leading-[16px] text-[12px]">
                  Local Government
                </h4>
                <h4 className="text-[#000] font-[600] leading-[16px] text-[12px]">
                  Oshodi
                </h4>
              </div>
              <hr />
              <div className="flex items-center justify-between my-6">
                <h4 className="text-[#9CA3AF] font-[500] leading-[16px] text-[12px]">
                  Closest Landmark (Optional)
                </h4>
                <h4 className="text-[#000] font-[600] leading-[16px] text-[12px]">
                  3rd Mainland Bridge
                </h4>
              </div>
              <hr />
              <div className="flex items-center justify-between my-6">
                <h4 className="text-[#9CA3AF] font-[500] leading-[16px] text-[12px]">
                  Head Branch
                </h4>
                <h4 className="text-[#000] font-[600] leading-[16px] text-[12px]">
                  Yes
                </h4>
              </div>
              <hr />
              <div className="flex items-center justify-between my-6">
                <h4 className="text-[#9CA3AF] font-[500] leading-[16px] text-[12px]">
                  Email
                </h4>
                <h4 className="text-[#000] font-[600] leading-[16px] text-[12px]">
                  john@mail.com
                </h4>
              </div>
              <hr />
              <div className="flex items-center justify-between my-6">
                <h4 className="text-[#9CA3AF] font-[500] leading-[16px] text-[12px]">
                  Street Address
                </h4>
                <h4 className="text-[#000] font-[600] leading-[16px] text-[12px]">
                  29, Oladoyingbr street, Ogba,Ikeja.Lagos.
                </h4>
              </div>
              <hr />
              <div className="flex items-center justify-between my-6">
                <h4 className="text-[#9CA3AF] font-[500] leading-[16px] text-[12px]">
                  Phone Number
                </h4>
                <h4 className="text-[#000] font-[600] leading-[16px] text-[12px]">
                  09012345673
                </h4>
              </div>
              <hr />
              <div className="flex justify-center items-center mt-9">
                <button className="rounded-[6px] bg-[#240552] text-white px-5 py-3 text-[12px] font-[500] leading-[20px] flex items-center">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-3"
                  >
                    <path
                      d="M4.69231 14.0877C4.28018 14.0877 3.89508 13.9458 3.61808 13.6823C3.26677 13.3512 3.09786 12.8513 3.15867 12.3108L3.40864 10.1218C3.45594 9.70969 3.70591 9.16244 3.99643 8.86517L9.5432 2.99411C10.9282 1.52803 12.374 1.48749 13.8401 2.8725C15.3062 4.2575 15.3467 5.70331 13.9617 7.16939L8.41493 13.0405C8.13117 13.3445 7.60419 13.6282 7.19207 13.6958L5.0166 14.0674C4.90175 14.0741 4.8004 14.0877 4.69231 14.0877ZM11.7119 2.86574C11.1917 2.86574 10.739 3.19003 10.2796 3.67647L4.73284 9.5543C4.59772 9.69618 4.44233 10.034 4.41531 10.2299L4.16533 12.4189C4.13831 12.6418 4.19235 12.8243 4.31396 12.9391C4.43557 13.054 4.61799 13.0945 4.84094 13.0607L7.01641 12.6891C7.21234 12.6554 7.53663 12.4797 7.67176 12.3378L13.2185 6.46675C14.0563 5.57494 14.3603 4.7507 13.1375 3.60216C12.597 3.08194 12.1308 2.86574 11.7119 2.86574Z"
                      fill="white"
                    />
                    <path
                      d="M12.6593 8.30208C12.6458 8.30208 12.6255 8.30208 12.612 8.30208C10.5041 8.09264 8.80828 6.49144 8.48398 4.39704C8.44345 4.12004 8.63262 3.86331 8.90962 3.81601C9.18662 3.77548 9.44335 3.96465 9.49064 4.24165C9.74738 5.87663 11.0716 7.13327 12.7201 7.29541C12.9971 7.32244 13.1998 7.57241 13.1727 7.84942C13.1389 8.10615 12.916 8.30208 12.6593 8.30208Z"
                      fill="white"
                    />
                    <path
                      d="M15.1345 16.2712H2.97351C2.6965 16.2712 2.4668 16.0415 2.4668 15.7645C2.4668 15.4875 2.6965 15.2578 2.97351 15.2578H15.1345C15.4115 15.2578 15.6412 15.4875 15.6412 15.7645C15.6412 16.0415 15.4115 16.2712 15.1345 16.2712Z"
                      fill="white"
                    />
                  </svg>
                  <span>Edit</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
