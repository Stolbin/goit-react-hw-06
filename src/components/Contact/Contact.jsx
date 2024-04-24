import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const onDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  return (
    <li className={css.contactItem}>
      <h3 className={css.contactTitle}>{name}</h3>
      <p className={css.contactText}>tel: {number}</p>
      <button
        className={css.contactBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        <p className={css.contactBtnText}>Delete</p>
      </button>
    </li>
  );
};

export default Contact;
