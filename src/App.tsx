import './App.css'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Technologies from './components/technologies/Technologies'
import type { ITechnology } from './types/TechnologyTypes'

const technologyFetch = async():Promise<ITechnology[]> => {
    const response = await fetch('/data.json')
     return await response.json() 
  }

  const technologyPlayers = technologyFetch()

function App() {

  return (
    <>
      <Nav />

      <Hero />

      <Technologies technologyPlayers = {technologyPlayers} />
    </>
  )
}

export default App
