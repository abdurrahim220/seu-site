import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Events from "../pages/Events/Events";
import Gallery from "../pages/Gallery/Gallery";
import Contact from "../pages/Contact/Contact";
import Register from "../pages/Pages/Register/Register";
import Committee from "../pages/Pages/Committee/Committee";
import Members from "../pages/Pages/Members/Members";
import EventsDetails from "../pages/Events/EventsDetails";
import NewsDetails from "../pages/Home/News/NewsDetails";
import Contest from "../pages/Contest/Contest";
import Login from "../pages/Login/Login";
import Reg from "../pages/Reg/Reg";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/events", element: <Events /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/contact", element: <Contact /> },
      { path: "/contest", element: <Contest /> },
      { path: "/register", element: <Register /> },
      { path: "/committee", element: <Committee /> },
      { path: "/members", element: <Members /> }, {
        path: '/eventsDetails/:id',
        element: <EventsDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/events/${params.id}`)
      },
      {
        path:'/newsDetails/:id',
        element:<NewsDetails/>,
        loader:({params}) => fetch(`http://localhost:5000/news/${params.id}`)
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/reg',
        element:<Reg/>
      }
    ],

  },

]);

export default router;
