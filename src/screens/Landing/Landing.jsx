import * as React from "react";
import { Link } from "react-route-dom";
import useUser from "../../_hooks/useUser";

export default function Landing() {
    // import isLoggedIn function to check for user's login status
    const { isLoggedIn } = useUser();

    return !isLoggedIn() ? (
        <div>
            You are not currently logged in <Link to="/login">Log In here.</Link>
        </div>
    ) : (
        <div>
            You are successfully logged in!
        </div>
    )
}