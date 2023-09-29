import AuthProvider from "./components/context/AuthProvider";
import AuthStatus from "./components/auth/AuthStatus";
import TaskProvider from "./components/context/TaskProvider";
import AuthBtn from "./components/auth/AuthBtn";
import TaskForm from "./components/tasks/TaskForm";
import TaskList from "./components/tasks/TaskList";

function App() {
  return (
    <div className="px-3 py-3 flex flex-col justify-center items-center gap-5 text-lg">
      <AuthProvider>
        <AuthStatus />
        <AuthBtn />
        <TaskProvider>
          <TaskForm />
          <TaskList />
        </TaskProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
