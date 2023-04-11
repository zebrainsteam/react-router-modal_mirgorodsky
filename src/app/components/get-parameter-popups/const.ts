import { SignIn } from "./popups/sign-in";

export const GET_PARAMS = {
    popup: "popup",
};

export const GET_ENUMS = {
    popup: {
        signIn: "sign-in",
    },
};

export const popups = {
    [GET_ENUMS.popup.signIn]: SignIn,
};