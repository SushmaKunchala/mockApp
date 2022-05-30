import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';

function App() {
  

  return (
    <div className="App">
      <button path="Login">LOGIN</button>
      <Routes>
        <Route path='Login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    
    </div>


  );
}

export default App;
