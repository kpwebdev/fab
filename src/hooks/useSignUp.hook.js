import { useCallback, useEffect, useState } from "react";
import { signUp } from "../utils/firebase/firebase.util";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const signUpFunc = async (email, password) => {
    try {
      setIsLoading(true);
      setError(null);
      const newData = await signUp(email, password);
      toast.success("Successfully registered.");
      navigate("/nfc/dashboard/my-profile/general");
      setData(newData);
    } catch (error) {
      setError(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return { signUpFunc, isLoading, data, error };
};
