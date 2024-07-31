import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/home'
import Leave from './components/leave'
import Attendence from './components/attendence'
import Login from './components/login'
import Applyleave from './components/applyleave'
import { useState } from 'react'
function App() {
  const [page, setPage] = useState('user');
  function handlePageSwitch(newPage) {
    setPage(newPage);
  }
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route element={<Login page={page} onPageSwitch={handlePageSwitch}/>} path='/'/>
        <Route element ={<Home/>} path="/Home" />
        <Route element ={<Leave/>} path="/Leave" />
        <Route element ={<Attendence/>} path="/Attendence" />
        <Route element={<Applyleave/>} path="/Applyleave"/>
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;