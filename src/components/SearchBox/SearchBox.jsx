import { useDispatch } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <>
      <h3 className={css.title}>Find contacts by name</h3>
      <input
        type="text"
        onChange={handleChange}
        placeholder="Search by name"
        className={css.input}
      />
    </>
  );
};

export default SearchBox;
