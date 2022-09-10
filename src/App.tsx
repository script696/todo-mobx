import {observer} from "mobx-react-lite"
import AddPopup from './pages/ToDo/components/AddPopup/AddPopup';
import ToDo from './pages/ToDo/ToDo';
import popupStore from './store/popupStore'

const  App = observer(()=> {

  return (
    <>
      <ToDo/>
      {popupStore.addPopup.isOpen && <AddPopup/>}
    </>
  );
});

export default App;
