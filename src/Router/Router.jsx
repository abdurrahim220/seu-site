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
import JobsDetails from "../pages/Home/Job/JobsDetails";
import Dashboard from "../Layout/Dashboard";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import UserCart from "../pages/Dashboard/UserCart/UserCart";
import AndroidCommunity from "../Community/AndroidCommunity/AndroidCommunity";
import AndroidDetails from "../Community/AndroidCommunity/AndroidDetails";
import PostJobs from "../pages/Dashboard/PostJobs/PostJobs";
import PostEvents from "../pages/Dashboard/PostEvents/PostEvents";
import PostCourse from "../pages/Dashboard/PostCourse/PostCourse";
import PostNews from "../pages/Dashboard/PostNews/PostNews";
import GalleryPage from "../pages/Gallery/GalleryPage";
import AdminDashboard from "../pages/Dashboard/AdminDashboard/AdminDashboard";
import AllAndroidCourse from "../pages/Dashboard/PostCourse/AllAndroidCourse";

const router = createBrowserRouter([

  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/events", element: <Events /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/galleryPage", element: <GalleryPage /> },
      { path: "/contact", element: <Contact /> },
      { path: "/contest", element: <Contest /> },
      { path: "/android", element: <AndroidCommunity /> },
      { path: "/register", element: <Register /> },
      { path: "/committee", element: <Committee /> },
      { path: "/members", element: <Members /> }, {
        path: '/eventsDetails/:id',
        element: <EventsDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/events/${params.id}`)
      },
      {
        path: '/newsDetails/:id',
        element: <NewsDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      },
      {
        path: '/jobsDetails/:id',
        element: <JobsDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/jobs/${params.id}`)
      },

      {
        path: '/reg',
        element: <Reg />
      }
      ,

      {
        path: '/androidDetails/:id',
        element: <AndroidDetails />,
        loader: ({ params }) => fetch(`http://localhost:5000/android/${params.id}`)
      }
    ],

  },
  {
    path: 'dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'userCart',
        element: <UserCart />
      },
      {
        path: 'allDashboard',
        element: <AdminDashboard />
      },
      
      {
        path: 'allUser',
        element: <AllUser />
      },
      {
        path: 'postJobs',
        element: <PostJobs />
      },
      {
        path: 'postCourse',
        element: <AllAndroidCourse/>

      },
      {
        path: 'postEvents',
        element: <PostEvents />
      },
      {
        path: 'postNews',
        element: <PostNews />
      },

      {
        path: 'login',
        element: <Login />
      },
    ]

  }

]);

export default router;
