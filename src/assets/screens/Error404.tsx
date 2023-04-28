import { Link } from "react-router-dom";
import Navigation from "../Components/navigation";
import Home from "./Home";

export default () => {
    return (
        <main>
            <Navigation />

            <div className="flex flex-col items-center justify-center h-screen drop-shadow-2xl">
                <h1 className="text-9xl font-bold"><span>4</span><span className="text-red">0</span><span>4</span></h1>
                <h2 className="text-2xl font-bold">Page not found</h2>
            </div>
        </main>
    )
};