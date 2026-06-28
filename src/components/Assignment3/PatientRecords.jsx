import { useState, useEffect } from "react"

const STORAGE_KEY = "patients"
const emptyForm = { patientName: "", age: "", disease: "", doctorName: "" }

const PatientRecords = () => {
  const [form, setForm] = useState(emptyForm)
  const [patients, setPatients] = useState([])
  const [errors, setErrors] = useState({})
  const [successMsg, setSuccessMsg] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) setPatients(JSON.parse(stored))
  }, [])

  const validate = () => {
    const newErrors = {}
    if (!form.patientName.trim()) newErrors.patientName = "Patient Name is required"
    if (!form.age.trim()) newErrors.age = "Age is required"
    else if (isNaN(form.age) || +form.age <= 0 || +form.age > 150)
      newErrors.age = "Enter a valid age (1–150)"
    if (!form.disease.trim()) newErrors.disease = "Disease is required"
    if (!form.doctorName.trim()) newErrors.doctorName = "Doctor Name is required"
    return newErrors
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: "" })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    const updated = [...patients, { ...form, id: Date.now() }]
    setPatients(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setForm(emptyForm)
    setSuccessMsg("Patient record saved successfully!")
    setTimeout(() => setSuccessMsg(""), 3000)
  }

  const handleDelete = (id) => {
    const updated = patients.filter((p) => p.id !== id)
    setPatients(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-white">🏥 Patient Records</h2>

      {/* Form */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">New Patient Entry</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Patient Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Patient Name <span className="text-red-400">*</span></label>
              <input
                type="text"
                name="patientName"
                value={form.patientName}
                onChange={handleChange}
                placeholder="e.g. Priya Patel"
                className={`bg-gray-900 border rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-emerald-500
                  ${errors.patientName ? "border-red-500" : "border-gray-600"}`}
              />
              {errors.patientName && <span className="text-red-400 text-xs">{errors.patientName}</span>}
            </div>

            {/* Age */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Age <span className="text-red-400">*</span></label>
              <input
                type="number"
                name="age"
                value={form.age}
                onChange={handleChange}
                placeholder="e.g. 34"
                min="1" max="150"
                className={`bg-gray-900 border rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-emerald-500
                  ${errors.age ? "border-red-500" : "border-gray-600"}`}
              />
              {errors.age && <span className="text-red-400 text-xs">{errors.age}</span>}
            </div>

            {/* Disease */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Disease <span className="text-red-400">*</span></label>
              <input
                type="text"
                name="disease"
                value={form.disease}
                onChange={handleChange}
                placeholder="e.g. Diabetes"
                className={`bg-gray-900 border rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-emerald-500
                  ${errors.disease ? "border-red-500" : "border-gray-600"}`}
              />
              {errors.disease && <span className="text-red-400 text-xs">{errors.disease}</span>}
            </div>

            {/* Doctor Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Doctor Name <span className="text-red-400">*</span></label>
              <input
                type="text"
                name="doctorName"
                value={form.doctorName}
                onChange={handleChange}
                placeholder="e.g. Dr. Arjun Mehta"
                className={`bg-gray-900 border rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-emerald-500
                  ${errors.doctorName ? "border-red-500" : "border-gray-600"}`}
              />
              {errors.doctorName && <span className="text-red-400 text-xs">{errors.doctorName}</span>}
            </div>
          </div>

          <button
            type="submit"
            className="self-start bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors cursor-pointer"
          >
            + Save Record
          </button>
        </form>

        {successMsg && (
          <div className="mt-3 bg-green-900 border border-green-700 text-green-400 text-sm px-4 py-2 rounded-lg">
            {successMsg}
          </div>
        )}
      </div>

      {/* Table */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">All Patient Records</h3>
          <span className="bg-emerald-900 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full">{patients.length} records</span>
        </div>

        {patients.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <p className="text-3xl mb-2">🩺</p>
            <p className="text-sm">No patient records yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="pb-2 px-2">#</th>
                  <th className="pb-2 px-2">Patient Name</th>
                  <th className="pb-2 px-2">Age</th>
                  <th className="pb-2 px-2">Disease</th>
                  <th className="pb-2 px-2">Doctor</th>
                  <th className="pb-2 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((p, i) => (
                  <tr key={p.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                    <td className="py-2 px-2 text-gray-400">{i + 1}</td>
                    <td className="py-2 px-2 text-white font-medium">{p.patientName}</td>
                    <td className="py-2 px-2">
                      <span className="bg-indigo-900 text-indigo-300 text-xs px-2 py-0.5 rounded-full">{p.age} yrs</span>
                    </td>
                    <td className="py-2 px-2">
                      <span className="bg-yellow-900 text-yellow-300 text-xs px-2 py-0.5 rounded-full">{p.disease}</span>
                    </td>
                    <td className="py-2 px-2 text-cyan-400">👨‍⚕️ {p.doctorName}</td>
                    <td className="py-2 px-2">
                      <button
                        onClick={() => handleDelete(p.id)}
                        className="text-red-400 border border-red-800 bg-red-900/30 hover:bg-red-900 text-xs px-3 py-1 rounded-lg transition-colors cursor-pointer"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default PatientRecords
