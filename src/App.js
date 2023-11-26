import React from "react";
import "./App.css";
import { BackToMyAccount } from "./components/BackToMyAccount";
import { ProfileDetails } from "./components/ProfileDetails";

function App() {
  return (
    <div className="container mx-auto p-0 bg-white w-[95%] lg:w-[100%] shadow md:w-2xl">
      {/* Back to My Account Component */}
      <BackToMyAccount />
      {/* Profile Details Component */}
      <ProfileDetails />
    </div>
  );
}

export default App;
