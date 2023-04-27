import { SignIn } from "./popups/sign-in";

export const GET_PARAMS = {
    popup: "popup",
    framework: "framework"
};

export const GET_ENUMS = {
    popup: {
        signIn: "sign-in",
        framework: "framework"
    },
};

export const popups = {
    [GET_ENUMS.popup.signIn]: SignIn,
};