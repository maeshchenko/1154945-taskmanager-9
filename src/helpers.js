const getRandomElements = (arr, num) => arr.sort(() => Math.random() - 0.5).slice(0, Math.floor(Math.random() * num));

export const getTask = () => ({
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

export const createFilters = (tasks) => {
  const countOverdued = (tasks) => {
    return tasks.filter(task => (task.dueDate - Date.now() < 0)).length;
  };

  const countToday = (tasks) => {
    return tasks.filter(task => (task.dueDate - Date.now() >= 0)).length;
  };

  const countFavorites = (tasks) => {
    return tasks.filter(task => task.isFavorite).length;
  };

  const countRepeating = (tasks) => {
    return tasks.filter(task => {
      return Object.keys(task.repeatingDays).some((day) => task.repeatingDays[day]);
    }).length;
  };

  const countTags = (tasks) => {
    return tasks.filter(task => task.tags.size > 0).length;
  };

  const countArchived = (tasks) => {
    return tasks.filter(task => task.isArchive).length;
  };

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
