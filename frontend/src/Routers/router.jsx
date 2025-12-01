import App from "@/App";
import Login from "@/components/auth/Login";
import Signup from "@/components/auth/Signup";
import Home from "@/components/Home";
import Jobs from "@/components/Jobs";
import Browse from "@/components/Browse";
import { createBrowserRouter } from "react-router-dom";
import Profile from "@/components/Profile";
import JobDescription from "@/components/JobDescription";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>404</p>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/description/:id",
        element: <JobDescription />,
      },
      {
        path: "/browse",
        element: <Browse />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
