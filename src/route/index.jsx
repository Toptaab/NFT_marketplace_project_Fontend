import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Container from "../layout/Container";
import SettingPage from "../pages/SettingPage";
import RedirectRoute from "./protectRoute/RedirectRoute";
import ProfilePage from "../pages/ProfilePage";
import CreatePage from "../pages/CreatePage";
import ExplorePage from "../pages/ExplorePage";
import AssetPage from "../pages/AssetPage";
import CollectionPage from "../pages/CollectionPage";
import ProtectRoute from "./protectRoute/ProtectRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "",
        element: (
          <RedirectRoute>
            <LoginPage />
          </RedirectRoute>
        ),
      },
      {
        path: "/login",
        element: (
          <RedirectRoute>
            <LoginPage />
          </RedirectRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <RedirectRoute>
            <RegisterPage />
          </RedirectRoute>
        ),
      },
      {
        path: "/homepage",
        element: <HomePage />,
      },
      {
        path: "/explore",
        element: <ExplorePage />,
      },
      {
        path: "/create",
        element: <CreatePage />,
      },
      {
        path: "/profile/:userId",
        element: <ProfilePage />,
      },
      {
        path: "/setting",
        element: (
          <ProtectRoute>
            <SettingPage />
          </ProtectRoute>
        ),
      },
      {
        path: "/asset/:assetId",
        element: <AssetPage />,
      },
      {
        path: "/collection/:collectionId",
        element: <CollectionPage />,
      },
      {
        path: "*",
        element: <Navigate to="/login" />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
