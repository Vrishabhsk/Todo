import React,{ useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import DisplayTask from "../components/DisplayTask";
import Axios from "axios";
import CreateTask from "../components/CreateTask";

function TodoPage() {

    const [savedTasks,setSavedTasks] = useState([]);

    useEffect(() => {
        getTasks();
    });

    function getTasks() {
        Axios.get("http://localhost:3001/getTask").then((response) => {
            setSavedTasks(response.data);
        });
    }

    return (
        <div>
        <Header />
        <br />
        <CreateTask onGet={getTasks}/>
        {savedTasks.map((savedTask, index) => {
            return (
                <DisplayTask 
                    key={index}
                    id={savedTask._id}
                    title={savedTask.title}
                    content={savedTask.content}
                />
            )
        })}
        <Footer />
        </div>
    )
}


export default TodoPage;