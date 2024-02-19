import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import CreateCollectionModal from "../components/createCollectionFeature/CreateCollectionModal";

export default function Container() {
  return (
    <>
      <Navbar />
      {/* <CreateCollectionModal />  */}
      <Outlet />
    </>
  );
}
