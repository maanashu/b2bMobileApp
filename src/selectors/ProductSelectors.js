export const getProductSelector = (state) => {
  return Object.keys(state.product).length > 0 ? state.product : null;
};
