import moment from "moment";
import { useState } from "react";

export default function DateTimeLocal({ className,date,onChange }) {
  return (
    <div className="bg-gray-100 py-3 px-4 rounded-lg">
      <input
        className={`${className} bg-gray-100  border-none w-full text-gray-400 outline-none`}
        type="datetime-local"
        defaultValue={moment(date).format().slice(0,16)}
        onChange={onChange}
      />
    </div>
  );
}
