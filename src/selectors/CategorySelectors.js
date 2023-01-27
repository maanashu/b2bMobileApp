export const getCategorySelector = (state) => {
  return Object.keys(state.category).length > 0 ? state.category : null;
};
