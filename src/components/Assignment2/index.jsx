import StudentProfile from "./StudentProfile"
import EmployeeCard from "./EmployeeCard"

const Assignment2 = () => {

    const studentData = {
        name: "Ajay",
        age: 28,
        course: "Mern Stack",
        city: "Nagercoil"
    }

    const employeeData = {
        name: "Ajay Kumar",
        employeeId: "EMP-1001",
        department: "Engineering",
        salary: "₹75,000",
        experience: "3 Years"
    }

    return (
        <>
            <div>
                <StudentProfile studentData={studentData} />
                <EmployeeCard
                    name={employeeData.name}
                    employeeId={employeeData.employeeId}
                    department={employeeData.department}
                    salary={employeeData.salary}
                    experience={employeeData.experience}
                />
            </div>
        </>
    )
}
export default Assignment2