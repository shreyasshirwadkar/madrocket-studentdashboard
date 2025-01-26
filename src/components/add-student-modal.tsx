import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const studentSchema = z.object({
  name: z.string().min(1, "Name is required"),
  class: z.string().min(1, "Class is required"),
  section: z.string().min(1, "Section is required"),
  rollNumber: z.string().min(1, "Roll Number is required"),
  dateOfBirth: z.string().min(1, "Date of Birth is required"),
  gender: z.enum(["Male", "Female", "Other"]),
  address: z.string().min(1, "Address is required"),
  phoneNumber: z.string().min(10, "Phone Number must be at least 10 digits"),
  email: z.string().email("Invalid email address"),
  parentName: z.string().min(1, "Parent Name is required"),
  parentPhone: z.string().min(10, "Parent Phone must be at least 10 digits"),
  bloodGroup: z.string().min(1, "Blood Group is required"),
});

type StudentFormData = z.infer<typeof studentSchema>;

interface AddStudentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: StudentFormData) => void;
}

export function AddStudentModal({
  isOpen,
  onClose,
  onSubmit,
}: AddStudentModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue, // add setValue here
  } = useForm<StudentFormData>({
    resolver: zodResolver(studentSchema),
  });

  const onSubmitForm = (data: StudentFormData) => {
    onSubmit(data);
    reset();
    onClose();
  };

  const handleGenderChange = (value: string) => {
    // Explicitly cast value to the gender type using 'as'
    setValue("gender", value as "Male" | "Female" | "Other"); // type assertion
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New Student</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-4">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" {...register("name")} />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="class">Class</Label>
            <Input id="class" {...register("class")} />
            {errors.class && (
              <p className="text-red-500 text-sm">{errors.class.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="section">Section</Label>
            <Input id="section" {...register("section")} />
            {errors.section && (
              <p className="text-red-500 text-sm">{errors.section.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="rollNumber">Roll Number</Label>
            <Input id="rollNumber" {...register("rollNumber")} />
            {errors.rollNumber && (
              <p className="text-red-500 text-sm">
                {errors.rollNumber.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="dateOfBirth">Date of Birth</Label>
            <Input id="dateOfBirth" type="date" {...register("dateOfBirth")} />
            {errors.dateOfBirth && (
              <p className="text-red-500 text-sm">
                {errors.dateOfBirth.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="gender">Gender</Label>
            <Select
              onValueChange={handleGenderChange} // use handleGenderChange here
            >
              <SelectTrigger>
                <SelectValue placeholder="Select gender" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="Male">Male</SelectItem>
                <SelectItem value="Female">Female</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="address">Address</Label>
            <Input id="address" {...register("address")} />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input id="phoneNumber" {...register("phoneNumber")} />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="parentName">Parent Name</Label>
            <Input id="parentName" {...register("parentName")} />
            {errors.parentName && (
              <p className="text-red-500 text-sm">
                {errors.parentName.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="parentPhone">Parent Phone</Label>
            <Input id="parentPhone" {...register("parentPhone")} />
            {errors.parentPhone && (
              <p className="text-red-500 text-sm">
                {errors.parentPhone.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="bloodGroup">Blood Group</Label>
            <Input id="bloodGroup" {...register("bloodGroup")} />
            {errors.bloodGroup && (
              <p className="text-red-500 text-sm">
                {errors.bloodGroup.message}
              </p>
            )}
          </div>
          <DialogFooter>
            <Button type="submit">Add Student</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
