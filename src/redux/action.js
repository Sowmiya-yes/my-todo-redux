import { ADD_TASK, MOVE_TASK } from "./action-types";

export function addTask(payload) {
  return { type: ADD_TASK, payload };
}

export function moveTask(payload) {
  return {type: MOVE_TASK, payload };
}