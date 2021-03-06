import React, {useState} from "react";
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Axios from "axios";

function CreateTask(props) {

    const [task,setTask] = useState({
        title: "",
        content: ""
    });
    const [change,setChange] = useState(false);

    function drop() {
        setChange(true);
    }

    function entry(event) {
        const { name,value } = event.target;
        setTask(prevVal => {
            return {
                ...prevVal,
                [name]: value
            }
        }); 
    }

    function submitTask() {
        Axios.post("http://localhost:3001/newTask",{
            taskTitle: task.title,
            taskContent: task.content
        }).then(() => {
            console.log("data stored");
        });

        setTask({
            title: "",
            content: ""
        });
    }

    return (
        <div>
            <form className="create-note">
                <input 
                type="text"
                name="title"
                value={task.title}
                placeholder="Title"
                onChange={entry}
                onClick={drop}
                />
                {change ? <textarea
                type="textarea"
                name="content"
                value={task.content}
                placeholder="Task"
                onChange={entry}
                rows={change?2:1}
                />: null}
                <Zoom in={change}><Fab onClick={() => {
                    submitTask();
                    setTimeout(() => {
                        props.onGet();
                    },200);
                }}><NoteAddIcon /></Fab></Zoom>
            </form>
        </div>
    )
}

export default CreateTask;
