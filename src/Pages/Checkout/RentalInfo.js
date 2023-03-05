import DateTimeLocal from "../../Components/FormControls/DateTimeLocal";
import DropDown from "../../Components/FormControls/DropDown";

export default function RentalInfo({ className, callBack }) {
  const LOCATIONS = [
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
      className={`${className} grid lg:grid-cols-2 sm:p-8 p-6 bg-white gap-6 rounded-xl`}
    >
      <div className="heading lg:col-span-2">
        <h1 className="text-dark text-xl font-bold">Rental Info</h1>
        <p className="text-secondary-300 mt-1">Please enter your rental info</p>
      </div>
      <h2 className="lg:col-span-2 text-md font-semibold ">Pick-Up</h2>
      <div>
        <p className="font-semibold text-dark mb-2">Location</p>
        <DropDown
          placeholder="Pick-Up Location"
          options={LOCATIONS}
          onSelect={(opt) => {
            callBack("pickupLocation", opt);
          }}
        />
      </div>
      <div>
        <p className="font-semibold text-dark mb-2">Date & Time</p>
        <DateTimeLocal
          date={new Date()}
          onChange={(e) => {
            callBack("pickupTime", e.target.value);
          }}
        />
      </div>
      <h2 className="lg:col-span-2 text-md font-semibold mt-4">Drop-Off</h2>
      <div>
        <p className="font-semibold text-dark mb-2">Location</p>
        <DropDown
          placeholder="Drop-Off Location"
          options={LOCATIONS}
          onSelect={(opt) => {
            callBack("dropoffLocation", opt);
          }}
        />
      </div>
      <div>
        <p className="font-semibold text-dark mb-2">Date & Time</p>
        <DateTimeLocal
          date={new Date(new Date().setDate(new Date().getDate() + 1))}
          onChange={(e) => {
            callBack("dropoffTime", e.target.value);
          }}
        />
      </div>
    </div>
  );
}
