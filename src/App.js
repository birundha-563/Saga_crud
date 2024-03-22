import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sagalist from './component/Sagalist';
import Sagaform from './component/Sagaform';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/Sform' element={<Sagaform/>}/>
      <Route path='/Sform/:id' element={<Sagaform/>}/>
       <Route path='/Slist' element={<Sagalist/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
