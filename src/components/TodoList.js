import React, { useState, useEffect } from "react";
import { TodoListItem } from "./TodoListItem";

export const TodoList = () => {
  const [taskItems, setTaskItems] = useState([
    {
      id: 1,
      name: "Task 1",
      status: "pending"
    },
    {
      id: 2,
      name: "Task 2",
      status: "pending"
    },
    {
      id: 3,
      name: "Task 3",
      status: "pending"
    },
    {
      id: 4,
      name: "Task 4",
      status: "pending"
    }
  ]);

  useEffect(() => {
    console.log("montou");
  });

  const handleOnToggleCompleted = (taskId, event) => {
    const newTaskItems = taskItems.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          status: !event.target.checked ? "completed" : "pending"
        };
      }

      return task;
    });

    setTaskItems(newTaskItems);
  };

  return (
    <div>
      <ul>
        {taskItems.map((task) => (
          <li>
            <TodoListItem
              onToggleCompleted={handleOnToggleCompleted}
              taskId={task.id}
              status={task.status}
              taskName={task.name}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
