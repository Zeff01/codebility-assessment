import React from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const BackToHome = () => {
  return (
    <Link href={"/"}>
      <div className="flex gap-2 items-center my-5 text-muted-foreground cursor-pointer">
        <ArrowLeft size={15} />
        <p className="text-sm">Back To Home</p>
      </div>
    </Link>
  );
};

export default BackToHome;
