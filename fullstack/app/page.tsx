import Link from 'next/link';
   import { posts } from '../data/posts';

   export default function Home() {
     return (
       <div className="min-h-screen bg-gray-50 py-12 px-4">
         <div className="max-w-4xl mx-auto">
           <h1 className="text-4xl font-bold text-gray-900 mb-8">My Blog</h1>
           
           <div className="space-y-6">
             {posts.map((post) => (
               <div key={post.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                 <Link href={`/posts/${post.id}`}>
                   <h2 className="text-2xl font-semibold text-blue-600 hover:text-blue-800 mb-2">
                     {post.title}
                   </h2>
                 </Link>
                 <p className="text-gray-600 mb-3">{post.excerpt}</p>
                 <div className="flex justify-between items-center">
                   <span className="text-sm text-gray-500">{post.date}</span>
                   <Link 
                     href={`/posts/${post.id}`}
                     className="text-blue-600 hover:text-blue-800 font-medium"
                   >
                     Read more →
                   </Link>
                 </div>
               </div>
             ))}
           </div>
         </div>
       </div>
     );
   }