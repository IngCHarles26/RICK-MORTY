import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Landing from "./elements/screens/Landing";
import Home from "./elements/screens/Home";
import Error from "./elements/screens/Error";
import Detail from "./elements/screens/Detail";
import About from "./elements/screens/About";

export const routes = {
  landing: '/',
  home: '/home',
  about: '/about',
}


export const router = createBrowserRouter([
  {
    path:'',
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