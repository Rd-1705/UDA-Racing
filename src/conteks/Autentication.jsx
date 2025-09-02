import { createContext, useContext, useState, useEffect } from "react";

const Autentication = createContext();
export function AutenticationProvider({ children }) {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("pengguna")) || null);

    useEffect(() => {
        const sincronAutentic = () => setUser(JSON.parse(localStorage.getItem("pengguna")) || null);
        window.addEventListener("storage", sincronAutentic);
        return () => window.removeEventListener("storage", sincronAutentic);

    }, []);

    const login = (data) => {
        localStorage.setItem("pengguna", JSON.stringify(data));
        setUser(data)
    };

    const logout = () => {
        localStorage.removeItem("pengguna");
        setUser(null);
    };

    return (
        <Autentication.Provider value={{ user, login, logout, isLogin: !!user }}>
            {children}
        </Autentication.Provider>
    )
}


export const useAuth = () => useContext(Autentication);