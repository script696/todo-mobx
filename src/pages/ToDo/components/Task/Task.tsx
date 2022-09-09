import s from "./Task.module.scss";

export interface ITask {
  title : string
  task : string
}

const Task = ({title, task}: ITask) => (
  <div className={s.task}>
    <button className={s.task__completeBtn}></button>
    <div className={s.task__content}>
      <h2 className={s.task__title}>{title}</h2>
      <p className={s.task__task}>{task}</p>
    </div>
    <button className={s.task__deleteBtn}></button>
  </div>
);

export default Task;
