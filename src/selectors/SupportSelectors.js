export const SupportSelector = (state) => {
  return Object.keys(state.support).length > 0 ? state.support : null;
};
