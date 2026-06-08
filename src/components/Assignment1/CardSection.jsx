

const CardSection = ({method,definition}) => {
  return (
    <div className="border border-gray-700 rounded h-min bg-mist-800 p-2">
             <h1 className="text-xl text-cyan-500">{method}</h1>
             <p>{definition}</p>
            <hr className="border-gray-700 my-2"></hr>
            
    </div>
        
         
  )
}

export default CardSection