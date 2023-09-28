import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { updateProfile } from 'firebase/auth';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  UserCredential,
  User as FirebaseAuthUser,
} from 'firebase/auth';

type AuthContextType = {
  signUp: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
  user: User | null;
  logIn: (email: string, password: string) => Promise<UserCredential>;
  logOut: () => Promise<void>;
};

interface User {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState<User | null>(null);

  async function signUp(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Promise<void> {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // Set the display name for the user
      await updateProfile(user, {
        displayName: `${firstName} ${lastName}`,
      });

      const newUser: User = {
        uid: user.uid,
        email: user.email || '',
        firstName: firstName,
        lastName: lastName,
      };

      setUser(newUser);
      console.log('Successful registration !');
    } catch (error) {
      console.error('Error signing up:', error);
      throw error; // Rethrow the error for handling at a higher level
    }
  }

  function logIn(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (currentUser: FirebaseAuthUser | null) => {
        if (currentUser) {
          const displayName = currentUser.displayName || '';
          const [firstName, lastName] = displayName.split(' ');

          setUser({
            uid: currentUser.uid,
            email: currentUser.email || '',
            firstName: firstName || '',
            lastName: lastName || '',
          });
        } else {
          setUser(null);
        }
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ signUp, user, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function UserAuth() {
  return useContext(AuthContext);
}
