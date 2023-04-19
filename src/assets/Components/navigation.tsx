import { Link } from 'react-router-dom'
import { useState } from "react";

export default ( ) => {
    const [navbar, setNavbar] = useState(false);
    return (
        <nav className="w-full backdrop-blur-md sticky shadow-md z-20 ">
            <div className="justify-between px-4 mx-auto lg:max-w-full md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <Link to={'../'} className="outline-none focus:outline-double focus:outline-1 focus:outline-yellow">
                        <h2 className="
                        text-CustomWhite text-2xl transition-all duration-300 ease-in-out font-light 
                        after:block after:w-0 after:h-0.5 after:bg-red after:transition-all after:duration-300 after:ease-in-out after:origin-left after:transform 
                        hover:after:w-full hover:text-yellow">
                            Bert Deschrevel<span className="text-red font-black">.</span>
                        </h2>
                        </Link>
                        {/* hamburger-menu */}
                        <div className="md:hidden">
                            <button
                                className="p-2 text-CustomWhite rounded-md outline-none transition-all duration-300 ease-in-out"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
                        <ul className="flex list-none flex-col items-center justify-center space-y-8 lg:flex-row md:flex-row md:flex  md:space-x-6 md:space-y-0">
                            <li>
                                <Link to={'../'} className="text-CustomWhite text-2xl transition-all duration-300 ease-in-out font-light 
                                after:block after:w-0 after:h-0.5 after:bg-red after:transition-all after:duration-300 after:ease-in-out after:origin-left after:transform 
                                hover:after:w-full
                                hover:text-yellow
                                focus:after:w-full focus:text-yellow focus:border-b-2 focus:border-b-red focus:outline-none
                                active:after:w-full active:text-yellow">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to={'../Hobbys'} className="text-CustomWhite text-2xl transition-all duration-300 ease-in-out font-light 
                                after:block after:w-0 after:h-0.5 after:bg-red after:transition-all after:duration-300 after:ease-in-out after:origin-left after:transform 
                                hover:after:w-full
                                hover:text-yellow
                                focus:after:w-full focus:text-yellow focus:border-b-2 focus:border-b-red focus:outline-none">
                                    Hobbys
                                </Link>
                            </li>
                            <li>
                                <Link to={'../Projects'} className="text-CustomWhite text-2xl transition-all duration-300 ease-in-out font-light 
                                after:block after:w-0 after:h-0.5 after:bg-red after:transition-all after:duration-300 after:ease-in-out after:origin-left after:transform 
                                hover:after:w-full
                                hover:text-yellow
                                focus:after:w-full focus:text-yellow focus:border-b-2 focus:border-b-red focus:outline-none
                                active:after:w-full active:text-yellow">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to={'../Contact'} className="text-CustomWhite text-2xl transition-all duration-300 ease-in-out font-light 
                                after:block after:w-0 after:h-0.5 after:bg-red after:transition-all after:duration-300 after:ease-in-out after:origin-left after:transform 
                                hover:after:w-full
                                hover:text-yellow
                                focus:after:w-full focus:text-yellow focus:border-b-2 focus:border-b-red focus:outline-none">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}