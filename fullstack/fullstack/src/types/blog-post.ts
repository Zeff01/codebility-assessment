type TBlogPost = {
   id: number,
   title: string,
   excerpt: string,
   content: string,
   date: string
}

type TBlogPostHome = Omit<TBlogPost, "content" | "date">


interface IBlogPostService {
   findAll: () => Promise<TBlogPost[] | undefined>;
   findByIdOrFail: (id: number) => Promise<TBlogPost | undefined>;
}