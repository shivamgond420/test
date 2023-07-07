"use client"
import React from "react";
import Cont from "./Contact/page";
import DD from "./Sec/page";
import Thir from "./Thir/page";
import Forht from "./forth/page";
import Fifth from "./Fifth/page";
import Six from "./Six/page";
const page = () => {
  return (
    <div className="will-change-auto">
      {" "}
      <Cont />
      <DD />
      <Thir/>
      <Forht/>
      <Fifth/>
      <Six/>
    </div>
  );
};

export default page;
