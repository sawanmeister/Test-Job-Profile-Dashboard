import editIcon from "../images/icons/edit-icon.svg";

export const AccountSettings = () => {
  return (
    <div className="bg-white flex flex-col">
      {/* Sub-Section Heading */}
      <div className="bg-custom-grey-200 rounded flex justify-between sm:max-w-4xl p-4">
        <h1 className="text-custom-grey-900 text-[16px] font-semibold">
          My Account Settings
        </h1>
        <a href="#">
          <img
            className="object-contain w-18 h-18"
            src={editIcon}
            alt="Edit My Profile"
          />
        </a>
      </div>
      <div className="bg-white shadow rounded grid grid-rows-2 grid-flow-col gap-10 sm:max-w-4xl p-8 h-[182px]">
        <div className="name-section">
          <h4 className="text-custom-grey-300 text-xs">Full Name *</h4>
          <p className="text-custom-grey-800 text-sm font-light">
            Divya Chatterjee
          </p>
        </div>
        <div className="phoneno-section">
          <h4 className="text-custom-grey-300 text-xs">
            Phone No / Landline *
          </h4>
          <p className="text-custom-grey-800 text-sm font-light">
            Divya Chatterjee
          </p>
        </div>
        <div className="designation-section">
          <h4 className="text-custom-grey-300 text-xs">Designation</h4>
          <p className="text-custom-grey-800 text-sm font-light">
            Account Manager
          </p>
        </div>
        <div className="">
          <p className="text-transparent text-sm">Transparent Text</p>
          <a href="#" className="text-sm font-bold text-custom-blue">
            Change Password
          </a>
        </div>
      </div>
    </div>
  );
};
