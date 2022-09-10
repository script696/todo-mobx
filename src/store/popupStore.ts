import { makeAutoObservable } from "mobx";
import { IPopupStore } from "../types/types";

class PopupStore {
  addPopup: IPopupStore = {
    isOpen: false,
  }

  constructor() {
    makeAutoObservable(this);
  }

  openPopup() {
    
    this.addPopup.isOpen = true;
  }
  closePopup() {
    this.addPopup.isOpen = false;
  }
 
}

export default new PopupStore();
