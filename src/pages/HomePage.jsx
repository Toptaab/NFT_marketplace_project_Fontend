import React from "react";
import HomeContainer from "../components/homeFeature/HomeContainer";
import HomeContextProvider from "../components/homeFeature/context/HomeContext";

function HomePage() {
  return (
    <div className="w-dvw">
      <HomeContextProvider>
        <HomeContainer />
      </HomeContextProvider>
    </div>
  );
}

export default HomePage;
