"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/components/ReduxProvider";
import { formatDistanceToNow } from "date-fns";

import Modal from "@/components/Modal";
const InterceptedBlogDetailsPage = () => {
  const { content, date, excerpt, id, title } = useSelector(
    (state: RootState) => state.post
  );

  console.log(title);
  return (
    <>
      <Modal>
        <h1 className="text-2xl font-bold ">{title}</h1>
        <p>{excerpt}</p>
        <p className="text-xs font-light">
          posted {formatDistanceToNow(date)} ago
        </p>
      </Modal>
    </>
  );
};

export default InterceptedBlogDetailsPage;
