import {Route,Routes,Link} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  

  return (
    <div className="App">
    <Link to="home">Home</Link>
    <Link to="Login"></Link>
      <Routes>
        <Route path='Login' element={<Login/>}></Route>
        <Route path='home' element={<Home/>}></Route>
      </Routes>
    
    </div>


  );
}

export default App;
