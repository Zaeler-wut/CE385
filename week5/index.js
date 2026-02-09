const express = require('express');
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const students = [
    {id:1, name:"node", age:18},
    {id:2, name:"express", age:19},
    {id:3, name:"javascript",age:20}
]

const validateStudent = (req, res, next) => {
    const { name, age } = req.body;

    if (!name || !age) {
        return res.status(400).send("Invalid data");
    }

    next();
};


app.get('/students', (req,res) => {
    res.send(students)
})

app.get('/students/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);
    if (student) {
        res.send(student);
    } else {
        res.status(404).send("Error 404: Student not found");
    }
});

app.post("/students", validateStudent, (req, res) => {

    const newStudent = {
        id: students.length + 1,
        name: req.body.name,
        age: req.body.age
    };

    students.push(newStudent);
    res.send(newStudent);
});

app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).send("Student not found");
    }

    if (!req.body || !req.body.name) {
        return res.status(400).send("Name is required");
    }

    students[index].name = req.body.name;

    res.send(students[index]);
});


app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);

    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).send("Student not found");
    }

    students.splice(index, 1);

    res.send("Student deleted successfully");
});







// app.post('/api/students', (req,res) => {
//     console.log(req.body);
//     res.send('Data received');
// });


// const validateStudent = (req, res, next) => {
//     const {name, age } = req.query;
//     if(!name || !age) {
//         return res.status(400).send("Invalid data");
//     }
//     next();
// }
// app.get('/search', validateStudent, (req, res) => {
//     const name = req.query.name;
//     const age = req.query.age;

//     res.send(`Searching for name: ${name}, age: ${age}`);
// });


// app.get('/', (req,res) => {
//     res.send('Hello Express!');
// });

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});