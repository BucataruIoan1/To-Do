export default function Complete(props) {
    return (
      <div className="task">
        <div className="task-item">
          <input
            type="checkbox"
            id="completed-checkbox"
            name="completed-checkbox"
            checked={props.completedTask.isChecked}
            onChange={() => {}}
          />
          <div className="task-text">
            <h3>{props.completedTask.taskText}</h3>
          </div>
        </div>
  
        <div className="input-date">
          <input
            type="date"
            id="date-completed"
            name="task-date"
            value={props.completedTask.date}
            onChange={() => {}}
          />
        </div>
      </div>
    );
  }