import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import { Eth } from './pages/Eth';
import { Sol } from './pages/Sol';
import { LandingPage } from './pages/LandingPage';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage></LandingPage>}></Route>
          <Route path='/solana' element={<Sol></Sol>}></Route>
          <Route path='/ethereum' element={<Eth></Eth>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App
