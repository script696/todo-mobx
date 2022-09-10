import { makeAutoObservable } from "mobx";
import { IFilterStore } from "../types/types";

class FilterStore {
  filters: IFilterStore = {
    isOpen: false,
    isOn: false,
    filterCompl: true,
  };

  constructor() {
    makeAutoObservable(this);
  }

  toggleFilters() {
    this.filters.isOpen = !this.filters.isOpen;
  }

  setDefaultFilter() {
    this.filters.isOn = false;
  }
  setComplFilter() {
    this.filters.isOn = true;
    this.filters.filterCompl = true;
  }
  setUnComplFilter() {
    this.filters.isOn = true;
    this.filters.filterCompl = false;
  }
}

export default new FilterStore();
