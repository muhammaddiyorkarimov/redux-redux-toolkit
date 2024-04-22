import React from 'react'
// react router dom
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'

// components
import { Main, Login, Register } from './components';

// layouts
import RootLayout from './Layout/RootLayout';

function App() {

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Main />} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
      </Route>
    )
  )

  return (
    <RouterProvider router={routes} />
  )
}

export default App