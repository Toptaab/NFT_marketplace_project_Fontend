import React from "react";
import ExploreContatiner from "../components/exploreFeature/ExploreContatiner";
import ExploreContextProvider from "../components/exploreFeature/context/ExploreContext";

function ExplorePage() {
  return (
    <div className="w-dvw">
      <ExploreContextProvider>
        <ExploreContatiner />
      </ExploreContextProvider>
    </div>
  );
}

export default ExplorePage;
