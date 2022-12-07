const getStudent = (name, studentInfo) => {
    console.log(name in studentInfo);
}

const studentInfo = {
    name: 'oleg',
    surname: 'latysh',
    age: 25,
}

getStudent('surname', studentInfo)