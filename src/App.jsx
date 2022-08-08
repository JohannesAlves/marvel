import './App.css'
import Nav from './components/nav/Nav'
import Character from './components/character/Character'
import CharacterImage from './components/character-image/characterImage'

function App() {

  return (
    <>
      <Nav />
      
      <main>
      <Character />
      <CharacterImage />
      </main>
      </>
  )
}

export default App
