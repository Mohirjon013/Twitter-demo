import { createContext, useState } from "react";

export const Context = createContext()

export const AuthContext = ({children}) => {
    const [ token, setToken] = useState(JSON.parse(localStorage.getItem("token")) || null)
    const [register, setRegister] = useState(JSON.parse(localStorage.getItem("register")) || null)
    localStorage.setItem("token", JSON.stringify(token))


    const [isOpenModal, setIsOpenModal] = useState(false);


    return (
        <Context.Provider value={{token, setToken, register, setRegister, isOpenModal, setIsOpenModal}}>{children}</Context.Provider>
    )
}