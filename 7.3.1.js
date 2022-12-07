const getStudent = (studentInfo) => {
    for (key in studentInfo) {
        if (studentInfo.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

const student = {
    name: "oleg",
    surname: "latysh",
    age: 25,
}

const studentInfo = Object.create(student);

studentInfo.city = "Moscow";

getStudent(studentInfo);