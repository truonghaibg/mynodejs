var storage = require('node-persist');
storage.initSync({
    dir: 'students'
});

function getAllStudents() {
    var students = storage.getItemSync('students');
    if (typeof students == 'undefined') {
        return [];
    }
    return students;
}

function getStudent(studentID) {
    var students = getAllStudents();
    var matchStudent = null;
    for (var i = 0; i < students.length; i++) {
        if (students[i].id == studentID) {
            matchStudent = students[i];
            break;
        }
    }
    return matchStudent;

}

function addStudent(id, name) {
    var students = getAllStudents();
    students.push({
        id: id,
        name: name
    });
    storage.setItemSync('students', students);
}

function removeStudent(studentID) {
    var students = getAllStudents();
    for (var i = 0; i < students.length; i++) {
        if (students[i].id === studentID) {
            students.splice(i, 1);
        }
    }
    storage.setItemSync('students', students);
}

function editStudent(id, name) {
    var students = getAllStudents();
    for (var i = 0; i < students.length; i++) {
        if (students[i].id === id) {
            students[i].name = name;
        }
    }
    storage.setItemSync('students', students);
}

function showStudent() {
    var students = getAllStudents();

    students.forEach(function (student) {
        console.log(student.id + ' - ' + student.name);
    });
}

var yargs = require('yargs');
var argv = yargs
    .command("list", "Get List student", function (yargs) {
        //nothing
    })
    .command("create", "Create a student", function (yargs) {
        return yargs.option({
            id: {
                demand: true,
                type: "number"
            },
            name: {
                demand: true,
                type: "string"
            }
        });
    })
    .command("delete", "Delete a student", function () {
        return yargs.option({
            id: {
                demand: true,
                type: "number"
            }
        });
    })
    .command("edit", "Edit a student", function (argv) {
        return yargs.option({
            id: {
                demand: true,
                type: "number"
            },
            name: {
                demand: true,
                type: "string"
            }
        });
    })
    .argv;

var action = argv._[0];
if (action === 'list') {
    showStudent();
} else if (action === 'create') {
    addStudent(argv.id, argv.name);
    console.log("add successfully");
    showStudent();
} else if (action === 'delete') {
    removeStudent(argv.id);
    console.log("delete successfully");
    showStudent();
} else if (action === 'edit') {
    editStudent(argv.id, argv.name);
    console.log("edit successfully");
    showStudent();
} else {
    console.log("command not found!");
    showStudent();
}