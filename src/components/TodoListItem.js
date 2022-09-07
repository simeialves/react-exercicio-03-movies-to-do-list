import React from "react";

export const TodoListItem = ({
  onToggleCompleted,
  taskId,
  status,
  taskName
}) => {
  return (
    <div>
      <input
        type="checkbox"
        onChange={(event) => onToggleCompleted(taskId, event)}
      />
      <b
        style={{
          textDecoration: status === "completed" ? "line-through" : "none",
          background: status === "completed" ? "green" : "red"
        }}
      >
        Filme: {taskName}
      </b>
    </div>
  );
};
