import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "../lib/firebase"
import type { Student } from "../types/student"

const COLLECTION_NAME = "students"

export const studentService = {
  async addStudent(student: Omit<Student, "id">): Promise<string> {
    const docRef = await addDoc(collection(db, COLLECTION_NAME), student)
    return docRef.id
  },

  async getStudents(): Promise<Student[]> {
    const querySnapshot = await getDocs(collection(db, COLLECTION_NAME))
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }) as Student)
  },

  async updateStudent(id: string, student: Partial<Student>): Promise<void> {
    await updateDoc(doc(db, COLLECTION_NAME, id), student)
  },

  async deleteStudent(id: string): Promise<void> {
    await deleteDoc(doc(db, COLLECTION_NAME, id))
  },
}

