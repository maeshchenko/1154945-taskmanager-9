export const createFilterComponent = (filtersArr) => {
  return `<section class="main__filter filter container">
    ${filtersArr.map((filter) => `<input
        type="radio"
        id="filter__overdue"
        class="filter__input visually-hidden"
        name="filter"
        disabled
      />
      <label for="filter__overdue" class="filter__label">${filter.title} <span class="filter__${filter.name}-count">${filter.count}</span></label>`
  ).join(``)}
  </section>`;
};
