"use client";

import {
  createContext,
  useEffect,
  useState,
} from "react";

import api from "@/services/api";




// create context
export const AuthContext =
  createContext();





export default function AuthProvider({
  children,
}) {

  // ===============================
  // STATES
  // ===============================
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);







  // ===============================
  // FETCH LOGGED IN USER
  // ===============================
  const fetchUser = async () => {

    try {

      const res = await api.get(
        "/auth/me"
      );




      // set user
      setUser(res.data.user);

    } catch (error) {

      setUser(null);

    } finally {

      setLoading(false);

    }

  };








  // ===============================
  // INITIAL LOAD
  // ===============================
  useEffect(() => {

    fetchUser();

  }, []);








  // ===============================
  // LOGOUT
  // ===============================
  const logout = async () => {

    try {

      await api.post(
        "/auth/logout"
      );

      setUser(null);

    } catch (error) {

      console.log(error);

    }

  };








  // ===============================
  // CONTEXT VALUE
  // ===============================
  const authInfo = {
    user,
    setUser,

    loading,

    fetchUser,

    logout,
  };








  return (

    <AuthContext.Provider value={authInfo}>

      {children}

    </AuthContext.Provider>

  );

}
