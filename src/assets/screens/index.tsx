import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router"
import Home from "./Home"
import Projects from "./Projects"
import Hobbys from "./Hobbys"
import Contact from "./Contact"
import Navigation from "../Components/navigation"
import Error404 from "./Error404"

const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
        path: '/Hobbys',
        element: <Hobbys />,
    }, 
    {
        path: '/Projects',
        element: <Projects />,
    },
    {
        path: '/Contact',
        element: <Contact />,
    },
    {
        path: '*', // 404
        element: <Error404 />,
    }
  ])
  
export default ( ) => {
    return (
        <div className="motion-safe:animate-background bg-[length:400%] bg-[width:400%] bg-gradient-to-br from-bg-blue to-bg-pink font-poppins min-h-screen overflow-hidden text-CustomWhite">
            <RouterProvider router={router} />
        </div>
    )
}