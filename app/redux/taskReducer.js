import taskConstant from '../globals/actionConstant';

const initialState = {
  tasks: [
    {
      id: '1',
      title: 'Your task',
      description: 'you have to complete it by today. you have to complete it by today. you have to complete it by today.',
      doesTaskCompleted: true
    }
  ],
  pendingTasks: [],
  completedTasks: []
};

const parsePendingTasks = tasks => tasks.filter(task => task.doesTaskCompleted === false);
const parseCompletedTasks = tasks => tasks.filter(task => task.doesTaskCompleted === true);
const removeCompletedTaskParser = (id, tasks) => tasks.filter(task => {
  if (task.id === id) {
    task.doesTaskCompleted = true;
  }
  return task;
});
const undoTaskParser = (id, tasks) => tasks.filter(task => {
  if (task.id === id) {
    task.doesTaskCompleted = false;
  }
  return task;
});

export default function taskReducer(state = initialState, action) {
  const { data, type } = action;
  switch (type) {
    case taskConstant.GET_TASKS_LIST:
      return {
        ...state
      };
    case taskConstant.GET_PENDING_TASKS_LIST:
      return {
        ...state,
        pendingTasks: parsePendingTasks(state.tasks)
      };
    case taskConstant.GET_COMPLETED_TASKS_LIST:
      return {
        ...state,
        completedTasks: parseCompletedTasks(state.tasks)
      };
    case taskConstant.CREATE_TASK:
      return {
        ...state,
        ...state.tasks.push(data),
        pendingTasks: parsePendingTasks(state.tasks)
      };
    case taskConstant.COMPLETED_TASK:
      return {
        ...state,
        tasks: removeCompletedTaskParser(action.id, state.tasks),
        pendingTasks: parsePendingTasks(state.tasks)
      };
    case taskConstant.UNDO_TASK:
      return {
        ...state,
        tasks: undoTaskParser(action.id, state.tasks),
        completedTasks: parseCompletedTasks(state.tasks)
      };
    default:
      return state;
  }
}
