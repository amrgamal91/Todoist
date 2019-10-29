import React, { useEffect } from "react";
import { Checkbox } from "./Checkbox";
import { useTasks } from "../hooks";
import { AddTask } from "./AddTask";
import { useSelectedProjectValue, useProjectsValue } from "../context";
import { collatedTasks } from "../constants";
import { getTitle, getCollatedTitle, collatedTasksExist } from "../helpers";

export const Tasks = () => {
  const { selectedProject } = useSelectedProjectValue();
  const { projects } = useProjectsValue();
  const { tasks } = useTasks(selectedProject);

  // console.log("here are tasks : " + JSON.stringify(tasks));
  // console.log("the selected project : " + JSON.stringify(selectedProject));

  let projectName = "";

  if (collatedTasksExist(selectedProject) && selectedProject) {
    // console.log("getting collated title....");
    projectName = getCollatedTitle(collatedTasks, selectedProject).name;
  }

  if (
    projects &&
    projects.length > 0 &&
    selectedProject &&
    !collatedTasksExist(selectedProject)
  ) {
    // console.log("getting normal title....");
    // console.log("projects:" + JSON.stringify(projects));
    // console.log("selected project: " + JSON.stringify(selectedProject));

    projectName = getTitle(projects, selectedProject).name;
  }

  useEffect(() => {
    document.title = `${projectName}: Todoist`;
  });

  // console.log("tasks1:", tasks);
  // console.log("project Name:" + projectName);

  return (
    <div className="tasks" data-testid="tasks">
      <h2 data-testid="project-name">{projectName}</h2>
      <ul className="tasks__list">
        {tasks &&
          tasks.map(task => (
            <li key={`${task.id}`}>
              <Checkbox id={task.id} />
              <span>{task.task}</span>
            </li>
          ))}
      </ul>
      <AddTask />
    </div>
  );
};
