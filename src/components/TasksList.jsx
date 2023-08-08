import {
  useGetTasksQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} from "../api/apiSlice";

const TasksList = () => {
  const { data: tasks, isLoading, isError, error } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;

  return (
    <ul>
      {tasks.map(({ id, title, description, done }) => (
        <li key={id}>
          <h3>{title}</h3>
          <p>{description}</p>
          <input
            type="checkbox"
            id={id}
            checked={done}
            onChange={(e) =>
              updateTask({ id, title, description, done: e.target.checked })
            }
          />
          <label htmlFor={id}>Done</label>
          <br />
          <br />
          <button onClick={() => deleteTask(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TasksList;
