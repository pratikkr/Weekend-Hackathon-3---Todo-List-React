import React from "react";
import "./../styles/App.css";
import Task from "./task";

function App() {
  const [value, setValue] = React.useState("");
  const [editIndex, setEditIndex] = React.useState("-1");
  const [editValue, setEditValue] = React.useState("");
  const [itemsList, setItemsList] = React.useState([]);
  const handleAdd = () => {
    let newItem = value;
    if (newItem === "") {
      return;
    }
    let availableTasks = itemsList.map((item) => item.task);
    if (availableTasks.includes(newItem)) {
      setEditValue("");
      return;
    }
    let newItemObj = {
      task: newItem,
      edit: false
    };
    let itemsCopy = [...itemsList, newItemObj];
    setItemsList(itemsCopy);
    setValue("");
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleEditChange = (event) => {
    setEditValue(event.target.value);
  };
  const saveEdit = () => {
    let editItemsCopy = [...itemsList];
    editItemsCopy[editIndex].task = editValue;
    editItemsCopy[editIndex].edit = false;
    setItemsList(editItemsCopy);
    setEditIndex(-1);
    setEditValue("");
  };
  const handleDelete = (index) => {
    let itemsCopy = [...itemsList];
    itemsCopy.splice(index, 1);
    setItemsList(itemsCopy);
  };

  const handleEdit = (index) => {
    let editObj = itemsList[index];
    editObj.edit = true;
    let itemsCopy = [...itemsList];
    itemsCopy[index] = editObj;
    setEditIndex(index);
    setItemsList(itemsCopy);
  };
  return (
    <div id="main">
      <input type="string" id="task" onChange={handleChange} value={value} />
      <button id="btn" onClick={handleAdd}>
        Add
      </button>
      {itemsList.map((item, index) => (
        <Task
          taskName={item.task}
          edit={item.edit}
          key={index}
          serial={index}
          editValue={editValue}
          onEditChange={handleEditChange}
          onSaveEdit={saveEdit}
          onDelete={() => handleDelete(index)}
          onEdit={() => handleEdit(index)}
        />
      ))}
    </div>
  );
}

export default App;
