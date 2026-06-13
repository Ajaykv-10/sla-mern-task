const Skills = (props) => {
    const { skills } = props

    return (
        <div className="bg-gray-800 max-w-xl mx-auto p-2 rounded-md shadow-xs mt-4">
            <h1>User Skills</h1>
            <hr className="mb-2"></hr>
            <ul className="list-disc list-inside pl-2 text-white">
                {skills.map((skill, index) => (
                    <li key={index} className="py-1">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Skills
