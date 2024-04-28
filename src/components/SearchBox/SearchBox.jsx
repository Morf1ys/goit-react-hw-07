import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const value = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search contacts..."
      value={value}
      onChange={handleChange}
      className={css.search}
    />
  );
};

export default SearchBox;
