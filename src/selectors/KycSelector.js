export const getKyc = state => {
  return Object.keys(state.kyc).length > 0 ? state.kyc : null;
};
