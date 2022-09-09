import { toDoItems } from "../../../../utils/constants/constants";
import Task from "../Task/Task";
import s from "./ToDoList.module.scss";

export interface IToDoList {}

const ToDoList = ({}: IToDoList) => (
  <div className={s.toDoList}>
    {toDoItems.map((item, index) => {
      return (
        <Task title={item.title} task={item.task} key={index}/>
      )
    })}
  </div>
);

export default ToDoList;
