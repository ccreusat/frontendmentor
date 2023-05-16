import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ThemeProvider from "./context/ThemeContext";
import { StrictMode } from "react";

import { Layout } from "./layouts/Layout";
import Home, { loader as homeLoader, action as homeAction } from "./pages/home";
import Detail, { loader as detailLoader } from "./pages/detail";

import "./reset.css";
import "./utilities.css";
import "./style.css";

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const container = document.getElementById("root");
const root = createRoot(container!);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader(queryClient),
        action: homeAction,
      },
      {
        path: ":id",
        element: <Detail />,
        loader: detailLoader(queryClient),
      },
    ],
  },
]);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
