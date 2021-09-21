import { LocationState } from "../../pages/Login/Login"

export type CreateAuthContext = {
    user: User | null;
    token: string | null;
    signUpUser: SignUpUser;
    loginUserWithCredentials: LoginUser;
    logoutUser: Function;
}

export type LoginUser = (email: string, password: string, state: LocationState) => Promise<any>
export type SignUpUser = (firstName: string, lastName: string, email: string, password: string, state: LocationState) => Promise<any>


export type User = {
    email: string;
    firstName: string;
    lastName: string;
    _id: string;
}

export type LoginUserWithCredentials = {
    email: string;
    password: string;
}