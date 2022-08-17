import './App.css';
import Nav from './components/Nav/Nav';
import Home from './components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Characters from './components/Characters/Characters';
import Comics from './components/Comics/Comics';

function App() {
    return (
        <>
            <Nav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<Characters />} />
                <Route path="/comics" element={<Comics />} />
            </Routes>
        </>
    );
}

export default App;
