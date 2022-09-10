export type IToDo = {
  id: number;
  title: string;
  task: string;
  completed: boolean;
};

export type IPopupStore = {
  isOpen: boolean;
};

export type IFilterStore = {
  isOpen: boolean;
  isOn: boolean;
  filterCompl: boolean;
};
