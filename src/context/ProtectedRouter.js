import { useAuth } from "./authContext";
import { auth } from "../database/firebaseConfig";
import { IonLoading } from "@ionic/react";
import MenuAdmin from "../components/Menu_Admin";
import Menu from "../components/Menu";
import Login from "../Authenticate/Login";
import Register from "../Authenticate/Register";
import ResetPassword from "../Authenticate/ResetPassword";
import { Redirect } from "react-router";


export function ProtectedRouter({ children }) {

    const { loading, user } = useAuth();

    if (loading) {
        return <div>
            <IonLoading message={"Porfavor espere..."} duration={3500} isOpen={true} />
        </div>
    };

    if (!auth.currentUser) {
        return <Redirect to="/login" /> || <Register /> || <ResetPassword />
    }/*  else if (!user.rol === "usuario") {
        <Menu />
    } else if (user.rol === "admin") {
        <MenuAdmin />
    } */

    return <>{children}</>;
}