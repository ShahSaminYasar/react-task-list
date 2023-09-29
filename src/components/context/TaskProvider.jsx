import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import TaskContext from "./TaskContext";

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(() => {
    const local = localStorage.getItem("tasks");
    if (local !== null) {
      return JSON.parse(local);
    }
    return [];
  });
  const [taskID, setTaskID] = useState(() => {
    const local = JSON.parse(localStorage.getItem("tasks"));
    if (local !== null && local.length !== 0) {
      let lastObjID = local[local.length - 1].id;
      return lastObjID + 1;
    }
    return 1;
  });

  useEffect(() => {
    console.log("In tasks[useEffect]");
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, setTasks, taskID, setTaskID }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;

TaskProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
