const EmployeeCard = (props) => {
    const { name, employeeId, department, salary, experience } = props

    return (
        <div className="bg-gray-800 max-w-xl mx-auto p-2 rounded-md shadow-xs mt-4">
            <h1>Employee Card</h1>
            <hr></hr>
            <div className="grid grid-cols-2 gap-2">
                <h1>
                    Employee Name
                </h1>
                <p>: {name}</p>
                <h1>
                    Employee ID
                </h1>
                <p>: {employeeId}</p>
                <h1>
                    Department
                </h1>
                <p>: {department}</p>
                <h1>
                    Salary
                </h1>
                <p>: {salary}</p>
                <h1>
                    Experience
                </h1>
                <p>: {experience}</p>
            </div>
        </div>
    )
}

export default EmployeeCard
