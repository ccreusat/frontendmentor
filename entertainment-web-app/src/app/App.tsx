// Imports
import { Toaster } from "react-hot-toast";
// RRV6
import { Routes, Route } from "react-router-dom";
// Firebase
import { getCollection } from "../services/firebase";
// Components
import { Authentication, MainLayout } from "../layouts";
import { EmptyScreen, List, NoMatch } from "../components";
// Routes
import {
  RequireAuth,
  Bookmarked,
  Home,
  SignIn,
  SignUp,
  SignOut,
} from "../routes";
// Main CSS
import "./App.css";
// Context
import { useDispatchContext, useStateContext } from "../context/StateContext";
// Hooks
import { useEffect } from "react";

export default function App() {
  // STATE CONTEXT
  const { collectionState, authenticationState } = useStateContext();
  const { dispatchCollection } = useDispatchContext();
  const { collection, isLoading, error } = collectionState;

  useEffect(() => {
    (async () => {
      await getCollection(
        collection => {
          dispatchCollection({ type: "FETCH", payload: collection });
        },
        error => {
          dispatchCollection({
            type: "FETCH_ERROR",
            payload: { error: error },
          });
        }
      );
    })();
  }, []);

  if (isLoading) {
    return (
      <main className="flex-column-h100">
        <EmptyScreen text="Loading..." />
      </main>
    );
  }

  if (error && !isLoading) {
    return (
      <main className="flex-column-h100">
        <EmptyScreen text="Something went wrong..." />
      </main>
    );
  }

  return (
    <>
      <Routes>
        <Route element={<Authentication />}>
          <Route path="login" element={<SignIn />}></Route>
          <Route path="register" element={<SignUp />}></Route>
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />}></Route>
          <Route
            path="movies"
            element={<List title="Movies" collection={collection} />}
          ></Route>
          <Route
            path="series"
            element={<List title="TV Series" collection={collection} />}
          ></Route>
          <Route
            path="bookmarked"
            element={
              <RequireAuth>
                <Bookmarked />
              </RequireAuth>
            }
          ></Route>
        </Route>
        <Route path="signout" element={<SignOut />}></Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Toaster />
    </>
  );
}
