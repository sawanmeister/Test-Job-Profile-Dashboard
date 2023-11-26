import { ProfileCard } from "./ProfileCard";
import { AccountSettings } from "./AccountSettings";
import { ApplicationSettings } from "./ApplicationSettings";

export const ProfileDetails = () => {
  return (
    <div className="bg-white flex flex-col py-3 px-0 md:px-6">
      {/* My Profile */}
      <div className="flex flex-col md:flex-row">
        <div className="lg:w-1/1">
          <ProfileCard />
        </div>
      </div>
      <div className="flex flex-col justify-content-start md:flex-row">
        {/* My Account Settings */}
        <div className="lg:w-1/2 md:w-1/1 lg:mr-2 my-4">
          <AccountSettings />
        </div>
        {/* Application Settings */}
        <div className="lg:w-1/2 md:w-1/1 lg:ml-2 my-4">
          <ApplicationSettings />
        </div>
      </div>
    </div>
  );
};
