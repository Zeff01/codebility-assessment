import data from '@/data/posts';

export async function GET(req:Request, { params }: { params: { id: number } }) {
    const id = (await params).id;
    if(data[id]) 
        return new Response(JSON.stringify(data[id]), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    else return new Response("Data not found", {status: 404});
}
