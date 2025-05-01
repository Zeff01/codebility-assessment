import { posts } from "../../../../data/posts";

export default function handler(req, res) {
  if (req.method === "GET") {
    const summarized = posts.map(({ id, title, excerpt, date }) => ({
      id,
      title,
      excerpt,
      date,
    }));
    res.status(200).json(summarized);
  } else {
    res.status(405).json({error: 'Method not allowed'});
  }

  
}
