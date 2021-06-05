import { LocationState } from "../../pages/Login/Login"

/**
 * TODO:
 * Change logoutUser from any to another value
 */
export type CreateAuthContext = {
    user: User | null;
    token: string | null;
    loginUserWithCredentials: LoginUser;
    logoutUser: any
}

export type LoginUser = (email: string, password: string, state: LocationState) => Promise<void>

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