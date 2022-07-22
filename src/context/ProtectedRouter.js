import { useAuth } from "./authContext";
import { IonLoading } from "@ionic/react";
import { Redirect } from "react-router";
import Register from "../Authenticate/Register";
import ResetPassword from "../Authenticate/ResetPassword";


export function ProtectedRouter({ children }) {

    const { loading, user } = useAuth();

    if (loading) {
        return <div>
            <IonLoading message={"Porfavor espere..."} duration={3500} isOpen={true} />
        </div>
    };

    if (!user) {
        return <Redirect to="/login" /> || <Register/> || <ResetPassword/>
    }

    return <>{children}</>;
}