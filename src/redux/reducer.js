import { ADD_TASK, MOVE_TASK } from "./action-types";

const intialState = {
  completedTasks: [],
  incompleteTasks: [],
  taskNo: 0
}

export default function rootReducer(state = intialState, action) {
  switch(action.type) {
    case ADD_TASK:
      let newTask = {
        id: state.taskNo + 1,
        taskName: action.payload,
        isComplete: false
      }
      return {
        ...state,
        taskNo: state.taskNo + 1,
        incompleteTasks: [...state.incompleteTasks, newTask]
      }
    case MOVE_TASK:
      let taskToMove = state.incompleteTasks.filter(task => task.id === action.payload)[0]
      console.log("task move", taskToMove)
      return {
        ...state,
        incompleteTasks: state.incompleteTasks.filter(task => task.id !== action.payload),
        completedTasks: [...state.completedTasks, taskToMove]
      }
    default:
      return state
  }
}
