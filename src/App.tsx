import { Suspense } from 'react'
import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Technologies from './components/technologies/Technologies'
import type { ITechnology } from './types/TechnologyTypes'

const technologyFetch = async():Promise<ITechnology[]> => {
    const response = await fetch('/data.json')
     return await response.json() 
  }

  const technologyStacks = technologyFetch()

function App() {

  return (
    <>
      <Nav />

      <Hero />
      <Suspense fallback="Loading......">
        <Technologies technologyStacks = {technologyStacks} />
      </Suspense>
    </>
  )
}

export default App
