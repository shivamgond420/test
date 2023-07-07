import React from "react";

const Six = () => {
  return (
    <div className="  px-3 pt-8 bg-[#FCDA69] pb-6 mt-5">
      <div className=" bg-[#FCDA69] ">
        <div className="header1   space-y-[-6px] pl-3">
          {" "}
          <div className=" text-[#8873EF] text-[8px] md:text-[14px] origin-top-left -rotate-45">
            Hello!
          </div>
          <div className="font-bold text-3xl  md:text-5xl">
            Let's Discuss
            <br />
            Your project
          </div>
        </div>
      </div>

      <div className="header2 justify-between flex pt-6 ">
        <div className="locADD space-y-4">
          {" "}
          <div className="loct">
            <div className="Line13  h-[0px] border border-black"></div>
            <div className="flex pt-2 space-x-1">
              <div className="">
                {" "}
                <img src="/loc.png" className="w-10" alt="" />
              </div>

              <div className="">
                <div className="Email font-bold">location</div>
                <div className="Email text-[8px] font-sans">
                UP Ballia nagra Bhimpura no -2
                </div>
              </div>
            </div>
          </div>
          <div className="loct">
            <div className="Line13  h-[0px] border border-black"></div>
            <div className="flex pt-2 space-x-1">
              <div className="">
                {" "}
                <img src="/mal.png" className="w-10" alt="" />
              </div>

              <div className="">
                <div className="Email font-bold">Email</div>
                <div className="Email text-[8px] font-sans">
                Shivamgond@gmail.com 
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <img src="/Hi.png" width={120} height={19} alt="" />
        </div>
      </div>


      <div className="pt-20">
      <div className="Line13  h-[0px] border border-black"></div>
      <div className="flex justify-between">
        <div className="text-[8px]" >© 2023 All Right Reserved</div>
        <div className="text-[8px]">Designed By Tanim Khan</div>
        <div className="text-[8px]" >Designed By Tanim Khan</div>
      </div>
      </div>
    </div>
  );
};

export default Six;
