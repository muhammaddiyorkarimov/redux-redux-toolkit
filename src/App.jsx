import React from 'react'
// react router dom
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// components
import { Login, Main, Register } from './components'
// layout
import RootLayout from './Layout/RootLayout';

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Main/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App
