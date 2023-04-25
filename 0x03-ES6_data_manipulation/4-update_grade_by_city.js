/* eslint-disable no-param-reassign */

const updateStudentGradeByCity = (students, city, newGrades) => {
  const cityStudents = students.filter((student) => student.location === city);
  // console.log('cityStudents: ', cityStudents);

  const result = cityStudents.map((student) => {
    const studentGrade = newGrades.filter((grade) => grade.studentId === student.id);
    // console.log('grade length: ', studentGrade.length);

    if (studentGrade.length === 0) {
      student.grade = 'N/A';
    } else {
      student.grade = studentGrade[0].grade;
    }

    return student;
  });

  return result;
};

export default updateStudentGradeByCity;
