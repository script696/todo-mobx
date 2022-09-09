import { observer } from "mobx-react-lite";
import Task from "../Task/Task";
import toDo from "../../../../store/toDoStore";
import Filter from "../../../../store/filterStore";
import s from "./ToDoList.module.scss";

export interface IToDoList {}

const ToDoList = observer(({}: IToDoList) => {
  return (
    <div className={s.toDoList}>
      {toDo.todos
        .filter(
          (item: any) =>
            item.completed === Filter.filters.filterCompl ||
            !Filter.filters.isOn
        )
        .map((val: any, index: number) => {
          return (
            <Task
              title={val.title}
              task={val.task}
              key={index}
              completed={val.completed}
              id={val.id}
            />
          );
        })}
    </div>
  );
});

export default ToDoList;

{
  /* <Task
title={item.title}
task={item.task}
key={index}
completed={item.completed}
id={item.id}
/> */
}
