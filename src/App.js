import "semantic-ui-css/semantic.min.css";
import Container from "./components/Container.jsx";
import Header from "./components/Header.jsx";
import InputTask from "./components/InputTask.jsx";
import { useEffect, useState } from "react";
import TaskContent from "./components/TaskContent.jsx";

function App() {
  let initialTask = JSON.parse(localStorage.getItem("tasks"));

  if (!initialTask) {
    initialTask = [];
  }

  const [tasks, setTasks] = useState(initialTask);

  useEffect(() => {
    if(initialTask){
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }else{
      localStorage.setItem("tasks", JSON.stringify([]));
    }
  }, [initialTask, tasks]);

  const createTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const currentTask = tasks.filter((task)=> task.idTask !== id);
    setTasks(currentTask);
  }

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) =>
      task.idTask === updatedTask.idTask ? updatedTask : task
    );
    setTasks(updatedTasks);
  };

  return (
    <Container>
      <Header />
      <InputTask createTask={createTask} />
      <TaskContent tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
    </Container>
  );
}

export default App;
