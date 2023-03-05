import { useState } from "react";
import getIcon from "../../Helpers/IconsHelper";
import "./DropDown.css";
export default function DropDown({ placeholder, options, onSelect }) {
  const CHEVRON_DOWN = getIcon("chevron_down");

  const [option, setOption] = useState({
    key: -1,
    value: placeholder,
  });

  const [visible, setVisibility] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => {
          setVisibility(true);
        }}
        className="bg-gray-100 hover:bg-zinc-100 active:bg-zinc-200 py-3 px-4 rounded-lg border-none flex justify-between items-center w-full"
      >
        <span className=" text-gray-400">{option.value}</span>
        <CHEVRON_DOWN stroke="#9ca3af" fill="#9ca3af" className="w-3 h-2" />
      </button>
      <DropdownList
        options={options}
        callBack={(opt) => {
          setOption(opt);
          onSelect(opt)
          setVisibility(false);
        }}
        data-visible={visible}
      />
    </div>
  );
}

function DropdownList(props) {
  return (
    <ul
      className="dropdown flex-col gap-sm align-start text-start w-full"
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
