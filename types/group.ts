import type { Student } from "./student";

export interface Group {
  id: string;
  name: string;
  members: Student[];
}
