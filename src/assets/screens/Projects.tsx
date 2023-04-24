import Navigation from "../Components/navigation";

import foto1 from "../Pictures/JachtseizoenLogo.png"
import foto2 from "../Pictures/tgoedterheuleLogo.png"
import foto3 from "../Pictures/SPotify.png"

import react from "../Pictures/react.png"
import html from "../Pictures/html5-logo-best-web-design-psd-html-cms-development-ecommerce-6.png"
import xd from "../Pictures/xd.png"
import photoshop from "../Pictures/adobe-photoshop-logo-0.png"
import afterEffects from "../Pictures/Adobe_After_Effects_CC_icon.svg.png"
import cSharp from "../Pictures/png-clipart-c-programming-language-logo-microsoft-visual-studio-net-framework-javascript-icon-purple-logo.png"
import premierePro from "../Pictures/adobe-premiere-pro-logo-1-1.png"
import middelbaar from "../Pictures/Engineering2022_0.png"
import howest from "../Pictures/HowestWhite.jpg"
import mct from "../Pictures/Opleidingslogo_Howest_Multimedia_en_Creative_Technologies_staand_BLAUW_RGB.png"
import { Link } from "react-router-dom";


export default () => {
    return (
        <main>
            <div>
                <Navigation />
            </div>
            <div className="max-w-screen-lg flex flex-col align-middle justify-center mx-auto px-8 font-light pt-16 md:px-20 md:pt-20">
                <header className="grid grid-cols-2 gap-8 items-center 
                md:gap-24
                2xl:pt-8 relative">

                    <img src={cSharp} alt="" className="absolute top-2 -right-12 w-2/3 opacity-50 rotate-12 invisible 2xl:visible xl:-right-64 2xl:-right-96 2xl:-top-72" />

                    <div className="w-68 h-44 -skew-x-12  overflow-hidden relative -ml-32 bg-[#14213d]
                    md:h-full
                    xl:skew-x-0 xl:rounded-full xl:shadow-2xl">
                        <img src={foto1} alt="" className="skew-x-12 scale-50 ml-12 md:-mt-0 md:ml-8 md:scale-75 xl:skew-x-0 xl:ml-0" />
                    </div>
                    <div className="-skew-x-12 xl:skew-x-0">
                        <h2 className="pb-12 text-lg font-medium md:text-2xl xl:text-4xl 2xl:text-5xl">Jachtseizoen<span className="font-black text-yellow">.</span></h2>
                        <p className="pb-2 text-sm md:text-lg xl:text-2xl 2xl:text-3xl">
                            A game based on <span className="text-yellow font-medium">hide & seek</span> &#40;for adults&#41;. <span className="text-yellow font-medium">A fun and exciting game</span> to play with friends and family.
                        </p >
                        <Link to={"https://proud-bush-003ad7c03.2.azurestaticapps.net/"} target="_blank" className="text-yellow font-medium transition-all ease-in-out duration-200 hover:text-[#fca311]" >&#40;<span className="underline">Click here to play the game!</span>&#41;</Link>
                    </div>
                </header>

                <section className="grid grid-cols-2 gap-8 items-center pt-24 align-middle justify-center
                md:gap-24">

                    <div className="z-10 ">
                        <h2 className="pb-12 text-lg font-medium md:text-2xl xl:text-4xl 2xl:text-5xl">'t goed ter Heule<span className="font-black text-yellow">.</span></h2>
                        <p className="pb-2 text-sm md:text-lg xl:text-2xl 2xl:text-3xl">
                            A project made entirely in <span className="text-yellow font-medium">WordPress</span> for a local farm. Where you can order products from the store or make reservations for group activities.
                        </p >
                        <p className="text-yellow font-medium">This was a school project!</p>
                        <Link to={"http://examen.bertdeschrevel.be/"} target="_blank" className="underline text-yellow font-medium transition-all ease-in-out duration-200 hover:text-[#93a900]">Go to website &#8594;</Link>
                    </div>
                    <div className="w-80 h-full skew-x-12 overflow-hidden relative z-10 bg-[#fff]
                    md:ml-16
                    lg:w-full lg:ml-32
                    xl:skew-x-0 xl:rounded-full xl:shadow-2xl ">
                        <img src={foto2} alt="" className="-skew-x-12 scale-50 mt-8 -ml-8 md:scale-90 md:-ml-2 lg:mt-0 lg:-ml-0 xl:skew-x-0 xl:scale-100 xl:ml-16 xl:mt-12 2xl:mt-28" />
                    </div>
                </section>

                <section className="grid grid-cols-2 gap-8 items-center pt-24 relative align-middle justify-center
                md:gap-24">

                    {/* <img src={react} alt="" className="absolute top-16 -right-20 w-2/3 opacity-50 rotate-12 filter- xl:-right-60 2xl:-right-96" /> */}

                    <div className="w-68 h-full -skew-x-12  overflow-hidden relative -ml-32 md:-ml-40 z-10
                    xl:skew-x-0 xl:rounded-full xl:shadow-2xl">
                        <img src={foto3} alt="" className="skew-x-12 ml-12 md:scale-125 xl:skew-x-0 xl:ml-0 2xl:mt-16 xl:scale-150" />
                    </div>

                    <div className="w-full z-10 -skew-x-12 xl:skew-x-0">
                        <h2 className="pb-4 text-lg font-medium md:text-2xl xl:text-4xl xl:pb-12 2xl:text-5xl">Spotify Add<span className="font-black text-yellow">.</span></h2>
                        <div className="flex flex-col">
                            <p className="text-sm md:text-lg xl:text-2xl 2xl:text-3xl">
                                This is a Spotify Add made with <span className="text-yellow font-medium">Adobe After Effects</span>. Over time I've gotten better at using After Effects and I'm still learning new things every day.
                            </p>
                            <Link target="_blank" to={"https://www.youtube.com/watch?v=dm5RymAl_V4&feature=youtu.be&ab_channel=ThePotato"} className="underline text-yellow font-medium transition-all ease-in-out duration-200 hover:text-[#2f46ba]">View the video &#40;35 seconds&#41;</Link>
                        </div>
                    </div>
                </section>

                <footer className="w-full text-center py-4">
                    <h1 className="text-xs">
                        &#169; 2023 by Bert Deschrevel
                    </h1>
                </footer>
            </div>
        </main>
    );
};