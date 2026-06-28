import { Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Assignment1 from "../components/Assignment1"
import Assignment2 from "../components/Assignment2"
import Assignment3 from "../components/Assignment3"


const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/assignment-one" element={<Assignment1 />}></Route>
        <Route path="/assignment-two" element={<Assignment2 />}></Route>
        <Route path="/assignment-three" element={<Assignment3 />}></Route>
      </Routes>
    </>
  )
}

export default AppRoute