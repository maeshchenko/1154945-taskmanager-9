import {createMenuComponent} from './components/MenuComponent';
import {createSearchComponent} from './components/SearchComponent';
import {createFilterComponent} from './components/FilterComponent';
import {createSortingComponent} from './components/SortingComponent';
import {createEditTaskCardComponent} from './components/EditTaskCardComponent';
import {createTaskCardComponent} from './components/TaskCardComponent';
import {createBoardContainerComponent} from './components/BoardContainerComponent';
import {createTasksBoardComponent} from './components/TasksBoardComponent';
import {createLoadMoreButton} from './components/LoadMoreButton';

const render = (container, component, position) => {
  container.insertAdjacentHTML(position, component);
};

const controlContainer = document.querySelector(`.main__control`);
const mainContainer = document.querySelector(`.main`);

render(controlContainer, createMenuComponent(), `beforeend`);
render(mainContainer, createSearchComponent(), `beforeend`);
render(mainContainer, createFilterComponent(), `beforeend`);
render(mainContainer, createBoardContainerComponent(), `beforeend`);

const boardContainer = document.querySelector(`.board`);

render(boardContainer, createSortingComponent(), `beforeend`);
render(boardContainer, createTasksBoardComponent(), `beforeend`);
render(boardContainer, createLoadMoreButton(), `beforeend`);

const tasksContainer = document.querySelector(`.board__tasks`);

render(tasksContainer, createEditTaskCardComponent(), `beforeend`);
for (let i = 0; i < 3; i++) {
  render(tasksContainer, createTaskCardComponent(), `beforeend`);
}
