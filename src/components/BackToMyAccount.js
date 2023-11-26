import backToIcon from "../images/icons/go-back-left-arrow.svg";

export const BackToMyAccount = () => {
  return (
    <div className="flex justify-start md:flex-row p-3 md:p-6 border-b-2 mb-1 md:mb-3 border-custom-grey-200">
      <a href="#">
        <img
          className="object-contain w-18 h-18 mr-4"
          src={backToIcon}
          alt="Back to My Account Section"
        />
      </a>
      <h1 className="text-lg leading-6 font-medium text-custom-grey-900">
        My Account
      </h1>
    </div>
  );
};
