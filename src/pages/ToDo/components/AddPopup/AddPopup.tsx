import { useState } from "react";
import popupStore from "../../../../store/popupStore";
import toDoStore from "../../../../store/toDoStore";
import s from "./AddPopup.module.scss";


const AddPopup = () => {
  const [inputs, setInputs] = useState({
    title: "",
    task: "",
  });

  return (
    <section className={s.addPopup}>
      <h2 className={s.addPopup__title}>Добавить предмет</h2>
      <p className={s.addPopup__text}>Укажите заголовок и задание</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          toDoStore.addTodo(inputs.title, inputs.task);
          popupStore.closePopup()
        }}
      >
        <input
          value={inputs.title}
          onChange={(e) =>
            setInputs((prev) => ({ ...prev, title: e.target.value }))
          }
          name="title"
          type="text"
          className={s.addPopup__input}
          placeholder="Заголовок"
        />
        <input
          value={inputs.task}
          onChange={(e) =>
            setInputs((prev) => ({ ...prev, task: e.target.value }))
          }
          name="text"
          type="text"
          className={s.addPopup__input}
          placeholder="Задание"
        />

        <div className={s.addPopup__btnWerapper}>
          <button
            onClick={() => popupStore.closePopup()}
            type="button"
            className={s.addPopup__btnEsc}
          >
            Отмена
          </button>
          <button className={s.addPopup__btnSave}>Cохранить</button>
        </div>
      </form>
    </section>
  );
};

export default AddPopup;
