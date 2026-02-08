import data from '@/data/posts';

export async function GET(req:Request) {
  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
