"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import useAuth from "@/hooks/useAuth";

export default function PrivateRoute({ children }) {

  const router = useRouter();

  const pathname = usePathname();

  const { user, loading } = useAuth();



  // ===============================
  // REDIRECT IF NOT LOGGED IN
  // ===============================
  useEffect(() => {

    if (!loading && !user) {

      router.push(`/login?redirect=${pathname}`);

    }

  }, [user, loading, router, pathname]);





  // ===============================
  // LOADING STATE
  // ===============================
  if (loading) {

    return (

      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-[#0f172a] transition-colors duration-300">

        <div className="flex flex-col items-center gap-5">

          <div className="w-16 h-16 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>

          <p className="text-gray-600 dark:text-gray-300 text-lg font-medium">
            Checking Authentication...
          </p>

        </div>

      </div>

    );

  }





  // ===============================
  // BLOCK UNAUTHORIZED USER
  // ===============================
  if (!user) {

    return null;

  }





  // ===============================
  // ALLOW ACCESS
  // ===============================
  return children;

}
..