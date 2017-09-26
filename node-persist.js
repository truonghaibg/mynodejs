var storage = require('node-persist');
storage.initSync({
	dir: 'students'
});

function getAllStudents()
{
	var students = storage.getItemSync('students');
	if (typeof students == 'undefined') {
		return [];
	}
	return students;
}

function getStudent(studentID) {
	var students = getAllStudents();
	var matchStudent = null;
	for ( var i=0 ; i<students.length ; i++) {
		if (students[i].id == studentID) {
			matchStudent = students[i];
			break;
		}
	}
	return matchStudent;
	
}

function addStudent(id, name)
{
	var students = getAllStudents();
	students.push({
		id: id,
		name: name
	});
	storage.setItemSync('students', students);
}

function removeStudent(studentID)
{
	var students = getAllStudents();
	for (var i=0 ; i<students.length ; i++) {
		if (students[i].id === studentID) {
			students.splice(i, 1);
		}
	}
	storage.setItemSync('students', students);
}

function editStudent(id, name)
{
	var students = getAllStudents();
	for (var i=0 ; i<students.length ; i++) {
		if (students[i].id === id) {
			students[i].name = name;
		}
	}
	storage.setItemSync('students', students);
}

function showStudent()
{
	var students = getAllStudents();
	
	students.forEach(function(student) {
		console.log('student: ' + student.name + '(' + student.id + ')');
	});
}


removeStudent(1);
removeStudent(2);
removeStudent(3);
removeStudent(4);

showStudent();
