import { useAuth } from "./authContext";
import { Redirect, useHistory } from "react-router-dom";
import { IonLoading } from "@ionic/react";

export function ProtectedRouter({ children }) {

     const history = useHistory();
     const { user, loading } = useAuth();


     if (loading) { return <IonLoading message={"Porfavor espere..."} duration={0} isOpen={true} /> };

     if (!user) { return <Redirect to="/login"/> || history.push("/registry","/reset-password")  };

     return <span>{children}</span>;
}