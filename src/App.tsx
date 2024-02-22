import {
  BrowserRouter, Route, Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <hr />
      <div className="pageMedium">
        <Routes>
          <Route path="/" element={<Home/>}/>     
       </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
