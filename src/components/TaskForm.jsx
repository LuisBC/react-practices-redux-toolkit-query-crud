import { useCreateTasksMutation } from "../api/apiSlice";

const TaskForm = () => {
  const [createTask] = useCreateTasksMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const {
      title: { value: title },
      description: { value: description },
      done: { checked: done },
    } = e.target;
    createTask({
      title,
      description,
      done,
    });
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Write a Task" name="title" />
      <input type="text" placeholder="Write a Description" name="description" />
      <input type="checkbox" name="done" />
      <label htmlFor="done">Done</label>
      <button>Add Task</button>
    </form>
  );
};

export default TaskForm;
