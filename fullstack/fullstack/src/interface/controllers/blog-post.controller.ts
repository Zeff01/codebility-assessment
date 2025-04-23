import { DIContainer } from "@/infra/di/container";

export  const getBlogPosts = async (): Promise<TBlogPostHome[] | null> => {
   try {
      const blogPostService = DIContainer.resolve<'IBlogPostService'>('IBlogPostService')
      const post = await blogPostService.findAll();
      
      if (post) {
         return post.map((data) => ({
            id: data.id,
            title: data.title,
            excerpt: data.excerpt
         }));
      }

      return [];
   } catch (error) {
      return [];
   }
}

export const getBlogPostById = async (id: number): Promise<TBlogPost | null> => {
   try {
      const blogPostService = DIContainer.resolve<'IBlogPostService'>('IBlogPostService')
      const post = await blogPostService.findByIdOrFail(id);
      
      if (post) {
         return post;
      }

      return null;
   } catch (error) {
      return null;
   }
}