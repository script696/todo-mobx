import {observer} from "mobx-react-lite"
import Task from "../Task/Task";
import toDo from "../../../../store/toDoStore";
import s from "./ToDoList.module.scss";

export interface IToDoList {}

const ToDoList = observer(({}: IToDoList) => {
  
  return (
    <div className={s.toDoList}>
      {toDo.todos.map((item:any, index:any) => {
        return <Task title={item.title} task={item.task} key={index} completed={item.completed} id={item.id}/>;
      })}
    </div>
  );
});

export default ToDoList;
