export const orderSelector = (state) => {
  return Object.keys(state.order).length > 0 ? state.order : null;
};
