
'use server'

import { Post } from "@/types";
export const getRelatedPost = async (id: number)  =>{
    try {

        const response = await fetch('http://localhost:3000/api/posts')

        const data = await response.json();

        const relatedPost = data.data.filter( (item : Post)  => item.id != id)

    
        console.log(relatedPost);
        
        return relatedPost
        
        
    } catch (error) {   
        console.log('Error in getPost action: ', error);
        
    }

}