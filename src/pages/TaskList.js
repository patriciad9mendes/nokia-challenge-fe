import React from "react";
import ReactDOM from 'react-dom';

//Components
import TaskItem from '../components/TaskItem.js';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: []
    }

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    let tasks = this.state.tasks;

    fetch("http://localhost:3008/api/tasks")
        .then(response => response.json())
        .then(data => this.setState({tasks: data}));
  }

  render() {
    let tasks = this.state.tasks;
    const tasksComponent = tasks.map((task, i) =>
      <TaskItem key={task.id} task={task}/>
    );

    return (
      <div className="taskList">
        <h2>Task List</h2>
        {tasksComponent}
      </div>
    )
  }
}

export default TaskList;