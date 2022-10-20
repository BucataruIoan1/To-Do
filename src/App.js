import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import InputTask from "./components/InputTask";
import Task from "./components/Task";
import Complete from "./components/Complete";
import DeleteButton from "./components/DeleteButton";
import { nanoid } from "nanoid";

export default function App() {
  const [weather, setWeather] = useState({});
  const [taskElem, setTaskElem] = useState({
    id: nanoid(),
    taskText: "",
    isChecked: false,
    date: ""
  });
  const [taskArray, setTaskArray] = useState([]);
  const [completedArray, setCompletedArray] = useState([]);
  const [errorTextTask, setErrorTextTask] = useState(false);
  const apiKey = "9c676df4eaf05f5e89ae3b08ee666108";
  const cityName = "Iasi";
  function getWeatherData() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => setWeather(data));
  }

  useEffect(getWeatherData, []);

  function handleTaskChange(event) {
    setTaskElem((prevValue) => {
      return {
        ...prevValue,
        [event.target.name]: event.target.value,
      };
    });
  }

  function addTask(event) {
    event.preventDefault();
    if (taskElem.taskText.length > 3) {
      setTaskArray((prevTaskArray) => {
        return [
          ...prevTaskArray,
          {
            id: nanoid(),
            taskText: taskElem.taskText,
            isChecked: taskElem.isChecked,
            date: taskElem.date
          },
        ];
      });
      setErrorTextTask(false);
      document.getElementById("input-text").value = "";
    } else if (taskElem.taskText.length <= 3) {
      setErrorTextTask(true);
    }
    taskElem.taskText = "";
  }

  function handleCheckboxChange(currentTask) {
    const newTaskArray = taskArray.map((task) => {
      if (currentTask.id === task.id) {
        return { ...task, isChecked: true };
      }
      return task;
    });
    setTaskArray(newTaskArray);

    // Set completedArray to a value
    newTaskArray.map((completedTask) => {
      if (completedTask.isChecked) {
        setCompletedArray((prevValue) => {
          return [...prevValue, completedTask];
        });
      }
      return completedTask;
    });

    // Remove the element from array with isChecked === true
    setTaskArray((prevTaskArray) => {
      return prevTaskArray.filter((taskItem) => {
        return taskItem.id !== currentTask.id;
      });
    });
  }

  function handleDateChange(event, currentTask) {
    const newDateArray = taskArray.map(taskItem => {
      if(currentTask.id === taskItem.id) {
        
        return {...taskItem, date: event.target.value};
      }
      return taskItem;
    });
    setTaskArray(newDateArray);
  }

  function deleteCompletedTask() {
    setCompletedArray([])
  }

  return (
    <div>
      <Navbar weatherData={weather} numberOfTask={taskArray.length} />
      <InputTask
        handleTaskChange={handleTaskChange}
        addTask={addTask}
        errorMessageTask={errorTextTask}
      />

      {taskArray.length >= 1 ? (
        <div className="task-container">
          {taskArray.map((task) => {
            return (
              <Task
                key={nanoid()}
                task={task}
                handleCheckboxChange={handleCheckboxChange}
                handleDateChange={handleDateChange}
              />
            );
          })}
        </div>
      ) : (
        <div className="empty-task">
        <h1>No task available</h1>
        </div>
      )}

      {completedArray.length >= 1 && (
        <div className="title-container">
          <div className="completed-title">
            <h2>COMPLETED</h2>
          </div>
        </div>
      )}
      <div className="complete-container">
        {completedArray.map((completedTask) => {
          return <Complete key={nanoid()} completedTask={completedTask} />;
        })}
      {completedArray.length > 0 && <DeleteButton deleteCompletedTask={deleteCompletedTask}/>}
      </div>
    </div>
  );
}