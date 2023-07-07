"use server"

import dbConnect from "../../../utils/DBCon";
import email from "../../../module/Cont";
const submitt = async (data) => {
  try {
    await dbConnect();
    await email.create(data);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
export default submitt;
