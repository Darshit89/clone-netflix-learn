import { Suspense, useState } from 'react'
import './App.scss'
import './scss/main.scss'
import HomeScreen from './pages/HomeScreen/HomeScreen'
import { RouterProvider } from "react-router-dom";
import { router } from './pages/Routes/routes';

function App() {
  return (
    <div className='app'>
      <Suspense fallback={<h1>Loading...</h1>}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

export default App
