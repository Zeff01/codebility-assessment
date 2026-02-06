export type Post = {
id: number
title: string
excerpt: string
content: string
date:string
}

export type ApiResponse = {
  success: boolean;
  data: Post[];
};

export type RouteParams ={
     params: Promise<{
        id: number;
    }>;
}



export type SinglePost = {
    success: boolean
    data: {
        content: string
        date: string
        excerpt: string
        title: string
        id: number
    }
}