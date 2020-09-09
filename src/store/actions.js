import { SUBMIT_USER_DETAILS } from "./constants";

export const submitUserDetails = (
  userDetails
) => ({
  type: SUBMIT_USER_DETAILS,
  payload: userDetails,
});
