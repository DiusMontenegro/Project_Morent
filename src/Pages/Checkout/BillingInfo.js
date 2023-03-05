import TextBox from "../../Components/FormControls/TextBox";

export default function BillingInfo({ className, callBack }) {
  const isPhoneNumber = (text) => {
    let pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/g;
    return pattern.test(text);
  };
  return (
    <div
      className={`${className} grid lg:grid-cols-2 sm:p-8 p-6 bg-white gap-6 rounded-xl`}
    >
      <div className="heading lg:col-span-2">
        <h1 className="text-dark text-xl font-bold">Billing Info</h1>
        <p className="text-secondary-300 mt-1">
          Please enter your billing info
        </p>
      </div>
      <div>
        <p className="font-semibold text-dark mb-2">Name</p>
        <TextBox
          placeholder="Your Name"
          onChange={(e) => {
            callBack("name", e.target.value);
          }}
        />
      </div>
      <div>
        <p className="font-semibold text-dark mb-2">Phone Number</p>
        <TextBox
          placeholder="Your Phone Number"
          onChange={(e) => {
            callBack("phone", e.target.value);
          }}
          isValidable={true}
          validationHandler={isPhoneNumber}
          errorMsg = "Please Enter a Valid Phone Number"
        />
      </div>
      <div>
        <p className="font-semibold text-dark mb-2">Address</p>
        <TextBox
          placeholder="Your Address"
          onChange={(e) => {
            callBack("address", e.target.value);
          }}
        />
      </div>
      <div>
        <p className="font-semibold text-dark mb-2">Town/City</p>
        <TextBox
          placeholder="Town or City"
          onChange={(e) => {
            callBack("city", e.target.value);
          }}
        />
      </div>
    </div>
  );
}
