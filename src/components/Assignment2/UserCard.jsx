const UserCard = (props) => {
    const { userData } = props
    const { name, email, phone, city } = userData

    return (
        <div className="bg-gray-800 max-w-xl mx-auto p-2 rounded-md shadow-xs mt-4">
            <h1>User Information Card</h1>
            <hr></hr>
            <div className="grid grid-cols-2 gap-2">
                <h1>
                    Name
                </h1>
                <p>: {name}</p>
                <h1>
                    Email
                </h1>
                <p>: {email}</p>
                <h1>
                    Phone
                </h1>
                <p>: {phone}</p>
                <h1>
                    City
                </h1>
                <p>: {city}</p>
            </div>
        </div>
    )
}

export default UserCard
