import StudentProfile from "./StudentProfile"

const Assignment2 = () => {

    const studentData = {
        name: "Ajay",
        age: 28,
        course: "Mern Stack",
        city: "Nagercoil"
    }
    return (
        <>
            <div>
                <StudentProfile studentData={studentData} />
            </div>
        </>
    )
}
export default Assignment2