import { useSelector, useDispatch } from "react-redux";
import { useCallback, useMemo } from "react";
import {
  selectUser,
  selectUserProfile,
  selectUserName,
  selectUserEmail,
  selectUserImage,
  setUser,
  clearUser,
} from "@/features/userSlice/userSlice";
import { useGetUserProfileQuery } from "@/redux/userprofileApi/userprofileApi";

const useUser = () => {
  const dispatch = useDispatch();

  // Get user data from Redux store
  const user = useSelector(selectUser);
  const userProfile = useSelector(selectUserProfile);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  const userImage = useSelector(selectUserImage);

  // Get user profile from API
  const {
    data: profileData,
    isLoading,
    error,
    refetch,
  } = useGetUserProfileQuery();

  const updateUserProfile = useCallback(
    (userData) => {
      // Only update if data is actually different
      try {
        if (JSON.stringify(userData) !== JSON.stringify(user)) {
          dispatch(setUser(userData));
        }
      } catch {
        // Fallback if stringify fails
        dispatch(setUser(userData));
      }
    },
    [dispatch, user]
  );

  const clearUserProfile = useCallback(() => {
    dispatch(clearUser());
  }, [dispatch]);

  return {
    // State
    user,
    userProfile,
    userName,
    userEmail,
    userImage,

    // API Data
    profileData,
    isLoading,
    error,
    refetch,

    // Actions
    updateUserProfile,
    clearUserProfile,
  };
};

export default useUser;
