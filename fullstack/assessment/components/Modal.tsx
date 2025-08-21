"use client";

import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setRootElement(document.getElementById("root-modal"));
  }, []);

  if (!rootElement) return null;

  console.log("intercepted");
  return createPortal(
    <>
      <div
        className="w-screen h-screen absolute top-0  z-40 left-0 bg-black/20"
        onClick={() => router.back()}
      >
        <dialog
          onClick={(e) => e.stopPropagation()}
          open
          className=" z-50 absolute gap-4 flex flex-col rounded-2xl  p-4 -translate-y-1/2 -translate-x-1/2 right-1/2 left-1/2 top-1/2 border-2 border-black shadow-2xl h-fit w-fit lg:min-w-[500px] lg:min-h-[200px]"
        >
          <X
            className="absolute top-4 right-4 cursor-pointer "
            size={16}
            onClick={() => router.back()}
          />
          {children}
        </dialog>
      </div>
    </>,
    rootElement
  );
};

export default Modal;
