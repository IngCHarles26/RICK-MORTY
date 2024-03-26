import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Landing from "./elements/screens/Landing";
import Home from "./elements/screens/Home";
import Error from "./elements/screens/Error";
import About from "./elements/screens/About";

export const routes = {
  landing: '/',
  home: '/home',
  about: '/about',
}


export const router = createBrowserRouter([
  {
    path:'https://rick-morty-git-main-carloscodevs-projects.vercel.app/',
    element: <App />,
    children:[
      {
        index: true,
        element: <Landing />
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '*',
        element: <Error />
      },
    ]
  },
])