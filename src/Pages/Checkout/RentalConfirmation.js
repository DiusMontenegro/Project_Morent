import { BuAccent } from "../../Components/Buttons/Buttons";
import CheckBox from "../../Components/FormControls/CheckBox";

export default function RentalConfirmation({ className, callBack }) {
  return (
    <div className={`${className} grid  sm:p-8 p-6 bg-white gap-4 rounded-xl`}>
      <div className="heading mb-2">
        <h1 className="text-dark text-xl font-bold">Confirmation</h1>
        <p className="text-secondary-300 mt-1">Your Rental is Almost Ready</p>
      </div>
      <div className="flex items-center bg-gray-100 font-semibold p-3 rounded-md text-sm md:text-base gap-3">
        <CheckBox />
        <p>I agree with receiving newsletter and marketing emails.</p>
      </div>
      <div className="flex items-center bg-gray-100 font-semibold p-3 rounded-md text-sm md:text-base gap-3">
        <CheckBox />
        <p>
          I agree with Morent{" "}
          <span className="underline font-bold">Terms and Conditions</span> and {" "}
          <span className="underline font-bold">Privacy Policy</span>
        </p>
      </div>
      <BuAccent text="Rent Now" className=" mt-2 py-4 px-6 rounded-lg mr-auto"/>
    </div>
  );
}
