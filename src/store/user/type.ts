export interface IUserType {
  id: string;
  name: string;
  email: string;
}
export const initialUser: IUserType = {
  id: "",
  name: "",
  email: "",
};

export interface IUserActionPayload {
  type: string;
  payload: IUserType;
}
