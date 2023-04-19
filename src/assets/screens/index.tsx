import { createBrowserRouter } from "react-router-dom"
import { RouterProvider } from "react-router"
import Home from "./Home"
import Projects from "./Projects"
import Hobbys from "./Hobbys"
import Contact from "./Contact"
import Navigation from "../Components/navigation"

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
    }  
  ])
  
export default ( ) => {
    return (
        <div className="animate-background bg-gradient-to-br from-bg-blue to-bg-pink font-poppins min-h-screen overflow-hidden text-CustomWhite">
            <RouterProvider router={router} />
        </div>
    )
}