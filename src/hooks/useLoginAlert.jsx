import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { CheckCircle, XCircle, AlertCircle, Info } from "lucide-react";

const useLoginAlert = ({
  message,
  type = "info",
  title,
  onClose,
  open = false,
}) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="h-6 w-6 text-green-600" />;
      case "error":
        return <XCircle className="h-6 w-6 text-red-600" />;
      case "warning":
        return <AlertCircle className="h-6 w-6 text-yellow-600" />;
      default:
        return <Info className="h-6 w-6 text-blue-600" />;
    }
  };

  const getDefaultTitle = () => {
    switch (type) {
      case "success":
        return "Success";
      case "error":
        return "Error";
      case "warning":
        return "Warning";
      default:
        return "Information";
    }
  };

  const getActionButtonStyle = () => {
    switch (type) {
      case "success":
        return "bg-green-600 hover:bg-green-700 text-white";
      case "error":
        return "bg-red-600 hover:bg-red-700 text-white";
      case "warning":
        return "bg-yellow-600 hover:bg-yellow-700 text-white";
      default:
        return "bg-blue-600 hover:bg-blue-700 text-white";
    }
  };

  return (
    <AlertDialog open={open} onOpenChange={onClose}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <div className="flex items-center gap-3">
            {getIcon()}
            <AlertDialogTitle className="text-lg font-semibold">
              {title || getDefaultTitle()}
            </AlertDialogTitle>
          </div>
          <AlertDialogDescription className="text-base pt-2">
            {message}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            className={getActionButtonStyle()}
            onClick={onClose}
          >
            OK
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

// Hook for managing alert state
const useAlertDialog = () => {
  const [alertState, setAlertState] = useState({
    open: false,
    message: "",
    type: "info",
    title: "",
  });

  const showAlert = ({ message, type = "info", title }) => {
    setAlertState({
      open: true,
      message,
      type,
      title,
    });
  };

  const closeAlert = () => {
    setAlertState((prev) => ({ ...prev, open: false }));
  };

  const AlertComponent = () => {
    return useLoginAlert({
      ...alertState,
      onClose: closeAlert,
    });
  };

  return {
    showAlert,
    closeAlert,
    AlertComponent,
    isOpen: alertState.open,
  };
};

// Example usage component
const LoginAlertExample = () => {
  const { showAlert, AlertComponent } = useAlertDialog();

  const handleSuccessAlert = () => {
    showAlert({
      message: "Login successful! Welcome back to your dashboard.",
      type: "success",
      title: "Login Successful",
    });
  };

  const handleErrorAlert = () => {
    showAlert({
      message:
        "Invalid email or password. Please check your credentials and try again.",
      type: "error",
      title: "Login Failed",
    });
  };

  const handleWarningAlert = () => {
    showAlert({
      message: "Your session will expire in 5 minutes. Please save your work.",
      type: "warning",
      title: "Session Warning",
    });
  };

  const handleInfoAlert = () => {
    showAlert({
      message: "Please enter your email and password to continue.",
      type: "info",
      title: "Login Required",
    });
  };

  return (
    <div className="space-y-4 p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Alert Dialog Examples</h2>

      <div className="space-y-3">
        <button
          onClick={handleSuccessAlert}
          className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
        >
          Show Success Alert
        </button>

        <button
          onClick={handleErrorAlert}
          className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Show Error Alert
        </button>

        <button
          onClick={handleWarningAlert}
          className="w-full px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors"
        >
          Show Warning Alert
        </button>

        <button
          onClick={handleInfoAlert}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Show Info Alert
        </button>
      </div>

      <AlertComponent />
    </div>
  );
};

export default useLoginAlert;
export { useAlertDialog, LoginAlertExample };
