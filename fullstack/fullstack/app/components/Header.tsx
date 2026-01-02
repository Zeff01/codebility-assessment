import { IoMdListBox } from "react-icons/io";

const Header = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <IoMdListBox className="text-blue-500 text-xl" />
        <h3 className="text-lg font-semibold">Simple Blog</h3>
      </div>

      <ul className="flex items-center gap-4">
        <li>Home</li>
        <li>About</li>
        <li>
          <button>Subscribe</button>
        </li>
      </ul>
    </>
  );
};

export default Header;
