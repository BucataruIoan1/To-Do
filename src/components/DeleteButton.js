import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

export default function DeleteButton(props) {
  return (
    <div className="delete-button">
      <Button onClick={props.deleteCompletedTask} variant="contained" color="error" size="large" startIcon={<DeleteIcon />}>
        Delete Tasks
      </Button>
    </div>
  );
}