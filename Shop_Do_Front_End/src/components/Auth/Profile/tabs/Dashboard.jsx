import React from "react";

export default function Dashboard() {
  return (
    <>
      <div className="welcome-msg w-full">
        <div>
          <p className="text-qblack text-lg">Hello, Shovo</p>
          <h1 className="font-bold text-[24px] text-qblack">
            Welcome to your Profile
          </h1>
        </div>
      </div>
      <div className="quick-view-grid w-full flex justify-between items-center mt-3 ">
        <div className="qv-item w-[252px] h-[208px] bg-qblack group hover:bg-qgray transition-all duration-300 ease-in-out p-6">
          <div className="w-[62px] h-[62px] rounded bg-white flex justify-center items-center">
            <span>
              SVG
            </span>
          </div>
          <p className="text-xl text-white group-hover:text-qblacktext mt-5">
            New Orders
          </p>
          <span className="text-[40px] text-white group-hover:text-qblacktext font-bold leading-none mt-1 block">
            656
          </span>
        </div>
        <div className="qv-item w-[252px] h-[208px] bg-qblack group hover:bg-qgray transition-all duration-300 ease-in-out p-6">
          <div className="w-[62px] h-[62px] rounded bg-white flex justify-center items-center">
            <span>
              SVG
            </span>
          </div>
          <p className="text-xl text-white group-hover:text-qblacktext mt-5">
            New Orders
          </p>
          <span className="text-[40px] text-white group-hover:text-qblacktext font-bold leading-none mt-1 block">
            656
          </span>
        </div>
        <div className="qv-item w-[252px] h-[208px] bg-qblack group hover:bg-qgray transition-all duration-300 ease-in-out p-6">
          <div className="w-[62px] h-[62px] rounded bg-white flex justify-center items-center">
            <span>
              SVG
            </span>
          </div>
          <p className="text-xl text-white group-hover:text-qblacktext mt-5">
            New Orders
          </p>
          <span className="text-[40px] text-white group-hover:text-qblacktext font-bold leading-none mt-1 block">
            656
          </span>
        </div>
      </div>
      <div className="dashboard-info mt-8 flex justify-between items-center bg-primarygray px-7 py-7">
        <div className="">
          <p className="title text-[22px] font-semibold">
            Parsonal Information
          </p>
          <div className="mt-5">
            <table>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Name:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  Shuvo khan
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Email:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  rafiqulislamsuvobd@gmail.com
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Phone:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  01792166627
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>City:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  Dhaka,Bangladesh
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Zip:</div>
                </td>
                <td className="text-base text-qblack font-medium">4040</td>
              </tr>
            </table>
          </div>
        </div>
        <div className="w-[1px] h-[164px] bg-[#E4E4E4]"></div>
        <div className="ml-6">
          <p className="title text-[22px] font-semibold">Shop Info</p>
          <div className="mt-5">
            <table>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Name:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  Shuvo khan
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Email:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  rafiqulislamsuvobd@gmail.com
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Phone:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  01792166627
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>City:</div>
                </td>
                <td className="text-base text-qblack font-medium">
                  Dhaka,Bangladesh
                </td>
              </tr>
              <tr className="inline-flex mb-5">
                <td className="text-base text-qgraytwo w-[100px] block">
                  <div>Zip:</div>
                </td>
                <td className="text-base text-qblack font-medium">4040</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
