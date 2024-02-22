import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import CreateCollectionModal from "../components/createCollectionFeature/CreateCollectionModal";
import AppContextProvider from "../contexts/AppContext";

export default function Container() {
  return (
    <>
      <AppContextProvider>
        <Navbar />
      </AppContextProvider>
      {/* <CreateCollectionModal />  */}
      <Outlet />
    </>
  );
}
