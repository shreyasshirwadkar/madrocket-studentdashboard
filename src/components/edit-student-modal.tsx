import { Modal } from "./ui/modal";
import { useState, useEffect } from "react";
import type { Student } from "../types/student";

interface EditStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student | null;
  onSubmit: (data: Student) => void;
}

export const EditStudentModal = ({
  isOpen,
  onClose,
  student,
  onSubmit,
}: EditStudentModalProps) => {
  const [formData, setFormData] = useState<Student | null>(student);

  useEffect(() => {
    // Whenever student changes, update formData
    setFormData(student);
  }, [student]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (formData) {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = () => {
    if (formData) {
      onSubmit(formData);
    }
  };

  if (!student) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-4">
        <h2 className="text-xl font-bold">Edit Student</h2>
        
        <label htmlFor="name" className="block text-sm font-semibold mt-2">
          Name
        </label>
        <input
          id="name"
          name="name"
          value={formData?.name || ""}
          onChange={handleChange}
          placeholder="Name"
           className="input p-2 border border-gray-400"
        />

        <label htmlFor="class" className="block text-sm font-semibold mt-2">
          Class
        </label>
        <input
          id="class"
          name="class"
          value={formData?.class || ""}
          onChange={handleChange}
          placeholder="Class"
           className="input p-2 border border-gray-400"
        />

        <label htmlFor="section" className="block text-sm font-semibold mt-2">
          Section
        </label>
        <input
          id="section"
          name="section"
          value={formData?.section || ""}
          onChange={handleChange}
          placeholder="Section"
           className="input p-2 border border-gray-400"
        />

        <label htmlFor="rollNumber" className="block text-sm font-semibold mt-2">
          Roll Number
        </label>
        <input
          id="rollNumber"
          name="rollNumber"
          value={formData?.rollNumber || ""}
          onChange={handleChange}
          placeholder="Roll Number"
           className="input p-2 border border-gray-400"
        />

        <label htmlFor="dateOfBirth" className="block text-sm font-semibold mt-2">
          Date of Birth
        </label>
        <input
          id="dateOfBirth"
          name="dateOfBirth"
          type="date"
          value={formData?.dateOfBirth || ""}
          onChange={handleChange}
          placeholder="Date of Birth"
           className="input p-2 border border-gray-400"
        />

        <label htmlFor="gender" className="block text-sm font-semibold mt-2">
          Gender
        </label>
        <select
          id="gender"
          name="gender"
          value={formData?.gender || ""}
          onChange={handleChange}
           className="input p-2 border border-gray-400"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <label htmlFor="address" className="block text-sm font-semibold mt-2">
          Address
        </label>
        <textarea
          id="address"
          name="address"
          value={formData?.address || ""}
          onChange={handleChange}
          placeholder="Address"
          className="textarea p-2 border border-gray-400"
        />

        <label htmlFor="phoneNumber" className="block text-sm font-semibold mt-2">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          value={formData?.phoneNumber || ""}
          onChange={handleChange}
          placeholder="Phone Number"
           className="input p-2 border border-gray-400"
        />

        <label htmlFor="email" className="block text-sm font-semibold mt-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          value={formData?.email || ""}
          onChange={handleChange}
          placeholder="Email"
           className="input p-2 border border-gray-400"
        />

        <label htmlFor="parentName" className="block text-sm font-semibold mt-2">
          Parent Name
        </label>
        <input
          id="parentName"
          name="parentName"
          value={formData?.parentName || ""}
          onChange={handleChange}
          placeholder="Parent Name"
           className="input p-2 border border-gray-400"
        />

        <label htmlFor="parentPhone" className="block text-sm font-semibold mt-2">
          Parent Phone
        </label>
        <input
          id="parentPhone"
          name="parentPhone"
          value={formData?.parentPhone || ""}
          onChange={handleChange}
          placeholder="Parent Phone"
           className="input p-2 border border-gray-400"
        />

        <label htmlFor="bloodGroup" className="block text-sm font-semibold mt-2">
          Blood Group
        </label>
        <input
          id="bloodGroup"
          name="bloodGroup"
          value={formData?.bloodGroup || ""}
          onChange={handleChange}
          placeholder="Blood Group"
           className="input p-2 border border-gray-400"
        />

        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Save Changes
        </button>
      </div>
    </Modal>
  );
};
