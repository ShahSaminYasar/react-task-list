import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import AuthContext from "../context/AuthContext";

function TaskForm() {
  const [task, setTask] = useState("");
  const { tasks, setTasks, taskID, setTaskID } = useContext(TaskContext);
  const { loggedIn } = useContext(AuthContext);
  return loggedIn ? (
    <form
      className="flex flex-row w-full max-w-md border-4 border-neutral-100 rounded-xl overflow-hidden"
      onSubmit={(e) => {
        e.preventDefault();
        if (task != "") {
          setTasks([...tasks, { id: taskID, task: task }]);
          setTaskID((prev) => prev + 1);
          setTask("");
        }
      }}
    >
      <input
        type="text"
        placeholder="Write task here"
        className="w-full py-2 px-4 outline-none"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        className="py-2 px-5 bg-indigo-800 text-white active:bg-indigo-950"
        type="submit"
      >
        Add
      </button>
    </form>
  ) : null;
}

export default TaskForm;
