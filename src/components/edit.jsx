import React from "react";

export default function Edit({ editValue, onEditChange, onSaveEdit }) {
  return (
    <>
      <input
        className="editTask"
        type="string"
        onChange={onEditChange}
        value={editValue}
      />
      <button
        disabled={editValue === ""}
        className="saveTask"
        onClick={onSaveEdit}
      >
        Save
      </button>
    </>
  );
}
