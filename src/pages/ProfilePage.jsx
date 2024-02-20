import React from "react";
import ProfileContainer from "../components/profileFeature/ProfileContainer";
import ProfileContextProvider from "../components/profileFeature/context/ProfileContext";
import CollectionContextProvider from "../components/createCollectionFeature/contexts/CollectionContext";

function ProfilePage() {
  return (
    <div className="w-dvw">
      <CollectionContextProvider>
        <ProfileContextProvider>
          <ProfileContainer />
        </ProfileContextProvider>
      </CollectionContextProvider>
    </div>
  );
}

export default ProfilePage;
