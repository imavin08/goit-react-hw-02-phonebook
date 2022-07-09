import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './Filter.module.css';

const Filter = ({ onChangeFilter, valueFilter }) => {
  const id = nanoid();
  return (
    <label className={css.label} htmlFor={id}>
      Find contacts by name
      <input
        className={css.input}
        id={id}
        onChange={onChangeFilter}
        value={valueFilter}
        type="text"
      />
    </label>
  );
};

export default Filter;

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  valueFilter: PropTypes.string,
};
