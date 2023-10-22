import { useCallback, useEffect, useState } from "react";
import { signInWithGoogle } from "../utils/firebase/firebase.util";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useGoogleSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const googleSignInFunc = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);
      const newData = await signInWithGoogle();
      toast.success("Successfully registered with google.");
      navigate("/nfc/dashboard/my-profile/general");
      setData(newData);
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { googleSignInFunc, isLoading, data, error };
};
