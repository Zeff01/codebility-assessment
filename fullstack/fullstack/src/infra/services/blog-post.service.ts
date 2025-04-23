import { posts } from "../../data";

// No need repository for retrievibg data
export class BlogPostService implements IBlogPostService {
   construct() {};

   //assuming it is a database request
   async findAll(): Promise<TBlogPost[] | undefined> {
      return posts;
   }
   
   //assuming it is a database request
   async findByIdOrFail(id: number): Promise< TBlogPost | undefined> {
      const find = posts.find((data: TBlogPost) => data.id == id);
      return find;
   }
}