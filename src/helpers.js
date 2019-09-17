const getRandomElements = (arr, num) => arr.sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * num));
const randomRange = (min, max) => Math.floor( Math.random() * (max - min) + min);
const randomBoolean = () => Boolean(Math.round(Math.random()));
const countOverdued = (tasks) => tasks.filter((task) => (task.dueDate - Date.now() < 0)).length;
const countToday = (tasks) => tasks.filter((task) => (task.dueDate - Date.now() >= 0)).length;
const countFavorites = (tasks) => tasks.filter((task) => task.isFavorite).length;
const countTags = (tasks) => tasks.filter((task) => task.tags.size > 0).length;
const countArchived = (tasks) => tasks.filter((task) => task.isArchive).length;
const countRepeating = (tasks) => {
  return tasks.filter((task) => {
    return Object.keys(task.repeatingDays).some((day) => task.repeatingDays[day]);
  }).length;
};


export const getTask = () => ({
  description: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`
  ][randomRange(0, 3)],
  dueDate: Date.now() + randomRange(-7, 7) * 24 * 60 * 60 * 1000,
  tags: new Set(getRandomElements([
    `homework`,
    `theory`,
    `practice`,
    `intensive`,
    `keks`
  ], 3)),
  repeatingDays: {
    'mo': randomBoolean(),
    'tu': randomBoolean(),
    'we': randomBoolean(),
    'th': randomBoolean(),
    'fr': randomBoolean(),
    'sa': randomBoolean(),
    'su': randomBoolean()
  },
  color: [
    `black`,
    `yellow`,
    `blue`,
    `green`,
    `pink`
  ][randomRange(0, 5)],
  isFavorite: randomBoolean(),
  isArchive: randomBoolean()
});

export const createFilters = (tasks) => {
  return [
    {title: `All`, count: tasks.length },
    {title: `Overdue`, count: countOverdued(tasks)},
    {title: `Today`, count: countToday(tasks)},
    {title: `Favorites`, count: countFavorites(tasks)},
    {title: `Repeating`, count: countRepeating(tasks)},
    {title: `Tags`, count: countTags(tasks)},
    {title: `Archive`, count: countArchived(tasks)},
  ];
};
