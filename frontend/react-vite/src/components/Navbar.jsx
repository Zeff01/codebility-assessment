import { useState } from "react";
import logo from "../assets/Logo_Desktop_purple.svg";
import cad from "../assets/cad.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const link = [
        { id: 1, label: "Shop" },
        { id: 2, label: "Winter Holiday Sale" },
        { id: 3, label: "How it Works" },
        { id: 4, label: "Refer & Earn" },
        { id: 5, label: "Merchant Solutions" }

    ]
    return (
        <>
            <div className="sm:px-30 md:px-10 px-2 py-4 flex xl:justify-center justify-between items-center gap-4">
                {/* Logo div */}
                <div className="logo">
                    <img className="w-32 sm:w-40" src={logo} alt={logo} />
                </div>

                {/* Desktop li */}
                <div className="link hidden xl:flex">
                    <ul className="flex justify-center items-center gap-5">
                        {link.map((name) => (
                            <li
                                key={name.id}
                                className="flex"
                            >
                                <a href="#" className="p-2 text-gray-600 hover:text-gray-800 text-sm sm:text-normal">{name.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Download div */}
                <div className="download flex justify-between items-center gap-5">
                    <button
                        type="button"
                        className="px-6 py-2 bg-gradient-to-tr from-pink-500 to-purple-600 text-white rounded-full hidden xl:flex cursor-pointer"
                    >Download now</button>
                    <div className="hidden 2xl:flex justify-center items-center">
                        <img className="w-4" src={cad} alt={cad} />
                        <p className="uppercase">Cad</p>
                    </div>
                </div>

                {/* Hamburger */}
                <div className="flex items-center gap-3">
                    <div className="xl:hidden flex justify-center items-center">
                        <img className="w-4" src={cad} alt={cad} />
                        <p className="uppercase">Cad</p>
                    </div>                    <button onClick={() => setIsOpen(!isOpen)} className="xl:hidden">
                        {isOpen ? <IoClose size={30} /> : <GiHamburgerMenu size={30} />}
                    </button>
                </div>

            </div>

            {isOpen && (
                <div className="xl:hidden mobile-link px-2 md:px-10">
                    <ul className="flex flex-col justify-center items-start gap-5">
                        {link.map((name) => (
                            <li
                                key={name.id}
                                className="flex"
                            >
                                <a href="#" className="p-2 text-gray-600 hover:text-gray-800 text-sm sm:text-normal">{name.label}</a>
                            </li>
                        ))}
                    </ul>
                    <button
                        type="button"
                        className="my-2 ml-4 px-6 py-2 bg-gradient-to-tr from-pink-500 to-purple-600 text-white rounded-full xl:hidden cursor-pointer">Download now</button>
                </div>
            )}
        </>
    )
}

export default Navbar;