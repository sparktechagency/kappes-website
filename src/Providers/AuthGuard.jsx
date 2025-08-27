"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import useAuth from "@/hooks/useAuth";
import useToast from "@/hooks/useShowToast";
import { Button } from "@/components/ui/button";

export const AuthGuard = ({ children }) => {
  const { isLoggedIn } = useAuth();
  const router = useRouter();
  const { showError } = useToast();
  const [hasShownError, setHasShownError] = useState(false);

  useEffect(() => {
    // Reset error state when login status changes
    setHasShownError(false);
  }, [isLoggedIn]);

  useEffect(() => {
    // Only show error once when not logged in
    if (!isLoggedIn && !hasShownError) {
      showError("Please login to access this page");
      setHasShownError(true);

      const timeoutId = setTimeout(() => {
        router.replace("/auth/login");
      }, 3000);

      // Cleanup the timeout to prevent memory leaks
      return () => clearTimeout(timeoutId);
    }
  }, [isLoggedIn, router, showError, hasShownError]);

  // Render children with blur effect if not logged in
  return isLoggedIn ? (
    children
  ) : (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl text-center opacity-90 space-y-4">
        <p className="text-red-600 font-semibold mb-4">Access Denied</p>
        <p className="text-gray-700">Please log in to access this page</p>
        <Button
          className="bg-kappes hover:bg-red-800 text-white"
          onClick={() => router.replace("/auth/login")}
        >
          Login
        </Button>
      </div>
    </div>
  );
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
