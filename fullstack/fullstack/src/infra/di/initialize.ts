import { DIContainer } from "./container";

import { BlogPostService } from "../services/blog-post.service";


export function initialize() {
      DIContainer.register('IBlogPostService', new BlogPostService(), true);
}