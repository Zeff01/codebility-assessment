import Link from "next/link";
import posts from "../../data/PostData.ts";
import NoPostFoundScreen from "./screens/NoPostFoundScreen.tsx";
import PostFoundScreen from "./screens/PostFoundScreen.tsx";

// Notes:
// (1) We set this as an async/await function because, in App Router,
// 'params' can be a Promise. We need 'await' for resolution
// before usage. Also, not doing so returns a warning when testing, and
// the output isn't what the desired output is.
//
// (2) Destructuring "params" is more efficient than manually
// extracting params from 'props'.

const SomePage = async ({ params }) => {
  const { id } = await params; // unwrap if params is a Promise
  const post = posts.find((p) => p.id.toString() === id); // gets the instance of a Post object if id exists in the data file.

  // This renders the UI for the existent or non-existent post. I made them into separate pages for cleaner code, conditionally rendering them
  // depending on whether or not a particular post id exists in the data file.
  //
  // Since a post instance is of the Object data type, I used the spread operator to treat each property in the object as individual props.
  return (
    <>
      <div>{post ? <PostFoundScreen {...post} /> : <NoPostFoundScreen />}</div>
    </>
  );
};

export default SomePage;
