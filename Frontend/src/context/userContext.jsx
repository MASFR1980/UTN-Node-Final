import { createContext, useState, useEffect } from "react";
import { API } from "../api/apiInstance";

export const UserContext = createContext();

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const logout = () => {
        setUser(null);
        localStorage.removeItem("token");
    };
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            API.get("/profile")
                .then((res) => {
                    setUser({username: res.data.loggedUser});
                })
                .catch(() => {
                    logout();
                });
        }
    }, []);
    return (
        <UserContext.Provider value={{ user, setUser, logout }}>
            {children}
        </UserContext.Provider>
    );  
}