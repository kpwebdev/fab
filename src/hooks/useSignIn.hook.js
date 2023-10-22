import { useCallback, useEffect, useState } from "react";
import { signInWithEmail } from "../utils/firebase/firebase.util";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useSignIn = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const signInFunc = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);
      const newData = await signInWithEmail(email, password);
      toast.success("Successfully Logged In.");
      navigate("/nfc/dashboard/my-profile/general");
      setData(newData);
    } catch (error) {
      setIsLoading(false);
      setError(error);
      toast.error(error.message);
    }
  };
  return { signInFunc, isLoading, data, error };
};
