import { toast } from "sonner";
const useToast = () => {
  return {
    showSuccess: (message, options = {}) => {
      toast.success(message, {
        duration: 3000,
        position: "top-right",
        description: options.description,
      });
    },
    showError: (message, options = {}) => {
      toast.error(message, {
        duration: 3000,
        position: "top-right",
        description: options.description,
      });
    },
  };
};

export default useToast;
