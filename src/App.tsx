import React from 'react'
import TrainerRouter from './Components/TrainerRouter'
import { Footer } from './Components/UI/Footer'
import { Header } from './Components/UI/Header'

function App() {
  return (
    <div className="max-w-screen-xl space-y-4 mx-auto my-0 flex flex-col justify-center">
      <Header />
      <TrainerRouter />
      <Footer />
    </div>
  )
}

export default App
