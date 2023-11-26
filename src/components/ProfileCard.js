// ProfileCard.js
import profileImage from "../images/dummy-profile-img.png";
import editIcon from "../images/icons/edit-icon.svg";

export const ProfileCard = () => {
  return (
    <div className="bg-white flex flex-col">
      {/* Sub-Section Heading */}
      <div className="bg-custom-grey-200 rounded-t flex justify-between p-4">
        <h1 className="text-custom-grey-900 text-[16px] font-semibold">
          My Profile
        </h1>
        <a href="#">
          <img
            className="object-contain w-18 h-18"
            src={editIcon}
            alt="Edit My Profile"
          />
        </a>
      </div>
      {/* Profile Content */}
      <div className="shadow rounded-b p-4 lg:p-8 flex flex-col lg:w-1200">
        {/* Profile Card Top Section */}
        <div className="flex flex-row">
          {/* Profile Image */}
          <div className="lg:flex-shrink-0 flex justify-center items-start">
            <div className="rounded-full border-2 border-custom-grey-200 p-1.5 w-24 h-24">
              {/* Adjusted width and height */}
              <img
                className="object-cover w-full h-full rounded-full"
                src={profileImage}
                alt="Profile Img"
              />
            </div>
          </div>

          {/* Profile Description */}
          <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col justify-between">
            <div className="text-lg leading-6 font-medium space-y-1">
              <h3 className="text-custom-grey-800 mb-4 text-xl">
                Divya Chatterjee
              </h3>
              <h4 className="text-custom-grey-300 text-xs">Designation</h4>
              <p className="text-custom-grey-800 text-sm font-light">
                Assistant Manager - HR
              </p>
              <h4 className="text-custom-grey-300 text-xs mt-3">
                Company Name
              </h4>
              <p className="text-custom-grey-800 text-sm font-light">
                XXX Company Name
              </p>
            </div>
          </div>
        </div>

        {/* Profile Card Top Section */}
        <div className="flex-col">
          <div className="text-lg mt-6">
            <p className="text-custom-grey-300 text-xs">About Me</p>
            <p className="mt-2 text-custom-grey-800 text-sm font-light">
              Microsoft enables digital transformation for the era of an
              intelligent cloud and an intelligent edge. Its mission is to
              empower every person and every organization on the planet to
              achieve more. Microsoft set up its India operations in 1990.
              Microsoft in India offers its global cloud services from local
              data centers to accelerate digital transformation across Indian
              start-ups, businesses, and government agencies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
