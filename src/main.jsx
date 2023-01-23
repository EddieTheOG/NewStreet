import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ErrorPage from './components/ErrorPage'
import Manatee from './components/Manatee/Manatee'
import 'semantic-ui-css/semantic.min.css'
import './index.css'
import HiddenstreetContainer from './components/HiddenStreet/HiddenStreetContainer'
import Whale from './components/Whale/Whale'
import Narwhal from './components/Narwhal/Narwhal'
import ClassesContainer from './components/HiddenStreet/Classes/ClassesContainer'
import MobsContainer from './components/HiddenStreet/Mobs/MobsContainer'
import ItemsContainer from './components/HiddenStreet/Items/ItemsContainer'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "manatee/",
    element: <Manatee />,
  },
  {
    path: "whale/",
    element: <Whale />,
  },
  {
    path: "/narwhal",
    element: <Narwhal />,
  },
  {
    path: "/hiddenstreet",
    element: <HiddenstreetContainer />,
    children: [
      {
        path: "/hiddenstreet/mobs",
        element: <MobsContainer />
      },
      {
        path: "/hiddenstreet/items",
        element: <ItemsContainer />
      },
      {
        path: "/hiddenstreet/classes",
        element: <ClassesContainer />
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
