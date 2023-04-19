import Navigation from "../Components/navigation";

import foto1 from "../Pictures/bert-2.jpg"
import foto2 from "../Pictures/52598601_1255832054582000_7755671425641349120_n.jpg"
import foto3 from "../Pictures/Education-Pic.jpg"

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
            <Navigation />
            <div className="container mx-auto px-16 pt-8">
                <header className="grid grid-cols-2 gap-8 items-center">
                    <div className="w-68 h-44 -skew-x-12  overflow-hidden relative -ml-32">
                        <img src={foto1} alt="" className="scale-110 skew-x-12 ml-8" />
                    </div>
                    <h1 className="">
                        Hi,
                        my name is <span className="text-yellow font-semibold">Bert</span> and I'm a <span className="text-yellow">Full-stack Developer</span> from Belgium.
                    </h1>
                </header>
                <section className="grid grid-cols-2 gap-8 items-center pt-24">
                    <div>
                        <h2 className="">About me <span className="font-black text-red">.</span></h2>
                        <p className="pb-2 text-sm">
                            Hi,
                            I'm a developer who loves everything tech
                        </p >
                    </div>
                    <div className="w-80 h-44 bg-yellow skew-x-12 overflow-hidden relative">
                        <img src={foto2} alt="" className="-skew-x-12 scale-75 -ml-16 -mt-16" />
                    </div>
                </section>
                <section>
                    
                </section>
            </div>
        </main>
    );
};