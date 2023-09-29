import { useContext } from "react";
import TaskContext from "../context/TaskContext";
import AuthContext from "../context/AuthContext";

function TaskList() {
  const { tasks, setTasks } = useContext(TaskContext);
  const { loggedIn } = useContext(AuthContext);
  return (
    <div className="flex flex-col items-center">
      {!loggedIn && tasks.length != 0 ? (
        <h1 className="text-2xl text-neutral-900 mt-10">Tasks</h1>
      ) : null}
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex flex-row justify-between w-96 border-b-2 border-b-neutral-100 py-4 px-3"
        >
          <p>{task.task}</p>
          {loggedIn ? (
            <button
              className="text-indigo-800 active:text-red-600"
              onClick={() => {
                setTasks(tasks.filter((item) => item.id != task.id));
              }}
            >
              Remove
            </button>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default TaskList;
