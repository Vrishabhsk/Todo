import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import Zoom from '@material-ui/core/Zoom';
import Fab from '@material-ui/core/Fab';
import Axios from "axios";

function Note(props) {
  
  function deleteTask() {
        Axios.post("http://localhost:3001/deleteTask",{
          id: props.id
        }).then(() => {
            console.log("data deleted");
        });
    }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
     <Zoom in={true}><Fab onClick={deleteTask}><DeleteOutlineIcon /></Fab></Zoom>
    </div>
  );
}

export default Note;
