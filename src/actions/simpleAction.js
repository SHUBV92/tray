export const simpleAction = () => (dispatch, userDetails) => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: userDetails,
  });
};
