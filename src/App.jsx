import './App.css'
import Nav from './components/home/nav/Nav'
import Home from './components/home/Home'
import { Routes, Route } from 'react-router-dom'
import Characters from './components/characters/Characters'

function App() {

  return (
    <>
      <Nav />

      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/characters' element= { <Characters /> } />
      </Routes>

      </>
  )
}

export default App
