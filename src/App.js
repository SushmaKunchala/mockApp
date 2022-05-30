import logo from './logo.svg';
import './App.css';
import {Route,Routes,Link} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Videos from './components/Videos';

function App() {
  

  return (
    <div className="App">
    
      <Routes>
      <Route path='/' element={<Home />}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path="/videos" element={<Videos />}></Route>
        
      </Routes>
    
    </div>


  );
}

export default App;
