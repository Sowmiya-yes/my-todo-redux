import './App.css';
import React from 'react';
import {connect} from 'react-redux'
import ListWithCheckbox from './components/ListWithCheckbox';
import ListWithLeftBorder from './components/ListWithLeftBorder';
import { addTask, moveTask } from './redux/action';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      newTask: ""
    }
  }

  newTaskAdded = () => {
    this.props.addTask(this.state.newTask)
    document.getElementById("taskName").value = ""
  }

  markAsComplete = (event) => {
     let taskIdToMove = event.target.closest("li").value
     if(taskIdToMove !== undefined) {
       this.props.moveTask(taskIdToMove)
     }
  }

  newTaskNameHandle = event => {
    this.setState({newTask: event.target.value})
  }

  render() {
    const {completedTasks, incompleteTasks} = this.props;
    return (
    <>
      <header className="header">
        <h1 className="heading">My Todo</h1>
      </header>
      <main className="main">
        <div className="todo-container">
          <section className="todo-add flex-row-center">
            <input type="text" placeholder="Enter your todo item" className="todo-input" id="taskName" onChange={this.newTaskNameHandle} value={this.state.input}></input>
            <button className="todo-btn" onClick={this.newTaskAdded}>Add</button>
          </section>
          {
            completedTasks.length > 0 || incompleteTasks.length > 0
            ? <>
                <section className="todo-completed flex-col-center margin-top-2rem">
                  {
                    incompleteTasks && incompleteTasks.length > 0
                    ? <ul>
                      { incompleteTasks.map(task => <ListWithCheckbox key={task.id} {...task} checkHandler={this.markAsComplete}/> ) }
                    </ul>
                    : <p>No pending task !!!</p>
                  }
                </section>
                <section className="todo-incomplete flex-col-center margin-top-2rem">
                  {
                    completedTasks && completedTasks.length > 0
                    ? <ul>
                      { completedTasks.map(task => <ListWithLeftBorder key={task.id} {...task} /> ) }
                    </ul>
                    : <p>No task is completed !!!</p>
                  }
                </section>
              </>
            : <section className="todo-completed flex-col-center margin-top-2rem">
                <p>No task added yet !!!</p>
              </section>
          }
        </div>
      </main>
      <footer className="footer">
        <span>Learned and made with curiosity</span>
      </footer>
    </>
    )
  }
}

const mapStateToProps = state => {
  return {
    incompleteTasks: state.incompleteTasks,
    completedTasks: state.completedTasks,
    taskNo: state.taskNo
  }
}

export default connect(mapStateToProps, {addTask, moveTask})(App);
