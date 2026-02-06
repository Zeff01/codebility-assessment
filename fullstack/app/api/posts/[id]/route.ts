import { NextResponse, NextRequest } from "next/server";
import { posts } from "@/data/posts";

import { RouteParams } from "@/types";
export  async function GET (req: NextRequest, {params} : RouteParams ){

    try {

        const {id} = await params


        if(!id) return NextResponse.json({ message: 'No ID provided' }, { status: 404 })

        const post = posts.find( p => p.id == Number(id))

        if(!post){
            return NextResponse.json({ message: 'cannot find post' }, { status: 404 })
        }

        

            
        return NextResponse.json({success: true, data: post}, {status: 200})

        
    } catch (error) {
        console.log('Error in fetching post: ', error)
        return NextResponse.json({message: 'Internal Server Error', success: false}, {status: 500})
    }

}