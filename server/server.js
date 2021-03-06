const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/TodoDB",{useNewUrlParser: true, useUnifiedTopology: true});

const TaskSchema = new mongoose.Schema({
    title: {type: String, requrired: true },
    content: {type: String, required: true}
});

const Task = mongoose.model("Task",TaskSchema);

app.post("/newTask",(req,res) => {
    const taskTitle = req.body.taskTitle;
    const taskContent = req.body.taskContent;
    const task = new Task({
        title: taskTitle,
        content: taskContent
    });
    task.save((err) => {
        if(err) throw err;
    });
});

app.get("/getTask",(req,res) => {
    Task.find({},(err,tasks) => {
        if(err) throw err;
        res.send(tasks);
    });
});

app.post("/deleteTask",(req,res) => {
    Task.findByIdAndDelete(req.body.id,(err,result) => {
        if(err) throw err;
    });
});

app.listen(3001,() => {
    console.log("server started on http://localhost:3001");
});