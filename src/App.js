import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import { Provider } from 'react-redux'
import store from './utils/store';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainContainer from './components/MainContainer';
import VedioPlayer from './components/VedioPlayer';

const appRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'/watch',
        element:<VedioPlayer/>
      }
    ]
  }
])

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header/>
        <RouterProvider router={appRouter}/>
      </Provider>
    </div>
  )
}

export default App

