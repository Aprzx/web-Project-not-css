import { useContext } from "react";
import { UserContext } from "../../context/userContext";

export default function Dashbord() {
     const {user} = useContext(UserContext)
    return (
        <div>
            <h1>Dashbord</h1>
            <>
            {!!user && (<h1> Hi {user.name}!</h1>)}
            </>
        </div>
    )
}