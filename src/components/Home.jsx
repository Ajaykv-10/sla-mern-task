import { useNavigate } from "react-router-dom"


const Home = () => {
    const navigate=useNavigate()
    const handleClick=()=>{
        navigate("/assignment-one")
    }
  return (
    <div className="grid grid-cols-5 gap-3">
        <div>
            <button onClick={handleClick} className="bg-white text-black p-3 rounded cursor-pointer">Assignment 1</button>
        </div>

    </div>
  )
}

export default Home