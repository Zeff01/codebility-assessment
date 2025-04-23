import { blogPost } from "@/interface/controllers";
import Link from "next/link";


function NotFound() {
   return (
      <div>
         <h1 className="text-center text-4xl">
            Blog Not Found...
         </h1>
      </div>
   )
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }>}) {
   const { id } = await params;
   const idNum = +id
   
   if (isNaN(idNum)) {
      return {
         title: 'Not Found',
      };
   }

   const post = await blogPost.getBlogPostById(idNum);
   if (!post) {
      return {
         title: 'Not Found',
      };
   }

   return {
      title: post.title,
      description: post.excerpt,
   };
}

export default async function Blog({ params }: { params: Promise<{ id: string }>}) {
   const { id } = await params;
   const idNum = +id;

   if (isNaN(idNum)) {
      return <NotFound />
   }

   const post = await blogPost.getBlogPostById(idNum);

   if (!post) {
      return <NotFound/>
   }

   return (
      <div className="flex flex-col items-start w-[75%] m-auto">
         <div>
            <h2 className="font-black text-6xl pt-16">
               {post?.title}
            </h2>
            <h3 className="font-black text-3xl pb-4 pt-4">
               {post?.excerpt}
            </h3>
            <p className="font-medium text-xl pb-4 pt-4">
               {post?.content}
            </p>
            <br />
            <span className="text-lg">
               <i>
                  {post?.date}
               </i>
            </span>
         </div>

         <Link href="/">
            <button className="border-2 py-2 px-4 my-4">
               Home
            </button>
         </Link>
      </div>
   )
}