import React, { createContext, useContext, useState } from "react";

type UserContextType = {
    user:any;
    setUser: (user: any) => void;
  };
  
  export const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
  });

  export const UserProvider:React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [user, setuser] = useState(null);
    const setUser = (user: any) => {
        setuser(user);
      };
      return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
      );
 }

 export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
      throw new Error("useUser must be used within a UserProvider");
    }
    return context;
 }