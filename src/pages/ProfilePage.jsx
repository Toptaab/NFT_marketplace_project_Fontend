import React from "react";
import ProfileContainer from "../components/profileFeature/ProfileContainer";
import ProfileContextProvider from "../components/profileFeature/context/ProfileContext";
import CreateCollectionContextProvider from "../components/createCollectionFeature/contexts/CreateCollectionContext";

function ProfilePage() {
  return (
    <div className="w-dvw">
      <CreateCollectionContextProvider>
        <ProfileContextProvider>
          <ProfileContainer />
        </ProfileContextProvider>
      </CreateCollectionContextProvider>
    </div>
  );
}

export default ProfilePage;
