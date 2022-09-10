import { observer } from "mobx-react-lite";
import Filter from "../../store/filterStore";
import ToDoList from "./components/ToDoList/ToDoList";
import popupStore from "../../store/popupStore";
import s from "./ToDo.module.scss";

export interface IToDo {}

const ToDo = observer(({}: IToDo) => {
  return (
    <div className={s.toDo}>
      <div className={s.toDo__filters}>
        <button
          onClick={() => {
            Filter.toggleFilters();
            Filter.setDefaultFilter();
          }}
          className={s.toDo__btnTask}
        >
          Показывать все задания
        </button>
        {Filter.filters.isOpen && (
          <button
            onClick={() => {
              Filter.toggleFilters();
              Filter.setUnComplFilter()
            }}
            className={s.toDo__btnTask}
          >
            Не выполненные
          </button>
        )}
        {Filter.filters.isOpen && (
          <button
            onClick={() => {
              Filter.toggleFilters()
              Filter.setComplFilter()
            }}
            className={s.toDo__btnTask}
          >
            Выполненные
          </button>
        )}
      </div>
      <ToDoList />
      <button onClick={() => popupStore.openPopup()} className={s.toDo__btnAdd}>
        Добавить
      </button>
    </div>
  );
});

export default ToDo;
