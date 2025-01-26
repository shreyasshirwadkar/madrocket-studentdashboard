import { Modal } from "./ui/modal";
import type { Student } from "../types/student";

interface StudentDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student | null;
}

const calculateAge = (dateOfBirth: string): number => {
  const birthDate = new Date(dateOfBirth);
  const currentDate = new Date();
  const age = currentDate.getFullYear() - birthDate.getFullYear();
  const monthDifference = currentDate.getMonth() - birthDate.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < birthDate.getDate())) {
    return age - 1;
  }
  return age;
};

export const StudentDetailsModal = ({
  isOpen,
  onClose,
  student,
}: StudentDetailsModalProps) => {
  if (!student) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-4">
        <h2 className="text-xl font-bold">Student Details</h2>
        <p>
          <strong>Name:</strong> {student.name}
        </p>
        <p>
          <strong>Age:</strong> {calculateAge(student.dateOfBirth)} {/* Calculating age based on DOB */}
        </p>
        <p>
          <strong>Class:</strong> {student.class}
        </p>
        <p>
          <strong>Section:</strong> {student.section}
        </p>
        <p>
          <strong>Roll Number:</strong> {student.rollNumber}
        </p>
        <p>
          <strong>Date of Birth:</strong> {student.dateOfBirth}
        </p>
        <p>
          <strong>Gender:</strong> {student.gender}
        </p>
        <p>
          <strong>Address:</strong> {student.address}
        </p>
        <p>
          <strong>Phone Number:</strong> {student.phoneNumber}
        </p>
        <p>
          <strong>Email:</strong> {student.email}
        </p>
        <p>
          <strong>Parent Name:</strong> {student.parentName}
        </p>
        <p>
          <strong>Parent Phone:</strong> {student.parentPhone}
        </p>
        <p>
          <strong>Blood Group:</strong> {student.bloodGroup}
        </p>
      </div>
    </Modal>
  );
};
