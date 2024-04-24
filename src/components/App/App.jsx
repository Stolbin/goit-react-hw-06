import ContactsForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SerchBox/SerchBox";
import css from "./App.module.css";

const App = () => {
  return (
    <div className={css.appBox}>
      <h1>Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
export default App;
