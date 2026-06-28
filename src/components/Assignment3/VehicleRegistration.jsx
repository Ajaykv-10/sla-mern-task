import { useState, useEffect } from "react"

const STORAGE_KEY = "vehicles"
const emptyForm = { vehicleNumber: "", ownerName: "", vehicleType: "Car" }
const vehicleTypes = ["Car", "Bike", "Truck", "Bus", "Auto"]

const VehicleRegistration = () => {
  const [form, setForm] = useState(emptyForm)
  const [vehicles, setVehicles] = useState([])
  const [errors, setErrors] = useState({})
  const [successMsg, setSuccessMsg] = useState("")

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) setVehicles(JSON.parse(stored))
  }, [])

  const validate = () => {
    const newErrors = {}
    if (!form.vehicleNumber.trim()) newErrors.vehicleNumber = "Vehicle Number is required"
    if (!form.ownerName.trim()) newErrors.ownerName = "Owner Name is required"
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
    const updated = [...vehicles, { ...form, id: Date.now() }]
    setVehicles(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setForm(emptyForm)
    setSuccessMsg("Vehicle registered successfully!")
    setTimeout(() => setSuccessMsg(""), 3000)
  }

  const handleDelete = (id) => {
    const updated = vehicles.filter((v) => v.id !== id)
    setVehicles(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-xl font-bold text-white">🚗 Vehicle Registration</h2>

      {/* Form */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">New Registration</h3>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Vehicle Number */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Vehicle Number <span className="text-red-400">*</span></label>
              <input
                type="text"
                name="vehicleNumber"
                value={form.vehicleNumber}
                onChange={handleChange}
                placeholder="e.g. MH 12 AB 1234"
                className={`bg-gray-900 border rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-indigo-500
                  ${errors.vehicleNumber ? "border-red-500" : "border-gray-600"}`}
              />
              {errors.vehicleNumber && <span className="text-red-400 text-xs">{errors.vehicleNumber}</span>}
            </div>

            {/* Owner Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Owner Name <span className="text-red-400">*</span></label>
              <input
                type="text"
                name="ownerName"
                value={form.ownerName}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className={`bg-gray-900 border rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-indigo-500
                  ${errors.ownerName ? "border-red-500" : "border-gray-600"}`}
              />
              {errors.ownerName && <span className="text-red-400 text-xs">{errors.ownerName}</span>}
            </div>

            {/* Vehicle Type */}
            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-400">Vehicle Type</label>
              <select
                name="vehicleType"
                value={form.vehicleType}
                onChange={handleChange}
                className="bg-gray-900 border border-gray-600 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-indigo-500 cursor-pointer"
              >
                {vehicleTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="self-start bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors cursor-pointer"
          >
            + Register Vehicle
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
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Registered Vehicles</h3>
          <span className="bg-indigo-900 text-indigo-300 text-xs font-semibold px-3 py-1 rounded-full">{vehicles.length} records</span>
        </div>

        {vehicles.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <p className="text-3xl mb-2">🚘</p>
            <p className="text-sm">No vehicles registered yet.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="pb-2 px-2">#</th>
                  <th className="pb-2 px-2">Vehicle Number</th>
                  <th className="pb-2 px-2">Owner Name</th>
                  <th className="pb-2 px-2">Type</th>
                  <th className="pb-2 px-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((v, i) => (
                  <tr key={v.id} className="border-b border-gray-700 hover:bg-gray-700 transition-colors">
                    <td className="py-2 px-2 text-gray-400">{i + 1}</td>
                    <td className="py-2 px-2 text-white font-mono">{v.vehicleNumber}</td>
                    <td className="py-2 px-2 text-gray-200">{v.ownerName}</td>
                    <td className="py-2 px-2">
                      <span className="bg-indigo-900 text-indigo-300 text-xs px-2 py-0.5 rounded-full">{v.vehicleType}</span>
                    </td>
                    <td className="py-2 px-2">
                      <button
                        onClick={() => handleDelete(v.id)}
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

export default VehicleRegistration
