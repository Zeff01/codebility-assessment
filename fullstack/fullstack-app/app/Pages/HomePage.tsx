import FABIcon from "../Components/FABIcon";
import Blogs from "../Components/Blogs";

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center p-10">
      {/*Blog Input Button (Visuals Only)*/}
        <FABIcon />
        
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold text-center text-[#AA3431] mb-4">Welcome to PostNest!</h1>
        <div className="w-3/4 h-0.5 bg-[#846038] my-5"></div>
      </div>
      {/*Blog Posts*/}
      <div className="flex flex-col items-center">
        <Blogs />
      </div>



    </div>
  );
}
