import { useState } from "react";
import getIcon from "../../Helpers/IconsHelper";
import "./CheckBox.css";
export default function CheckBox(props) {
    const CheckedIcon = getIcon("check");
    const [checked,setChecked] = useState(false);
  return (
    <label className="block relative cursor-pointer">
      <input  type="checkbox" checked={checked} onChange={(e)=>{setChecked(!checked)}} className="checkbox absolute opacity-0 cursor-pointer" />
      <span className="checkmark block h-5 w-5 rounded  border border-secondary-300">
        <CheckedIcon className="checkmark__icon max-h-full" fill="white"></CheckedIcon>
      </span>
    </label>
  );
}
