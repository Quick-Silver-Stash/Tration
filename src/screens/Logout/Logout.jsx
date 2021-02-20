import * as React from "react";
import { auth } from "../../firebase";

export default function Logout() {
    React.useEffect(() => {
        console.log("Logged Out Successfully");
        auth.doSignOut();
    }, []);

    return <div>Logging Out</div>
}