import { Route, Routes } from "react-router-dom"
import HomePage from "./components/HomePage/HomePage"
import LandingPage from "./components/LandingPage/LandingPage"
import DetailCard from "./components/DetailCard/DetailCard"
import { Form } from "./components/Form/Form"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/detail/:id" element={<DetailCard/>} />
        <Route path="/form" element={<Form/>} />
      </Routes>
    </>
  )
}

export default App
