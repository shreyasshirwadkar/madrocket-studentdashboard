import type { Student } from "../types/student"

export const students: Student[] = [
  {
    id: "1",
    name: "John Doe",
    class: "10",
    section: "A",
    rollNumber: "1001",
    dateOfBirth: "2005-05-15",
    gender: "Male",
    address: "123 Main St, City, Country",
    phoneNumber: "1234567890",
    email: "john.doe@example.com",
    parentName: "Jane Doe",
    parentPhone: "9876543210",
    bloodGroup: "A+",
  },
  {
    id: "2",
    name: "Jane Smith",
    class: "9",
    section: "B",
    rollNumber: "902",
    dateOfBirth: "2006-08-22",
    gender: "Female",
    address: "456 Elm St, Town, Country",
    phoneNumber: "2345678901",
    email: "jane.smith@example.com",
    parentName: "John Smith",
    parentPhone: "8765432109",
    bloodGroup: "B-",
  },
  // Add more mock data as needed
]

