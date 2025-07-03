import { initialUser, type IUserActionPayload, type IUserType } from "./type";

const reducer = (
  state: IUserType = initialUser,
  action: IUserActionPayload
) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "REMOVE_USER":
      return { ...initialUser };
    default:
      return initialUser;
  }
};

export default reducer;
