import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [category, setCategories] = useState("All")


  function handleDelete(textToDelete) {
    const displayedTasks = tasks.filter(task => {
      return task.text !== textToDelete;
    })
    setTasks(displayedTasks)
  }

  function handleFilter(category) {
    setCategories(category)
  }

  function onTaskFormSubmit(newTask){
    setTasks([...tasks, newTask])
  }


  const displayedTasks = tasks.filter(task => {
    return category === "All" || task.category === category
  })

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} handleFilter={handleFilter} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={displayedTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
