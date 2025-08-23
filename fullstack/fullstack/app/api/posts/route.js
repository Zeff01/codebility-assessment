import { posts } from '../../../data/posts'; // Import the "posts" data from the local file located at "../../../data/posts"

// Define an asynchronous function called GET.
export async function GET() {
    // Convert the posts array into a JSON string using JSON.stringify
  // so it can be sent as an HTTP response.
  return new Response(JSON.stringify(posts), {
     
    // Set the status code of the response to 200 (OK) if the request is successful,
    status: 200,

     // Define the headers of the response.
    // "Content-Type" is set to "application/json" 
    // so the client knows the response is JSON data.
    headers: { 'Content-Type': 'application/json' },
  });
}
