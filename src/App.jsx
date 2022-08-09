import './App.css'
import Nav from './components/home/nav/Nav'
import Character from './components/home/character/Character'
import CharacterImage from './components/home/character-image/characterImage'
import BtnNextPage from './components/home/btn-next-page/BtnNextPage'

function App() {

  return (
    <>
      <Nav />
      
      <main>
      <Character />
      <CharacterImage />
      <BtnNextPage />
      </main>

      </>
  )
}

export default App
