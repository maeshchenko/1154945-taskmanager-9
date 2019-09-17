import {createMenuComponent} from './components/MenuComponent';
import {createSearchComponent} from './components/SearchComponent';
import {createFilterComponent} from './components/FilterComponent';
import {createSortingComponent} from './components/SortingComponent';
import {createEditTaskCardComponent} from './components/EditTaskCardComponent';
import {createBoardContainerComponent} from './components/BoardContainerComponent';
import {createTasksBoardComponent} from './components/TasksBoardComponent';
import {createLoadMoreButton} from './components/LoadMoreButton';
import {getTask, createFilters} from "./helpers";
import {createTaskCardComponent} from "./components/TaskCardComponent";

const tasks = [];
const tasksNum = 20;
for (let i = 0; i < tasksNum; i++) {
  tasks.push(getTask());
}

const render = (container, component, position) => {
  container.insertAdjacentHTML(position, component);
};

const controlContainer = document.querySelector(`.main__control`);
const mainContainer = document.querySelector(`.main`);

render(controlContainer, createMenuComponent(), `beforeend`);
render(mainContainer, createSearchComponent(), `beforeend`);
render(mainContainer, createFilterComponent(createFilters(tasks)), `beforeend`);
render(mainContainer, createBoardContainerComponent(), `beforeend`);

const boardContainer = document.querySelector(`.board`);

render(boardContainer, createSortingComponent(), `beforeend`);
render(boardContainer, createTasksBoardComponent(), `beforeend`);
render(boardContainer, createLoadMoreButton(), `beforeend`);

const tasksContainer = document.querySelector(`.board__tasks`);

render(tasksContainer, createEditTaskCardComponent(tasks[0]), `beforeend`);

const loadMore = document.querySelector(`.load-more`);

let taskLoadState = {
  current: 0,
  step: 8,
  max: tasksNum,
};

export const pushTasks = () => {
  const {current, step, max} = taskLoadState;
  taskLoadState.current += step;
  if (taskLoadState.current >= max) {
    loadMore.style.display = `none`;
  }
  const currentTasksArray = tasks.slice(current, current + step);
  for (let i = 1; i < currentTasksArray.length; i++) {
    render(tasksContainer, createTaskCardComponent(tasks[i]), `beforeend`);
  }
};

loadMore.addEventListener(`click`, () => {
  pushTasks();
});

pushTasks();
