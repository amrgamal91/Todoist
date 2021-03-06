import React from "react";
import { firebase } from "firebase//app";

export const Checkbox = ({ id }) => {
  const archiveTask = () => {
    firebase
      .firestore()
      .collection("tasks")
      .doc(id)
      .update({
        archived: true
      });
  };

  return (
    <div
      className="checkbox-holder"
      data-testid="checkbox-actoin"
      onClick={() => archiveTask()}
      onKeyDown={() => archiveTask()}
      // aria-label={`Mark ${taskDesc} as done?`}
      role="button"
      tabIndex={0}
    >
      <span className="checkbox"></span>
    </div>
  );
};
