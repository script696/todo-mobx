import Button from "../../shared/ButtonWithText/ButtonWithText";
import ToDoList from "./components/ToDoList/ToDoList";
import s from "./ToDo.module.scss";

export interface IToDo {}

const ToDo = ({}: IToDo) => (
  <div className={s.toDo}>
    <button className={s.toDo__btnTask}>Показывать все задания</button>
    <ToDoList/>
    <button className={s.toDo__btnAdd}>Показывать все задания</button>
  </div>
);

export default ToDo;
