import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "@layouts/MainLayout/MainLayout";
import { SimpleLayout } from "@layouts/SimpleLayout/SimpleLayout";
import { Home } from "@pages/Home/Home";
import { Login } from "@pages/Login/Login";
import { Gallery } from "@pages/Gallery/Gallery";
import { ProtectedRoute } from "@components/ProtectedRoute/ProtectedRoute";
import type { ReactNode } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
  },
  {
    path: "gallery",
    element: (
      <ProtectedRoute>
        <MainLayout>
          <Gallery />
        </MainLayout>
      </ProtectedRoute>
    ),
  },
  {
    path: "login",
    element: (
      <SimpleLayout>
        <Login />
      </SimpleLayout>
    ),
  },
]);

export const Router = (): ReactNode => {
  return <RouterProvider router={router} />;
};
