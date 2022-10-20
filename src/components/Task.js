export default function Task(props) {

    return (
      <div className="task">
        <div className="task-item">
          <input 
            type="checkbox" 
            id="input-checkbox" 
            name="task-checkbox"
            checked={props.task.isChecked} 
            onChange={() => props.handleCheckboxChange(props.task)}
          />
          <div className="task-text">
            <h3>{props.task.taskText}</h3>
          </div>
        </div>
  
        <div className="input-date">
          <input type="date" id="date-task" name="task-date" value={props.task.date} onChange={(event) => props.handleDateChange(event, props.task)}/>
        </div>
      </div>
    );
  }
  