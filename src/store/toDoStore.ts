import { makeAutoObservable, toJS } from "mobx";

class ToDo {
  todos: any = [
    {
      id: 1,
      title: "Математика",
      task: "Стрю 4, упр. 36",
      completed: false,
    },
    {
      id: 2,
      title: "русский язык",
      task: "Учебник 4, упр. 36",
      completed: false,
    },
    {
      id: 3,
      title: "ИЗО",
      task: "Стрю 4, упр. 36",
      completed: false,
    },
    {
      id: 4,
      title: "Литература",
      task: "Стрю 4, упр. 36",
      completed: false,
    },
  ];
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  addTodo(title: string, task : string) {
    const id = toJS(this.todos).length
    const todo = {
      id : id + 1,
      title,
      task,
      completed: false,
    }
    this.todos.push(todo);
  }
  removeTodo(id: any) {
    this.todos = this.todos.filter((todo: any) => todo.id !== id);
  }
  completeTodo(id: any) {
    this.todos = this.todos.map((todo: any) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
  }
}

export default new ToDo();
