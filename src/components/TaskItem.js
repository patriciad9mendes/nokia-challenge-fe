import React from "react";

class TaskItem extends React.Component {

  render() {
    return (
      <div className="taskList">
        <ul>
          <li>
            <p>{this.props.task.text}</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default TaskItem;
