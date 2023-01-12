import React, { useState } from "react";
import { findRenderedDOMComponentWithClass } from "react-dom/test-utils";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [details, setDetails] = useState("");
  const [categoryInput, setCategoryInput] = useState("Code");

  function onInputChange(event){
    setDetails(event.target.value);
  }

  function onSelectChange(event){
    setCategoryInput(event.target.value);
  }

  function handleSubmit(event){
    event.preventDefault();
    const newTask = {
      text: details,
      category: categoryInput
    }
    onTaskFormSubmit(newTask);
  }

  const optionElements = categories.map(category=>{
    if (category !== "All") {
      return <option key={category} value={category}>{category}</option>
    }
  })    

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={details} onChange={onInputChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={onSelectChange}>
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
