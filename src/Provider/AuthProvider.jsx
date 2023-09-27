import { createContext, useEffect, useState } from "react";
import { app } from "../../firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";
// import useAxiosSecure from "../hooks/useAxiosSecure";
// import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
//   const [axiosSecure] = useAxiosSecure()

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    try {
      const provider = new GoogleAuthProvider();
      setLoading(true);
      return signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error);
    }
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      if(currentUser){
          axios.post('http://localhost:5000/jwt', {email: currentUser.email})
          .then(data => {
              localStorage.setItem('access-token', data.data.token)
              setLoading(false)
          })
      }
      else{
          localStorage.removeItem('access-token')
      }
    });
    return () => unsubscribed;
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    googleLogin,
    logOut,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
