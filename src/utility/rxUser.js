import { authState } from "rxfire/auth";
import { auth } from "../firebase";

// authStae => Retuns a rxjs Observable that contain state of the user (firebase.User || null)
export default authState(auth);