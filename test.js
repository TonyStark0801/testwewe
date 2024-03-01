// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const app = express();
// const PORT = 3000;


// mongoose.connect("mongodb://localhost:27017/crud_app").then(()=>{console.log("Database connected!")});
 
// const studentSchema = new mongoose.Schema({
//     name: String,
//     age : Number
// });


// const student = mongoose.model('student',studentSchema);

// app.use(bodyParser.json());

// app.get('/',(req, res)=>{
//     res.json({"message":"this is message"});
// })

// app.post('/add' , async (req,res)=>{
//     try {
//         const newStudent = new student(req.body);
//         await newStudent.save();
//         res.send(newStudent)
//         // res.status(201).json({"Created":"Student Added to database"});
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// })

// app.get('/students', async (req,res)=>{
//     try {
//         const st = await student.find({});
//         res.json(st);
//     } catch (error) {
//         console.log(error);
//         // res.status(500).json({error});
//     }
// })
// app.listen(PORT,()=>{
//     console.log(`Server is running on port ${PORT}`);
// })