import {Routes, Route,BrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import './index.css'
import Lockscreen from "./pages/Lockscreen";
const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Lockscreen />} />
        <Route path="/home" element={<Home />}/>
        
      </Routes>
    </BrowserRouter>
  )
}
export default App;