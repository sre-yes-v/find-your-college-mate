import { allStudents } from "./groups";
import type { Student } from "@/types/student";

export function searchStudents(query: string, limit = 8): Student[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return allStudents
    .filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.department.toLowerCase().includes(q) ||
        s.groupId.toLowerCase().includes(q),
    )
    .slice(0, limit);
}
