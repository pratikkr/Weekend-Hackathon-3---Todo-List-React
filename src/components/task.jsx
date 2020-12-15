import React from "react";
import Edit from "./edit";

export default function Task({
  taskName,
  edit,
  editValue,
  onEditChange,
  onSaveEdit,
  onDelete,
  onEdit
}) {
  return (
    <>
      <li className="list">
        {!edit ? (
          taskName
        ) : (
          <Edit
            editValue={editValue}
            onEditChange={onEditChange}
            onSaveEdit={onSaveEdit}
          />
        )}
      </li>
      <button className="edit" onClick={onEdit}>
        Edit
      </button>
      <button className="delete" onClick={onDelete}>
        Delete
      </button>
    </>
  );
}
