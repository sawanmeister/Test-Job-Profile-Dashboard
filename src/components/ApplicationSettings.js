import editIcon from "../images/icons/edit-icon.svg";

export const ApplicationSettings = () => {
  return (
    <div className="bg-white flex flex-col">
      {/* Sub-Section Heading */}
      <div className="bg-custom-grey-200 rounded flex justify-between sm:max-w-4xl p-4">
        <h1 className="text-custom-grey-900 text-[16px] font-semibold">
          Application Settings
        </h1>
        <a href="#">
          <img
            className="object-contain w-18 h-18"
            src={editIcon}
            alt="Edit My Profile"
          />
        </a>
      </div>
      <div className="bg-white shadow rounded flex sm:max-w-4xl p-8 h-[182px]">
        <div className="get-notifications">
          {/* 1st */}
          <div>
            <h4 className="text-custom-grey-300 text-xs">
              Receive job applications via
            </h4>
          </div>
          {/* 2nd */}
          <div className="radio-parent text-sm text-custom-grey-900 py-[14px]">
            <div>
              <input
                type="radio"
                id="option1"
                name="radio-group"
                defaultChecked
                className="radio-input"
              />
              <label htmlFor="option1">Only on my dashboard</label>
            </div>
            <div className="pt-[10px]">
              <input
                type="radio"
                id="option2"
                name="radio-group"
                className="radio-input"
              />
              <label htmlFor="option2">Email and on my dashboard</label>
            </div>
          </div>
          {/* 3rd */}
          <div>
            <h4 className="text-custom-grey-300 text-xs">
              *Please note, this setting will not impact your old job postings
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};
