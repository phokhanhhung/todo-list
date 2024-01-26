import React, { useState } from "react";
import "./TodoList.css";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Divider } from "@mui/material";

function TodoList() {
  const [formOpened, setFormOpened] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const handleOpenTaskForm = () => {
    setFormOpened(true);
  };

  const getClosedFormInfo = (value) => {
    setFormOpened(value);
  };

  const getFormInfo = (value) => {
    setTodoList([...todoList, value]);
  };

  const getDeletedItem = (value) => {
    setTodoList([...todoList.filter((_, index) => index !== value)]);
  };

  return (
    <div className="todo-list-bg">
      <div className="todo-list">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <h1>Todo List</h1>
            <Divider />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <p>Let's create your today's tasks!</p>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Button
              variant="outlined"
              endIcon={<AddIcon />}
              onClick={handleOpenTaskForm}
            >
              Add new task
            </Button>
          </Grid>
        </Grid>

        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, sm: 2, md: 2 }}
            columns={{ xs: 4, sm: 12, md: 12 }}
          >
            {todoList.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <TaskItem
                  title={item.title}
                  note={item.note}
                  num={index}
                  handleGetDeletedItem={getDeletedItem}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
      {formOpened && (
        <TaskForm
          handleClosedFormInfo={getClosedFormInfo}
          handleFormInfo={getFormInfo}
        />
      )}
    </div>
  );
}

export default TodoList;
