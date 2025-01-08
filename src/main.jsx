import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Latest } from './Components/Latest/Latest.jsx';

import { Men } from './Components/Men/Men.jsx';
import { Tshirt } from './Components/Men/Tshirt.jsx';
import { Jacket } from './Components/Men/Jacket.jsx';
import { Jean } from './Components/Men/Jean.jsx';
import { Women } from "./Components/Women/Women.jsx";
import { Shoe } from './Components/Men/Shoe.jsx';
import { Dress } from "./Components/Women/Dress.jsx";
import { Flatshoe } from "./Components/Women/Flatshoe.jsx";
import { Tshirtt } from "./Components/Women/Tshirtt.jsx";
import { Matchingset } from "./Components/Women/Matchingset.jsx";
import { Shoecat } from './Components/Category/Shoecat.jsx';
import { Watchcat } from './Components/Category/Watchcat.jsx';
import { Tshirtcat } from './Components/Category/Tshirtcat.jsx';
import { Hatcat } from './Components/Category/Hatcat.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
{
  path: "/latest",
  element: <Latest />,
},
{
  path: "/men",
  element: <Men />,
  children: [
    {
      path: "tshirt",
      element: <Tshirt/>,
    },
    {
      path: "jacket",
      element:<Jacket/>,
    },
    {
      path: "jean",
      element:<Jean/>,
    },
    {
      path: "Shoe",
      element:<Shoe/>,
    },
  ],
},
{
  path: "/women",
  element: <Women/>,
  children: [
    {
      path: "tshirt",
      element: <Tshirtt/>,
    },
    {
      path: "dress",
      element:<Dress/>,
    },
    {
      path: "flatshoe",
      element:<Flatshoe/>,
    },
    {
      path: "matchingset",
      element:<Matchingset/>,
    },
  ],
},
{
  path: "/shoecat",
  element: <Shoecat/>,
},
{
  path: "/watchcat",
  element: <Watchcat/>,
},
{
  path: "/tshirtcat",
  element: <Tshirtcat/>,
},
{
  path: "/hatcat",
  element: <Hatcat/>,
},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
