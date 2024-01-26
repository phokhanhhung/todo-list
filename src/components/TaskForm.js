import React, { useState } from "react";
import "./TaskForm.css";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Divider from "@mui/material/Divider";

function TaskForm({ handleClosedFormInfo, handleFormInfo }) {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [titleError, setTitleError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    setTitleError(false);

    if (title == "") {
      setTitleError(true);
    }

    handleFormInfo({
      title: title,
      note: note,
    });

    if (title) {
      console.log(title, note);
    }

    handleCloseForm();
  };

  const handleCloseForm = () => {
    handleClosedFormInfo(false);
  };

  return (
    <div className="task-form-background" onClick={handleCloseForm}>
      <div className="task-form" onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <h2>New Task</h2>
          <Divider />
          <TextField
            label="Title"
            onChange={(e) => setTitle(e.target.value)}
            required
            variant="outlined"
            color="secondary"
            type="text"
            sx={{ mb: 3 }}
            fullWidth
            value={title}
            error={titleError}
          />
          <TextField
            label="Note"
            onChange={(e) => setNote(e.target.value)}
            variant="outlined"
            color="secondary"
            type="text"
            value={note}
            fullWidth
            sx={{ mb: 3 }}
          />

          <Grid container spacing={2}>
            <Grid item>
              <Button variant="outlined" color="success" type="submit">
                Save
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="error"
                onClick={handleCloseForm}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
