const StudentProfile = (props) => {
    const { studentData } = props
    return <div className="bg-gray-800 max-w-xl mx-auto p-2 rounded-md shadow-xs">
        <h1 >Student Profile</h1>
        <hr></hr>
        <div className="grid  grid-cols-2 gap-2  ">
            <h1>
                Name
            </h1>
            <p>: {studentData.name}</p>
            <h1>
                Age
            </h1>
            <p>: {studentData.age}</p>
            <h1>
                Course
            </h1>
            <p>: {studentData.course}</p>
            <h1>
                City
            </h1>
            <p>: {studentData.city}</p>
        </div></div>
}

export default StudentProfile