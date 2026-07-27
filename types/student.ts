export type Gender = "Male" | "Female" | "Other";

export interface Student {
  id: string;
  name: string;
  department: string;
  year: string;
  gender: Gender;
  groupId: string;
}
