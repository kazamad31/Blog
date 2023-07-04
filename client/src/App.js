import Login from './components/Login';
import Home from './components/Home';
import About from './components/About';
import Logout from './components/Logout';
import Profile from './components/Profile';
import News from './components/News';
import {Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">  
           <Routes>
            <Route exact path="/" element={<Login/>}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/register" element={<Login/>}></Route>
            <Route exact path="/home" element={<Home/>}></Route>
            <Route exact path="/about" element={<About/>}></Route>
            <Route exact path="/profile" element={<Profile/>}></Route>
            <Route exact path="/news" element ={<News/>}></Route>
            <Route exact path="/logout" element={<Logout/>}></Route>
          </Routes>
    </div>
     );
}

export default App;
