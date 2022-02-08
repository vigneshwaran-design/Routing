// import react from 'react';
import Routing from './components/routing.js';
import Age from './components/age.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <Router>
       <Routes>
         <Route exact path="/" element={<Routing />}/>
         <Route exact path="age" element={<Age />}/>     
       </Routes>
    </Router>
    
  );
}

export default App;
