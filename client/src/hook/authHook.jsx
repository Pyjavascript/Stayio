import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import {onAuthStateChanged } from "firebase/auth";

export function useAuth() {
  const [user, setUser] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user); 
      setLoading(false); 
    });

    return unsubscribe;
  }, []);

  return { user, loading };
}
