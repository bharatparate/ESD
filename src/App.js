import './App.scss';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import Converge from './pages/Converge';
import Collaborate from './pages/Collaborate';


const App = () => {
  return (
    <>
     <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/converge' element={<Converge/>}></Route>
        <Route path='/collaborate' element={<Collaborate/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
