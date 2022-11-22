import React, { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const value = inputValue.trim();
    if (value.length <= 1) return;
    onAddCategory(value);
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
