import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Assignment1 from "../components/Assignment1"


const AppRoute = () => {
  return (
 <>
 <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/assignment-one" element={<Assignment1/>}></Route>
 </Routes>
 </>
  )
}

export default AppRoute