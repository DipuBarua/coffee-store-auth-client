
import { createContext, useState } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";



const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const userInfo = {
        user,
    }
    return (
        <div>
            <AuthContext.Provider value={userInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;