export default (state = {}, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION":
      console.log("result", action.payload)
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
