import './App.css'
import Nav from './components/nav/Nav'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import Characters from './components/characters/Characters'
import Avengers from './components/avengers/Avengers'


function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/characters' element= { <Characters /> } />
        <Route path='/avengers' element= { <Avengers /> } />
      </Routes>

      </>
  )
}

export default App
