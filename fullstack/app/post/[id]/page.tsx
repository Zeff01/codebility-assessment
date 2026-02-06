import React from 'react'

import { ApiResponse, SinglePost } from '@/types';

import { getRelatedPost } from '@/actions/post-actions';
import Card from '@/components/Card';
import { Post } from '@/types';


const page = async ({params} : {params: Promise<{id:number}>}) => {
        const {id} = await params;

        const posts : Post [] = await getRelatedPost(id);

      let data: SinglePost | null = null;
        try {
            const response = await fetch(`http://localhost:3000/api/posts/${id}`)

            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }


            data = await response.json();
            // console.log(data)
            
        } catch (error) {
            console.log('Error in fetching post', error)
        }

  return (


    <section className='max-container padding-x flex-1 py-15 space-y-10'>

        


            {/* POST */}
            {data?.data ? (
                <div className='space-y-5'>
                        <h1 className='font-bold text-2xl md:text-4xl'>{data.data.title}</h1>
                        <p>{data.data.content}</p>
                </div>
               )
             : (
                <p className="text-center text-red-500">  
                     Failed to load posts. Please try again later.
                </p>
            )}

            
            <div className='space-y-5'>
                <p className='text-2xl font-bold'>Related Posts</p>
 
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                            {posts.slice(0,5).map( post => 
                                <Card key={post.id} post={post}/>
                            )}
                </div>
            </div>
    


    </section>
  )
}

export default page