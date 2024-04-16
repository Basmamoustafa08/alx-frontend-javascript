export default function getListStudentIds(arr) {
  let ids = [];
  if (arr instanceof Array) {
    ids = arr.map((el) => el.id);
  }

  return ids;
}

