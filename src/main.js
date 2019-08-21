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
const getRandomElements = (arr, num) => arr.sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * num));
const getTask = () => ({
  description: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ][Math.floor(Math.random() * 3)],
  dueDate: Date.now() + Math.floor(Math.random() * 14 - 7) * 24 * 60 * 60 * 1000,
  tags: new Set(getRandomElements([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`
  ], 3)),
  repeatingDays: {
    'mo': Boolean(Math.round(Math.random())),
    'tu': Boolean(Math.round(Math.random())),
    'we': Boolean(Math.round(Math.random())),
    'th': Boolean(Math.round(Math.random())),
    'fr': Boolean(Math.round(Math.random())),
    'sa': Boolean(Math.round(Math.random())),
    'su': Boolean(Math.round(Math.random()))
  },
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`
  ][Math.floor(Math.random() * 5)],
  isFavorite: Boolean(Math.round(Math.random())),
  isArchive: Boolean(Math.round(Math.random()))
});

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
  render(tasksContainer, createTaskCardComponent(getTask()), `beforeend`);
}
