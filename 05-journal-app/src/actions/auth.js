import { firebase, googleAuthProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { uiFinishLoading, uiStartLoading } from "./ui";
import Swal from "sweetalert2";
import { noteLogout } from "./notes";

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName,
  },
});

export const startLogout = () => {
  return async (dispatch) => {
    await firebase.auth().signOut();
    dispatch(noteLogout());
    dispatch(logout());
  };
};

export const logout = () => ({
  type: types.logout,
});

export const startLoginEmailPassword = (email, password) => {
  return async (dispatch) => {
    dispatch(uiStartLoading());
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      dispatch(login(user.uid, user.displayName));
    } catch (err) {
      console.log(err);
      Swal.fire("Error", err.message, "error");
    }
    dispatch(uiFinishLoading());
  };
};

export const startGoogleLogin = () => {
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(googleAuthProvider)
      .then(({ user }) => {
        dispatch(login(user.uid, user.displayName));
      });
  };
};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
  return (dispatch) => {
    dispatch(uiStartLoading());
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async ({ user }) => {
        await user.updateProfile({
          displayName: name,
        });
        console.log(user);
        dispatch(uiFinishLoading());
        dispatch(login(user.uid, user.displayName));
      })
      .catch((err) => {
        Swal.fire("Error", err.message, "error");
        dispatch(uiFinishLoading());
      });
  };
};
