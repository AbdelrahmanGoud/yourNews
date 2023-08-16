import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './componentcss/Homestyle.css';
import './componentcss/footstyle.css';
import Navpage from './componentjs/Navpage';
import Footp from './componentjs/Footp';
import Homep from './componentjs/Homep';
import Usp from './componentjs/Usp';
import Suidep from './componentjs/Suidep';
import Uaep from './componentjs/Uaep';
import Carsp from './componentjs/Carsp';
function App() {
  return (
    <div className="App">  
    <BrowserRouter>
    <Navpage></Navpage>
    <Routes>
    <Route path='/' element={<Homep/>}></Route>
    <Route path='Us' element={<Usp/>}/>
    <Route path='Saudi' element={<Suidep/>}/>
    <Route path='Uae' element={<Uaep/>}/>
    <Route path='Cars' element={<Carsp/>}/>
    </Routes>
    <Footp/>
    </BrowserRouter>
    </div>
  );
}

export default App;


