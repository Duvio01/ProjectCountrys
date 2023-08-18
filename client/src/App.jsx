import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import LandingPage from "./components/LandingPage/LandingPage"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </>
  )
}

export default App
