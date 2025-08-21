import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  redirect("/posts");
  return <div></div>;
};

export default page;
