import { SUBMIT_USER_DETAILS } from "./constants";

export default (
  state = { userDetails: "" },
  action
) => {
  switch (action.type) {
    case SUBMIT_USER_DETAILS:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
