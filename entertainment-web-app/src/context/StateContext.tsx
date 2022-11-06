// React
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
// Firebase
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../services/firebase";
// Reducers
import { appReducer, initialCollectionState } from "../reducers/AppReducer";
import {
  authenticationReducer,
  initialStateAuthenticationState,
} from "../reducers/AuthenticationReducer";
// Hooks
import { useLocalStorage } from "../hooks/useLocalStorage";
// Toaster
import toast from "react-hot-toast";

interface ContextProps {
  collectionState: any;
  authenticationState: any;
  user: any;
  query: string;
  setUser: React.Dispatch<React.SetStateAction<any>>;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

// Create Contexts
const Context = createContext<ContextProps>(null!);
const Dispatch = createContext<any>(null);

export function StateContext({ children }: any) {
  // App Reducer
  const [collectionState, dispatchCollection] = useReducer(
    appReducer,
    initialCollectionState
  );
  // UserReducer
  const [authenticationState, dispatchUser] = useReducer(
    authenticationReducer,
    initialStateAuthenticationState
  );
  const [query, setQuery] = useState<string>("");
  const [user, setUser] = useLocalStorage("user", null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, currentUser => {
      if (!currentUser) {
        setUser(null);
        return;
      }
      dispatchUser({ type: "IS_LOGGED", payload: { id: currentUser?.uid } });
      setUser(currentUser?.uid);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (authenticationState === initialStateAuthenticationState) return;
    if (!authenticationState.message) return;

    if (authenticationState.error) {
      toast.error(`${authenticationState.message}`);
    } else {
      toast.success(`${authenticationState.message}`);
    }
  }, [authenticationState]);

  const store = {
    collectionState,
    authenticationState,
    query,
    setQuery,
    user,
    setUser,
  };

  const dispatch = { dispatchCollection, dispatchUser };

  return (
    <Context.Provider value={store}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </Context.Provider>
  );
}

export const useStateContext = () => useContext(Context);
export const useDispatchContext = () => useContext(Dispatch);
