import { useAuth } from "./authContext";
import { useHistory } from "react-router-dom";

export function ProtectedRouter({ children }) {

     const history = useHistory();
     const { user, loading } = useAuth();


     if (loading) { return <div>Loading...</div> };

     if (!user) { return history.push("/login") };

     return <span>{children}</span>;
}