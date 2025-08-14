import { useSelector, useDispatch } from "react-redux";
import {
  selectIsLoggedIn,
  selectRole,
  selectAccessToken,
  setRole,
  setAccessToken,
  setRefreshToken,
  login,
  logout,
} from "@/features/authSlice/authSlice";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const isLoggedIn = useSelector(selectIsLoggedIn);
  const role = useSelector(selectRole);
  const accessToken = useSelector(selectAccessToken);

  const loginUser = (userData) => {
    dispatch(login(userData));
  };

  const logoutUser = () => {
    dispatch(logout());
    router.push("/auth/login");
  };

  const updateTokens = ({ accessToken, refreshToken }) => {
    if (accessToken) dispatch(setAccessToken(accessToken));
    if (refreshToken) dispatch(setRefreshToken(refreshToken));
  };

  const updateRole = (newRole) => {
    dispatch(setRole(newRole));
  };

  return {
    // State
    isLoggedIn,
    role,
    accessToken,

    // Actions
    login: loginUser,
    logout: logoutUser,
    updateTokens,
    updateRole,

    // Checks
    isAdmin: role === "ADMIN",
    isSeller: role === "SELLER",
    isUser: role === "USER",
  };
};

export default useAuth;
