import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import Navpages from './component/Navpages';
import './componentcss/Homestyle.css';
import './componentcss/footstyle.css';
import Foot from './component/Foot';
import Us from './component/Us';
import Saudi from './component/Saudi';
import Uae from './component/Uae';
import Cars from './component/Cars';

function App() {
  return (
    <div className="App">  
    <BrowserRouter>
    <Navpages/> 
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='Us' element={<Us/>}/>
    <Route path='Saudi' element={<Saudi/>}/>
    <Route path='Uae' element={<Uae/>}/>
    <Route path='Cars' element={<Cars/>}/>
    </Routes>
    <Foot/>
    </BrowserRouter>
    </div>
  );
}

export default App;


