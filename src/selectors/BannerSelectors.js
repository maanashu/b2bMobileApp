export const getBannerSelector = (state) => {
  return Object.keys(state.banner).length > 0 ? state.banner : null;
};
