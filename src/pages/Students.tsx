"use client";

import { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import { Button } from "../components/ui/button";
import { StudentTable } from "../components/student-table";
import { AddStudentModal } from "../components/add-student-modal";
import { EditStudentModal } from "../components/edit-student-modal"; // Add an Edit modal component
import { StudentDetailsModal } from "../components/student-details"; // Add a View details modal
import { studentService } from "../services/student-service";
import type { Student } from "../types/student";
import { toast } from "../components/ui/use-toast";

export const Students = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState<Student | null>(null);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const fetchedStudents = await studentService.getStudents();
      setStudents(fetchedStudents);
    } catch (error) {
      console.error("Error fetching students:", error);
      toast({
        title: "Error",
        description: "Failed to fetch students. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleAddStudent = async (data: Omit<Student, "id">) => {
    try {
      const newStudentId = await studentService.addStudent(data);
      const newStudent = { id: newStudentId, ...data };
      setStudents([...students, newStudent]);
      toast({
        title: "Success",
        description: "Student added successfully.",
      });
    } catch (error) {
      console.error("Error adding student:", error);
      toast({
        title: "Error",
        description: "Failed to add student. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleEditStudent = async (data: Student) => {
    try {
      await studentService.updateStudent(data.id, data); // You can implement this function in the service
      const updatedStudents = students.map((s) =>
        s.id === data.id ? data : s
      );
      setStudents(updatedStudents);
      toast({
        title: "Success",
        description: "Student updated successfully.",
      });
      setIsEditModalOpen(false);
    } catch (error) {
      console.error("Error editing student:", error);
      toast({
        title: "Error",
        description: "Failed to update student. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleViewStudent = (student: Student) => {
    setCurrentStudent(student);
    setIsViewModalOpen(true);
  };

  const handleDeleteStudent = async (student: Student) => {
    try {
      await studentService.deleteStudent(student.id);
      setStudents(students.filter((s) => s.id !== student.id));
      toast({
        title: "Success",
        description: "Student deleted successfully.",
      });
    } catch (error) {
      console.error("Error deleting student:", error);
      toast({
        title: "Error",
        description: "Failed to delete student. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Students</h1>
        <Button onClick={() => setIsAddModalOpen(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Student
        </Button>
      </div>
      <StudentTable
        students={students}
        onView={handleViewStudent}
        onEdit={(student) => {
          setCurrentStudent(student);
          setIsEditModalOpen(true);
        }}
        onDelete={handleDeleteStudent}
      />

      {/* Add Student Modal */}
      <AddStudentModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleAddStudent}
      />

      {/* Edit Student Modal */}
      <EditStudentModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        student={currentStudent}
        onSubmit={handleEditStudent}
      />

      {/* View Student Modal */}
      <StudentDetailsModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        student={currentStudent}
      />
    </div>
  );
};
