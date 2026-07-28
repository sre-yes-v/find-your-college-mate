import type { Student } from "@/types/student";
import type { Group } from "@/types/group";

const groupData = [
    {
      "group": 0,
      "students": [
        { "name": "Piyush", "programme": "BA English" },
        { "name": "Arya M", "programme": "BCom Finance and Taxation" },
        { "name": "Aznee Zayan", "programme": "BCA" },
        { "name": "Elizabeth Mathew", "programme": "BA English" },
        { "name": "Adithya S", "programme": "BBA Analytics" }
      ]
    },
    {
      "group": 1,
      "students": [
        { "name": "Thanmaya", "programme": "Sociology" },
        { "name": "Joseph Benoy", "programme": "BSc Chemistry" },
        { "name": "Ewin Simon Paul", "programme": "Mathematics" },
        { "name": "Rithin", "programme": "BCJ" },
        { "name": "Jonah Rajesh", "programme": "Logistics and Supply Chain Management" },
        { "name": "Harshit Biju", "programme": "Physics" },
        { "name": "Anusree A S", "programme": "BSc Psychology" },
        { "name": "Chris Mathew Sumesh", "programme": "BCom Tax A" },
        { "name": "Aron Joe Binoj", "programme": "BCom Finance and Taxation (B)" },
        { "name": "Reeyan Lawrence", "programme": "Management Studies" }
      ]
    },
    {
      "group": 2,
      "students": [
        { "name": "Naima Mehaboob", "programme": "English" },
        { "name": "Lena Selin", "programme": "BSc Psychology" },
        { "name": "Jisna Biju", "programme": "BBA Logistics" },
        { "name": "Anamika M S", "programme": "BBA Business Analytics" },
        { "name": "Irene Jibu", "programme": "BCom Finance and Taxation" },
        { "name": "Anjali Rajeeah", "programme": "BCom GTTM" },
        { "name": "Hamna Pradeep", "programme": "BA (Hons) Animation and Graphic Design" },
        { "name": "Fathima Razbina", "programme": "BA English" },
        { "name": "Anusha Johnson", "programme": "BBA" },
        { "name": "Muhammed Mifraah UP", "programme": "BCA" }
      ]
    },
    {
      "group": 3,
      "students": [
        { "name": "Athul Krishna S", "programme": "BCA" },
        { "name": "Vishnu R Raj", "programme": "BCom CA" },
        { "name": "Aditya S Kumar", "programme": "BSc Psychology" },
        { "name": "Abiel Reju Chandy", "programme": "BCA" },
        { "name": "Aadiv", "programme": "BCom FinTech" },
        { "name": "Adwaith", "programme": "BBA" },
        { "name": "Ajin Saiju", "programme": "BCA" },
        { "name": "Suryadev", "programme": "BCA" },
        { "name": "L J Karol Devassy Xavier", "programme": "Commerce FinTech and Digital Finance" },
        { "name": "Alan Santhosh", "programme": "BCom Finance and Tax" }
      ]
    },
    {
      "group": 4,
      "students": [
        { "name": "Savine Eugine", "programme": "BCA" },
        { "name": "Souparnika Santhosh", "programme": "BA English" },
        { "name": "Aswathi Murali", "programme": "Computer Science" },
        { "name": "Alphonsa Menora O A", "programme": "BA English – New Media" },
        { "name": "Aeibel Mathew", "programme": "BA Sociology" },
        { "name": "Gopika Sajeev", "programme": "BCom Finance and Business Analytics" },
        { "name": "Rithika R", "programme": "BCom Tax A" },
        { "name": "Liba Shanavas", "programme": "BBA IM" },
        { "name": "Sreya D", "programme": "BA English" },
        { "name": "Adarsh S", "programme": "BCA" }
      ]
    },
    {
      "group": 5,
      "students": [
        { "name": "Bhagat Krishna M", "programme": "Mass Communication and Journalism" },
        { "name": "Vijay Krishna", "programme": "Management" },
        { "name": "P K Devadathan", "programme": "BCom Finance and Accounting" },
        { "name": "Sayanth Retheesh", "programme": "BCA" },
        { "name": "Jaishnav", "programme": "BCom Finance and Tax (B)" },
        { "name": "Anupam Krishna J", "programme": "Commerce (BCom FT)" },
        { "name": "Mahadevan Bijukumar", "programme": "Finance and Tax B" },
        { "name": "Shaurya Agarwal", "programme": "BCom Finance Tax B" },
        { "name": "Sheen Job", "programme": "BCA" },
        { "name": "Alphonsa", "programme": "English" }
      ]
    },
    {
      "group": 6,
      "students": [
        { "name": "Aadidev SK", "programme": "BCom Finance and Tax" },
        { "name": "Nayan G Kurian", "programme": "BCA" },
        { "name": "Kevin Paul", "programme": "BCom with FinTech and Digital Finance" },
        { "name": "Akshay N Krishna", "programme": "BCom Taxation" },
        { "name": "Rihan Abdul Rahman", "programme": "BCom Finance and Taxation" },
        { "name": "Ameera Sidheek", "programme": "BBA (BA)" },
        { "name": "Vani Menon", "programme": "BCom Finance and Taxation B" },
        { "name": "Nicholus Paul Satheesh", "programme": "BCom Finance and Tax" },
        { "name": "Adithya S Biju", "programme": "BCom" },
        { "name": "Fathima Shameer", "programme": "BBA" }
      ]
    },
    {
      "group": 7,
      "students": [
        { "name": "Jessica Jacob", "programme": "BCom Honours Global Trade and Tourism Management" },
        { "name": "Parvathy SN", "programme": "BCom Finance and Tax A" },
        { "name": "Anna Mariyam Linson", "programme": "Commerce" },
        { "name": "Avantika A Prabhu", "programme": "Management Studies" },
        { "name": "Lena Mariya", "programme": "BCA" },
        { "name": "Shivani Raj", "programme": "Visual Communication" },
        { "name": "Pranav S", "programme": "BSW" },
        { "name": "Agnes Dixen", "programme": "BA Animation and Graphic Design" },
        { "name": "Sarah Maria", "programme": "BBA Business Analytics" },
        { "name": "Punya Jeevan", "programme": "BBA IM" }
      ]
    },
    {
      "group": 8,
      "students": [
        { "name": "Muhammed Bilal Haris", "programme": "BCom Finance and Tax" },
        { "name": "Figo Roni", "programme": "BCA" },
        { "name": "Muhammed Sinan Sabu", "programme": "BCom Finance and Accounting" },
        { "name": "Sam K Sunil", "programme": "BBA LSM" },
        { "name": "Dhananjay S", "programme": "BCom Finance and Taxation (B)" },
        { "name": "Durga Pradeep", "programme": "BCom Finance and Taxation" },
        { "name": "Amritha Suresh", "programme": "BCom" },
        { "name": "Uddhav Ajay Shenoy", "programme": "BCom Finance and Taxation" },
        { "name": "Hanna Maria Michael", "programme": "BA English Honours (New Media)" },
        { "name": "Sriraam Viswanath", "programme": "BCom (Hons) Finance and Accounting" }
      ]
    },
    {
      "group": 9,
      "students": [
        { "name": "Vinay Pradeep", "programme": "BCom Taxation Batch B" },
        { "name": "Navaneeth V A", "programme": "BCom Finance and Taxation" },
        { "name": "Hari Narayan", "programme": "BCA" },
        { "name": "Abhiram KA", "programme": "BCom FinTech" },
        { "name": "Muhammed Nifil Shaji", "programme": "BCom Tax and Finance" },
        { "name": "Sreehari Biju", "programme": "BCA" },
        { "name": "Arjit Sudheer", "programme": "BCA" },
        { "name": "Sidhivinayak", "programme": "BCom Finance and Taxation" },
        { "name": "Milan K Saji", "programme": "BCom Tax B" },
        { "name": "Ashin Aji", "programme": "BCom Business Analytics" }
      ]
    },
    {
      "group": 10,
      "students": [
        { "name": "Gouri Krishna K", "programme": "BCom Finance and Taxation" },
        { "name": "Anaswara Binu", "programme": "BCom" },
        { "name": "Sourabha V", "programme": "BCom Tax B" },
        { "name": "Gowri Syam", "programme": "BCA" },
        { "name": "Neera Kumari", "programme": "BCom Finance and Taxation" },
        { "name": "Aneena Samuel", "programme": "Commerce (BCom)" },
        { "name": "Nurul Hasna", "programme": "BCom Finance and Taxation" },
        { "name": "Lea Anna Sebastian", "programme": "Psychology" },
        { "name": "Midhun Sreekrishnan", "programme": "BCA" },
        { "name": "Sidhita T Anilbabu", "programme": "BBA Logistics and Supply Chain Management" },
        { "name": "Arya Unni", "programme": "BCA" }
      ]
    },
    {
      "group": 11,
      "students": [
        { "name": "Amolika", "programme": "BA English" },
        { "name": "Shriya Rajkumar", "programme": "BA English" },
        { "name": "Dua Ajish", "programme": "BBA" },
        { "name": "Diya Dinesh", "programme": "BBA IM" },
        { "name": "Swetha Menon", "programme": "BCom Tax B" },
        { "name": "Zamrah Fathima", "programme": "BCom" },
        { "name": "Lakshmipriya P S", "programme": "BCom" },
        { "name": "Abel Tom", "programme": "Economics" },
        { "name": "Kavi Priya", "programme": "BBA Business Analytics" },
        { "name": "Nivedya P", "programme": "BCom (H) Finance and Taxation (A)" }
      ]
    }


];

export const allStudents: Student[] = groupData.flatMap((group) =>
  group.students.map((student, index) => ({
    id: `s-${group.group}-${index + 1}`,
    name: student.name,
    department: student.programme, // maps programme -> department
    groupId: `g-${group.group}`,
  }))
);

export const groups: Group[] = groupData.map((group) => ({
  id: `g-${group.group}`,
  name: `Group ${group.group}`,
  members: allStudents.filter(
    (student) => student.groupId === `g-${group.group}`
  ),
}));

export function getGroup(id: string) {
  return groups.find((group) => group.id === id);
}