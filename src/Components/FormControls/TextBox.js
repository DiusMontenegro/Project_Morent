import { useState } from "react";

export default function TextBox({
  placeholder,
  className,
  id,
  onChange,
  isValidable,
  validationHandler,
  errorMsg,
  inputClassName
}) {
  const [isValid, setValid] = useState(true);

  return (
    <div className={` ${className} flex flex-col w-full`}>
      <input
        type="text"
        className={`${inputClassName} bg-gray-100 outline-none py-3 px-4 rounded-lg w-full ${
          isValid ? "border-none" : "border border-error-500 text-error-500"
        }`}
        placeholder={placeholder}
        id={id}
        onChange={(e) => {
          if (isValidable) {
            const v = validationHandler(e.target.value);
            setValid(v);
            if (v) {
              onChange(e);
            }
          } else {
            onChange(e);
          }
        }}
      ></input>
      {!isValid && (
        <span className="text-error-500">{errorMsg}</span>
      )}
    </div>
  );
}
