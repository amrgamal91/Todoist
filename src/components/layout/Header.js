import React, { useState } from "react";
import { FaPaintBrush } from "react-icons/fa";
import { AddTask } from "../AddTask";
export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setshouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist"></img>
        </div>
        <div className="settings">
          <ul>
            <li
              data-testid="quick-add-task-action"
              aria-label="Quick add task"
              className="settings__add"
              onClick={() => {
                setShowQuickAddTask(true);
                setshouldShowMain(true);
              }}
              onKeyDown={() => {
                setShowQuickAddTask(true);
                setshouldShowMain(true);
              }}
            >
              +
            </li>
            <li
              data-testid="dark-mode-action"
              aria-label="Darkmode on/off"
              className="settings__darkmode"
              onClick={() => setDarkMode(!darkMode)}
              onKeyDown={() => setDarkMode(!darkMode)}
            >
              <FaPaintBrush />
            </li>
          </ul>
        </div>
      </nav>
      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};
