import { useEffect, useState } from "react";
import { Footer, NavbarTop } from "../../Components/Navigation/Navigation";
import { getCar } from "../../Helpers/CarsProvider";
import BillingInfo from "./BillingInfo";
import "./Checkout.css";
import PaymentMethod from "./PaymentMethod";
import RentalConfirmation from "./RentalConfirmation";
import RentalInfo from "./RentalInfo";
import RentalSummary from "./RentalSummary";

export default function Checkout() {
  const GTR = getCar(1);

  const [formState, setFormState] = useState({
    billing: {},
    rental: {},
    payment: {},
    confirmation: {},
  });

  function updateField(group, field, data) {
    // todo field check
    const newState = { ...formState };
    const newGroup = { ...newState[group] };
    newGroup[field] = data;
    newState[group] = newGroup;
    setFormState(newState);
  }

  useEffect(() => {}, [formState]);
  return (
    <>
      <NavbarTop />
      <div className="grid md:grid-cols-5 w-full max-w-6xl m-auto p-4 gap-4">
        <BillingInfo
          className="md:col-span-3 col-start-1 self-start"
          callBack={(field, value) => {
            updateField("billing", field, value);
          }}
        ></BillingInfo>
        <RentalInfo
          className="md:col-span-3 col-start-1 self-start"
          callBack={(field, value) => {
            updateField("rental", field, value);
          }}
        ></RentalInfo>
        <PaymentMethod
          className="md:col-span-3 col-start-1 self-start"
          callBack={(field, value) => {
            updateField("payment", field, value);
          }}
        />
        <RentalConfirmation
          className="md:col-span-3 col-start-1 self-start"
          callBack={(field, value) => {
            updateField("confirmation", field, value);
          }}
        />

        <RentalSummary
          car={GTR}
          className="md:col-span-2 row-span-2 self-start md:col-start-4 col-start-1 row-start-1"
        ></RentalSummary>
      </div>
      <Footer />
    </>
  );
}
