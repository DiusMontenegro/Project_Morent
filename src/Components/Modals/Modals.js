import "./Modals.css";
import TextField from "@mui/material/TextField";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { useState } from "react";
import { StaticTimePicker } from "@mui/x-date-pickers";
import { BuMinimal, BuPrimary, BuSecondary } from "../Buttons/Buttons";
import getIcon from "../../Helpers/IconsHelper";
import moment from "moment";

export function DatePickeModal(props) {
  const [value, setValue] = useState(new Date());
  const {visible , onSelect , onCancel} = props;
  return (
    <div className="modal" data-visible={visible}>
      <div className="modal__backdrop" onClick={onCancel}></div>
      <div className="modal__view flex-col align-end">
        <BuMinimal onClick={onCancel} className="bu-round bu-med" RightIcon={getIcon("close")}/>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <StaticDatePicker
          componentsProps={{
            actionBar: {
              actions: [],
            },
          }}
            disablePast={true}
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <div className="modal__view__actions flex-row gap-lg justify-sp-between">
          <BuSecondary onClick={onCancel} className="bu-med" text="Cancel"/>
          <BuPrimary   onClick={() => {onSelect(moment(value).format("YYYY MMMM DD"))}} className="bu-med" text="Select"/>
        </div>
      </div>
    </div>
  );
}

export function TimePickeModal(props) {
  const [value, setValue] = useState(new Date());
  const {visible , onSelect , onCancel} = props;
  return (
    <div className="modal" data-visible={visible}>
      <div className="modal__backdrop" onClick={onCancel}></div>
      <div className="modal__view flex-col align-end">
        <BuMinimal onClick={onCancel} className="bu-round bu-med" RightIcon={getIcon("close")}/>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <StaticTimePicker
            displayStaticWrapperAs="mobile"
            value={value}
            componentsProps={{
              actionBar: {
                actions: [],
              },
            }}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <div className="modal__view__actions flex-row gap-lg justify-sp-between">
          <BuSecondary onClick={onCancel} className="bu-med" text="Cancel"/>
          <BuPrimary   onClick={() => {onSelect(value.format("hh:mm a"))}} className="bu-med" text="Select"/>
        </div>
      </div>
    </div>
  );
}
