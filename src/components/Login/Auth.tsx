import React, {useEffect, useState} from "react";
import Loader from "../Comman/Loader";
import app from "./base";

export const AuthContext = React.createContext({});

export type AuthContextType = {
    currentUser?: boolean,
}

export const AuthProvider: React.FC = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)

        });
    }, []);

    if (pending) {
        return <Loader/>
    }
    return (
        <AuthContext.Provider
            value={{
                currentUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
