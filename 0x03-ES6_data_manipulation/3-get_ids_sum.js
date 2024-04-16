export default function getStudentIdsSum(students) {
  return students.reduce((all, el) => agg + el.id, 0);
}

