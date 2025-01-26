// StudentsPage.tsx
import DashboardLayout from "../components/DashboardLayout";
import { Students } from "./Students";

export default function StudentsPage() {
  return (
    <DashboardLayout>
      <Students /> {/* Content for students will be displayed here */}
    </DashboardLayout>
  );
}
