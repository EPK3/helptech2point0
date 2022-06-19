import React, { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export const StateContext = ({ children }) => {
    const [showContact, setShowContact] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <Context.Provider
        value={{
            showContact,
            setShowContact,
            showDropdown,
            setShowDropdown,
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);