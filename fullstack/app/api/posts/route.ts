import { NextResponse } from "next/server";
import { posts } from "@/data/posts";
export  async function GET (){

    try {

        if (!posts || posts.length === 0)  return NextResponse.json({ message: 'No posts available' }, { status: 404 })

            
        return NextResponse.json({success: true, data: posts}, {status: 200})

        
    } catch (error) {
        console.log('Error in fetching post: ', error)
        return NextResponse.json({message: 'Internal Server Error', success: false}, {status: 500})
    }

}