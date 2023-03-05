import "./HeroForm.css";
import { useState } from "react";
import { BuAccent, BuMinimal, BuSecondary } from "../Buttons/Buttons";
import getIcon from "../../Helpers/IconsHelper";

//todo: write cleaner code
export default function HeroForm(props) {
  const [formData, setFormData] = useState({
    selectedOption: {
      key: -1,
      value: "eg. Sport",
    },
  });
  const setSelectedOption = (opt) => {
    setFormData({ ...formData, selectedOption: opt });
  };
  const dropdownOpts = [
    { key: 0, value: "Sport" },
    { key: 1, value: "SUV" },
    { key: 2, value: "SEDAN" },
    { key: 3, value: "CUV" },
    { key: 4, value: "MICRO" },
    { key: 5, value: "HATCHBACK" },
    { key: 6, value: "ROADSTER" },
    { key: 7, value: "COUPE" },
  ];

  return (
    <div
      className={
        props.className +
        " rental-form drop-shadow-sm py-6 px-4 rounded-lg bg-white flex flex-row gap-4 flex-wrap justify-around items-end "
      }
    >
      <div className="flex flex-col gap-4 flex-1 w-full">
        <p className="text-dark font-semibold text-lg">Car Type</p>
        <Dropdown
          dropdownOpts={dropdownOpts}
          callBack={setSelectedOption}
          defaultOpt={formData.selectedOption}
        />
      </div>
      <div className="flex flex-col gap-4 flex-1 w-full">
        <p className="text-dark font-semibold text-lg">Location</p>
        <input
          type="text"
          className=" rounded-lg px-2 py-3 border border-secondary-200 min-w-[16rem] w-full"
          placeholder="eg. 221B Baker Street"
        />
      </div>
      <BuAccent text="Search" className="py-3 px-6 rounded-lg flex-1"></BuAccent>
    </div>
  );
}

function Dropdown({ dropdownOpts, callBack, defaultOpt }) {
  const [displayDropdown, setDisplayDropdown] = useState(false);
  const toggleDropdown = () => {
    setDisplayDropdown(!displayDropdown);
  };

  return (
    <div className="dropdown-parent relative ">
      <BuSecondary
        text={defaultOpt.value}
        className="form__control text-lg px-2 py-3 rounded-lg justify-between w-full"
        RightIcon={getIcon("chevron_down")}
        onClick={toggleDropdown}
      ></BuSecondary>
      <DropdownList
        options={dropdownOpts}
        data-visible={displayDropdown}
        callBack={(opt) => {
          callBack(opt);
          toggleDropdown();
        }}
      ></DropdownList>
    </div>
  );
}

function DropdownList(props) {
  return (
    <ul
      className="dropdown flex-col gap-sm align-start text-start max-w-full min-w-[8rem]"
      data-visible={props["data-visible"]}
    >
      {props.options.map((opt) => {
        return (
          <li
            className="dropdown__option p-3 m-auto"
            key={opt.key}
            onClick={() => {
              props.callBack(opt);
            }}
          >
            {opt.value}
          </li>
        );
      })}
    </ul>
  );
}
