import { LOGIN_USER } from "../_action/types";

export default function (state = {}, action = {}) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        res: action.payload,
      };
    default:
      return state;
  }
}
