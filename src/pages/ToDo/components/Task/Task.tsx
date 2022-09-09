import s from "./Task.module.scss";
import toDo from "../../../../store/toDoStore";

export interface ITask {
  id: number;
  title: string;
  task: string;
  completed: boolean;
}

const Task = ({ title, task, completed, id }: ITask) => {
  const completeBtnStyle = [
    s.task__completeBtn,
    completed ? s.task__completeBtn_completed : null,
  ];
  const task__taskStyle = [
    s.task__task,
    completed ? s.task__task_completed : null,
  ];

  return (
    <div className={s.task}>
      <button
        onClick={() => toDo.completeTodo(id)}
        className={completeBtnStyle.join(" ")}
      ></button>
      <div className={s.task__content}>
        <h2 className={s.task__title}>{title}</h2>
        <p className={task__taskStyle.join(' ')}>{task}</p>
      </div>
      <button
        onClick={() => toDo.removeTodo(id)}
        className={s.task__deleteBtn}
      ></button>
    </div>
  );
};

export default Task;
