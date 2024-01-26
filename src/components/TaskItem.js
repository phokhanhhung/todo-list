import React, { useState } from "react";
import "./TaskItem.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CheckIcon from "@mui/icons-material/Check";
import DeleteIcon from "@mui/icons-material/Delete";

function TaskItem({ title, note, num, handleGetDeletedItem }) {
  const [isDone, setIsDone] = useState(false);

  const handleDoneTask = () => {
    setIsDone(true);
  };

  const handleDeleteTask = () => {
    handleGetDeletedItem(num);
  };

  return (
    <div className="task-item">
      <Card sx={{ minWidth: 275 }} style={{ opacity: isDone ? "0.3" : "" }}>
        <CardContent>
          <h2 style={{ textDecoration: isDone ? "line-through" : "" }}>
            {title}
          </h2>
          <p>{note}</p>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            variant="contained"
            color="success"
            endIcon={<CheckIcon />}
            onClick={handleDoneTask}
          >
            Done
          </Button>
          <Button
            size="small"
            variant="contained"
            color="error"
            endIcon={<DeleteIcon />}
            onClick={handleDeleteTask}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default TaskItem;
