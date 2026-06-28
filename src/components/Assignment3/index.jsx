import { useState } from "react"
import VehicleRegistration from "./VehicleRegistration"
import PatientRecords from "./PatientRecords"

const Assignment3 = () => {
  const [activeTab, setActiveTab] = useState(null)

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Assignment 3</h1>
        <p className="text-gray-400 text-sm">Local Storage — Forms & Records Management</p>
        <hr className="border-gray-700 mt-3" />
      </div>

      {/* Two Buttons */}
      <div className="flex gap-4 flex-wrap">
        <button
          onClick={() => setActiveTab("vehicle")}
          className={`flex items-center gap-3 px-6 py-4 rounded-xl border text-left transition-all duration-200 cursor-pointer
            ${activeTab === "vehicle"
              ? "bg-indigo-600 border-indigo-500 text-white"
              : "bg-gray-800 border-gray-700 text-gray-300 hover:border-indigo-500 hover:text-white"
            }`}
        >
          <span className="text-2xl">🚗</span>
          <div>
            <div className="font-semibold text-base">Vehicle Registration</div>
            <div className="text-xs text-gray-400 mt-0.5">Register & manage vehicles</div>
          </div>
        </button>

        <button
          onClick={() => setActiveTab("patient")}
          className={`flex items-center gap-3 px-6 py-4 rounded-xl border text-left transition-all duration-200 cursor-pointer
            ${activeTab === "patient"
              ? "bg-emerald-600 border-emerald-500 text-white"
              : "bg-gray-800 border-gray-700 text-gray-300 hover:border-emerald-500 hover:text-white"
            }`}
        >
          <span className="text-2xl">🏥</span>
          <div>
            <div className="font-semibold text-base">Patient Records</div>
            <div className="text-xs text-gray-400 mt-0.5">Manage patient data</div>
          </div>
        </button>
      </div>

      {/* Content */}
      <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 min-h-40">
        {activeTab === null && (
          <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
            <span className="text-5xl mb-3">📋</span>
            <p className="text-base font-medium">Select a module above to get started</p>
          </div>
        )}
        {activeTab === "vehicle" && <VehicleRegistration />}
        {activeTab === "patient" && <PatientRecords />}
      </div>
    </div>
  )
}

export default Assignment3
