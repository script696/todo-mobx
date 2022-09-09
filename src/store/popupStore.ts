import { makeAutoObservable } from "mobx";

class ToDo {
  addPopup: any = {
    isOpen: false,
  }

  constructor() {
    makeAutoObservable(this);
  }

  openPopup() {
    console.log('hi');
    
    this.addPopup.isOpen = true;
  }
  closePopup() {
    this.addPopup.isOpen = false;
  }
 
}

export default new ToDo();
