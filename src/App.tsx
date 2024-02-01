import {  Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./styles/app.css"

// Pages
import Homepage from './pages/Homepage';
import Quiz from './pages/Quiz';

// Componets
import Navbar from './components/Navbar';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>

        <Routes>
          <Route path='/quiz' Component={Quiz}/>
          <Route path='/' Component={Homepage}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;
