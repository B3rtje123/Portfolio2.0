import Navigation from "../Components/navigation";

import foto1 from "../Pictures/287165138_2243820745783121_655215237275275051_n.jpg"
import foto2 from "../Pictures/Ragnarök-culture-ar1qdh.jpg"
import foto3 from "../Pictures/gvQ9NhQP8wbbM32jXy4V3j.jpg"

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


export default () => {
    return (
        <main className="">
            <div>
                <Navigation />
            </div>
            <div className="max-w-screen-lg flex flex-col align-middle justify-center mx-auto px-8 font-light pt-16 md:px-20 md:pt-20">
                <header className="grid grid-cols-2 gap-8 items-center 
                md:gap-24
                2xl:pt-8 relative">

                    <img src={cSharp} alt="" className="absolute top-2 -right-12 w-2/3 opacity-50 rotate-12 invisible 2xl:visible xl:-right-64 2xl:-right-96 2xl:-top-72" />

                    <div className="w-68 h-44 -skew-x-12  overflow-hidden relative -ml-32 
                    md:h-full
                    xl:skew-x-0 xl:rounded-full xl:shadow-2xl">
                        <img src={foto1} alt="" className="skew-x-12 ml-8 md:-mt-8 xl:skew-x-0 xl:ml-0" />
                    </div>
                    <div className="-skew-x-12">
                        <h2 className="pb-12 text-lg font-medium md:text-2xl xl:text-4xl 2xl:text-5xl">Motorcycling<span className="font-black text-yellow">.</span></h2>
                        <p className="pb-2 text-sm md:text-lg xl:text-2xl 2xl:text-3xl">
                            Riding a motorcycle is my <span className="text-yellow font-medium">PASSION</span>.
                            It makes me feel free and gives me a sense of <span className="text-yellow font-medium">adventure</span>.
                        </p >
                    </div>
                </header>

                <section className="grid grid-cols-2 gap-8 items-center pt-24
                md:gap-24">

                    <div className="z-10">
                        <h2 className="pb-12 text-lg font-medium md:text-2xl xl:text-4xl 2xl:text-5xl">Gaming<span className="font-black text-yellow">.</span></h2>
                        <p className="pb-2 text-sm md:text-lg xl:text-2xl 2xl:text-3xl">
                        In other spare time I love to play <span className="text-yellow font-medium">story based games</span> that let you <span className="text-yellow font-medium">immerge</span> in a whole new world.
                        </p >
                    </div>
                    <div className="w-80 h-full skew-x-12 overflow-hidden relative z-10
                    md:ml-12
                    lg:w-full lg:ml-32
                    xl:skew-x-0 xl:rounded-full xl:shadow-2xl ">
                        <img src={foto2} alt="" className="-skew-x-12 scale-110 -ml-16 md:-ml-2  lg:mt-0 lg:-ml-8 xl:skew-x-0 xl:ml-0 xl:mt-6 xl:scale-150" />
                    </div>
                </section>

                <section className="grid grid-cols-2 gap-8 items-center pt-24 relative 
                md:gap-24">

                    {/* <img src={react} alt="" className="absolute top-16 -right-20 w-2/3 opacity-50 rotate-12 filter- xl:-right-60 2xl:-right-96" /> */}

                    <div className="w-68 h-full -skew-x-12  overflow-hidden relative -ml-32 md:-ml-40 z-10
                    xl:skew-x-0 xl:rounded-full xl:shadow-2xl">
                        <img src={foto3} alt="" className="-scale-x-100 skew-x-12 ml-20 xl:skew-x-0 xl:ml-16 xl:scale-150 xl:-scale-x-150" />
                    </div>

                    <div className="w-full z-10">
                        <h2 className="pb-4 text-lg font-medium md:text-2xl xl:text-4xl xl:pb-12 2xl:text-5xl">Photography<span className="font-black text-yellow">.</span></h2>
                        <div className="flex flex-col">
                            <p className="text-sm md:text-lg xl:text-2xl 2xl:text-3xl">
                                When I see something <span className="text-yellow font-medium">beautiful</span> I want to <span className="text-yellow font-medium">capture</span> it. Often as quick as possible.
    //                          Capturing a moment in time has a lot of <span className="text-yellow font-medium">value</span> to me.
                            </p>
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