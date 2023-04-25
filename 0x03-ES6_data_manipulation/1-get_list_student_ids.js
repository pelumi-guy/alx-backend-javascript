const getListStudentIds = (arr) => {
  if (!Array.isArray(arr)) return [];

  const newArr = arr.map((obj) => obj.id);

  return newArr;
};

export default getListStudentIds;
