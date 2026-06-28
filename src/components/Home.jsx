import { useNavigate } from "react-router-dom"


const Home = () => {
  const navigate = useNavigate()
  const handleClick = (path) => {
    navigate(path)
  }
  return (
    <div className="grid grid-cols-5 gap-3">

      <button onClick={() => handleClick("/assignment-one")} className="bg-white text-black p-3 rounded cursor-pointer">Assignment 1</button>
      <button onClick={() => handleClick("/assignment-two")} className="bg-white text-black p-3 rounded cursor-pointer">Assignment 2</button>
      <button onClick={() => handleClick("/assignment-three")} className="bg-white text-black p-3 rounded cursor-pointer">Assignment 3</button>


    </div>
  )
}

export default Home