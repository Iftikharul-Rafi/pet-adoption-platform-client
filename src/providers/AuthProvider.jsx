"use client";

import { createContext, useEffect, useState } from "react";

import api from "@/services/api";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);



  // current logged in user fetch
  const fetchUser = async () => {

    try {

      const res = await api.get("/auth/me");

      setUser(res.data.user);

    } catch (error) {

      setUser(null);

    } finally {

      setLoading(false);

    }
  };



  // first load
  useEffect(() => {
    fetchUser();
  }, []);



  const authInfo = {
    user,
    setUser,
    loading,
    fetchUser,
  };



  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
}