import constant from '../globals/actionConstant';

export function createTask(data) {
  return {
    type: constant.CREATE_TASK,
    data,
  };
}

export function getPendingTasks() {
  return {
    type: constant.GET_PENDING_TASKS_LIST
  };
}

export function getCompletedTasks() {
  return {
    type: constant.GET_COMPLETED_TASKS_LIST
  };
}

export function completeTask(id) {
  return {
    type: constant.COMPLETED_TASK,
    id
  };
}

export function undoTask(id) {
  return {
    type: constant.UNDO_TASK,
    id
  };
}
