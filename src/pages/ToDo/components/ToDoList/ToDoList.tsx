import { observer } from "mobx-react-lite";
import Task from "../Task/Task";
import toDo from "../../../../store/toDoStore";
import Filter from "../../../../store/filterStore";
import s from "./ToDoList.module.scss";
import { IToDo } from "../../../../types/types";


const ToDoList = observer(() => {
  return (
    <div className={s.toDoList}>
      {toDo.todos
        .filter(
          (item: IToDo) =>
            item.completed === Filter.filters.filterCompl ||
            !Filter.filters.isOn
        )
        .map((val: IToDo, index: number) => {
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

