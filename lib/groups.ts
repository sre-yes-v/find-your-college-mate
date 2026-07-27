import type { Student } from "@/types/student";
import type { Group } from "@/types/group";

const names = [
  "Aarav Khan","Isha Verma","Rohan Mehta","Priya Sharma","Kabir Singh",
  "Ananya Rao","Vivaan Patel","Sara Iyer","Arjun Nair","Meera Joshi",
  "Aditya Reddy","Diya Kapoor","Ishaan Gupta","Riya Chopra","Yash Malhotra",
  "Neha Bansal","Karan Shah","Pooja Desai","Rahul Menon","Aditi Pillai",
  "Siddharth Bose","Tanya Ghosh","Manav Jain","Kritika Sinha","Nikhil Roy",
  "Simran Kaur","Devansh Agarwal","Aisha Khan","Harsh Vardhan","Nisha Rao",
  "Om Prakash","Zara Ali","Raj Kulkarni","Shreya Naik","Aman Trivedi",
  "Ira Sethi","Vikram Dutta","Kavya Menon","Rehan Sheikh","Anika Bhatt",
  "Parth Modi","Naina Aggarwal","Tanmay Saxena","Ritu Yadav","Mohit Rana",
  "Sneha Pandey","Aryan Thakur","Divya Mishra","Krish Sharma","Pari Goel",
];
const depts = ["Computer Science","Data Science","Commerce","Psychology","Media Studies","Economics"];
const years = ["1st Year","2nd Year","3rd Year"];
const genders: Student["gender"][] = ["Male","Female","Other"];
const groupLetters = ["A","B","C","D","E","F","G","H"];

export const allStudents: Student[] = names.map((name, i) => ({
  id: `s-${i + 1}`,
  name,
  department: depts[i % depts.length],
  year: years[i % years.length],
  gender: genders[i % genders.length],
  groupId: `g-${groupLetters[i % groupLetters.length]}`,
}));

export const groups: Group[] = groupLetters.map((l) => ({
  id: `g-${l}`,
  name: `Group ${l}`,
  members: allStudents.filter((s) => s.groupId === `g-${l}`),
}));

export function getGroup(id: string) {
  return groups.find((g) => g.id === id);
}
