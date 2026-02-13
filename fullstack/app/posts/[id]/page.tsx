import Link from 'next/link';
   import { posts } from '../../../data/posts';
   import { notFound } from 'next/navigation';

   export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
     const { id } = await params;
     const post = posts.find((p) => p.id === parseInt(id));

     if (!post) {
       notFound();
     }

     return (
       <div className="min-h-screen bg-gray-50 py-12 px-4">
         <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
           <Link 
             href="/"
             className="text-blue-600 hover:text-blue-800 font-medium mb-6 inline-block"
           >
             ← Back to Home
           </Link>
           
           <article>
             <h1 className="text-4xl font-bold text-gray-900 mb-4">
               {post.title}
             </h1>
             <p className="text-gray-500 mb-6">{post.date}</p>
             <div className="prose prose-lg">
               <p className="text-gray-700 leading-relaxed">{post.content}</p>
             </div>
           </article>
         </div>
       </div>
     );
   }

   export async function generateStaticParams() {
     return posts.map((post) => ({
       id: post.id.toString(),
     }));
   }