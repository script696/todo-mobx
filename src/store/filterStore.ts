import { makeAutoObservable } from "mobx";

class Filter {
  filters: any = {
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

export default new Filter();
