import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage';
import DetailPage from './pages/DetailPage';


const App = () => {
  return (
    <>
     <BrowserRouter> 
      <Routes>
        <Route path='/' element={<Homepage/>}></Route>
        <Route path='/detail/:id' element={<DetailPage/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
