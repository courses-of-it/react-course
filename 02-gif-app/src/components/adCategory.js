import React, { useState } from "react";
import PropTypes from 'prop-types';

function AddCategory({setCategories}) {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

    const handleSubmit = e => {
	e.preventDefault()
	if (inputValue.trim().length > 1) {
	    setCategories(cts => [inputValue, ...cts])
	    setInputValue('')
	}
    }

  return (
    <form onSubmit={ handleSubmit }>
      <input type="text" value={inputValue} onChange={handleInput} placeholder="Introduce your category" />
    </form>
  );
}

AddCategory.protoTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
