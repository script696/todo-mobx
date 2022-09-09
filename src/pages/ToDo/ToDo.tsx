import Button from "../../shared/ButtonWithText/ButtonWithText";
import ToDoList from "./components/ToDoList/ToDoList";
import popupStore from "../../store/popupStore";
import s from "./ToDo.module.scss";

export interface IToDo {}

const ToDo = ({}: IToDo) => {
  return (
    <div className={s.toDo}>
      <button className={s.toDo__btnTask}>Показывать все задания</button>
      <ToDoList />
      <button onClick={() => popupStore.openPopup()} className={s.toDo__btnAdd}>
        Добавить
      </button>
    </div>
  );
}


export default ToDo;
