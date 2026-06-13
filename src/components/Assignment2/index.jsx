import StudentProfile from "./StudentProfile"
import EmployeeCard from "./EmployeeCard"
import Product from "./Product"
import Skills from "./Skills"

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

    const productData = {
        productName: "iPhone 15 Pro",
        productPrice: "₹1,34,900",
        productCategory: "Smartphones",
        productBrand: "Apple"
    }

    const userSkills = ["HTML", "CSS", "JavaScript", "React", "Node.js"]

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
                <Product
                    productName={productData.productName}
                    productPrice={productData.productPrice}
                    productCategory={productData.productCategory}
                    productBrand={productData.productBrand}
                />
                <Skills skills={userSkills} />
            </div>
        </>
    )
}
export default Assignment2