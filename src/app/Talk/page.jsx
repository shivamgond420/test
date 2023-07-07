"use client"

import React from "react";
import Image from "next/image";
import submitt from "./Action";
const Talk = () => {
  async function handle(formData) {
    const response = await submitt({
      name: formData.get("name"),
      email: formData.get("email"),
      add: formData.get("add"),
      text: formData.get("textarea"),
    });
  }

  return (
    <div>
      <form
        action={handle} onSubmit={()=>{
          alert(" 🖕 ")
        }}
        className="main h-[100vh] w=[100vw]  bg-[#2ECC71] pt-7   "
      >
        <div className="main1 pb-7 flex justify-center ">
          <Image
            src="/Hea.png"
            className="animate-spin hover:hidden"
            width="120"
            height="120"
          ></Image>
        </div>
        <div className="main2 flex-col flex items-center space-y-7">
          <div className="Group1   flex">
            <Image
              src="/nammm.png"
              className="w-8 h-8"
              width={40}
              height={40}
            ></Image>
            <input  requerd
              name="name"
              placeholder="Enter your name"
              required
              type="text"
            />
          </div>
          <div className="Group1 flex">
            <Image
              src="/mas.png"
              className="w-8 h-8"
              width={40}
              height={40}
            ></Image>
            <input  requerd name="email" placeholder="Enter your email" type="email" />
          </div>
          <div className="Group1 flex">
            <Image
              src="/add.png"
              className="w-8 h-8"
              width={40}
              height={40}
            ></Image>
            <input  requerd
              name="add"
              placeholder="Enter addres"
              className=" bg-[#9B59B6] "
              type="text"
            />
          </div>
          <div className="Group1  flex">
            <Image
              className="h-10"
              src="/mass.png"
              width={40}
              height={10}
            ></Image>
            <textarea
              name="textarea"
              placeholder="Feedback"
              className="h-[12vh] bg-[#9B59B6]"
              type="text"
            />
          </div>
          <button onClick={()=>{alert("your massage has submitted")}} type="submit" className="">
            <img
              src="/88.png"
              className="w-12 animate-pulse hover:animate-bounce"
              alt=""
            />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Talk;
