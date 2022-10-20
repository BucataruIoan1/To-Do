import AddButton from "./AddButton";
import Alert from "@mui/material/Alert";

export default function InputTask(props) {
  return (
    <div>
      <div className="form-center">
        <form className="input-task" onSubmit={(event) => event.preventDefault()}>
          <input
            onChange={(event) => props.handleTaskChange(event)}
            type="text"
            placeholder="Add task"
            id="input-text"
            name="taskText"
          />
          <AddButton addTask={(event) => props.addTask(event)} />
        </form>
      </div>

      {props.errorMessageTask && (
        <div className="error-task">
        <Alert sx={{ width: 1/2, mb: 3 }} severity="error">The text is to short. Please introduce a text with more than 3 characters</Alert> 
        </div>)}
      <hr />

      <div className="title-container">
        <div className="todo-title">
          <h2>TO DO</h2>
        </div>
      </div>
    </div>
  );
}