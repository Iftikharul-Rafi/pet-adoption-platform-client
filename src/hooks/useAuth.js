"use client";

import { useContext } from "react";

import { AuthContext } from "@/providers/AuthProvider";




// ===============================
// CUSTOM AUTH HOOK
// ===============================
export default function useAuth() {

  const auth = useContext(AuthContext);

  return auth;

}