"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";

export const AuthGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      // Redirect to login page if not logged in
      router.replace("/auth/login");
    }
  }, [isLoggedIn, router]);

  // Render children only if logged in
  return isLoggedIn ? children : null;
};

// Higher-order component for route protection
export const withAuth = (WrappedComponent) => {
  return function ProtectedRoute(props) {
    return (
      <AuthGuard>
        <WrappedComponent {...props} />
      </AuthGuard>
    );
  };
};
