import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { Post } from "@/types/Posts";

export type DefaultViewProps = {
  posts: Post[];
  router: AppRouterInstance;
};
