export default function getStudentIdsSum(studentsList) {
  return studentsList.reduce((total, student) => total + student.id, 0);
}
