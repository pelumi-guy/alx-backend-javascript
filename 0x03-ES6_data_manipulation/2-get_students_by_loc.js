const getStudentsByLocation = (students, city) => {
  const result = students.filter((student) => student.location === city);

  return result;
};

export default getStudentsByLocation;
