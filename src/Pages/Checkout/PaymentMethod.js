import { useState } from "react";
import TextBox from "../../Components/FormControls/TextBox";

export default function PaymentMethod({className}) {
    const [Method, setMethod] = useState(-1);
    const isCCNumber = (text)=>{
      const pattern = /(^4[0-9]{12}(?:[0-9]{3})?$)|(^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$)|(3[47][0-9]{13})|(^3(?:0[0-5]|[68][0-9])[0-9]{11}$)|(^6(?:011|5[0-9]{2})[0-9]{12}$)|(^(?:2131|1800|35\d{3})\d{11}$)/g 
      return pattern.test(text)
    }
    const isCVC = (text)=>{
      const pattern = /(^[0-9]{3}$)/g;
      return pattern.test(text)
    }
    const isMMYY = (text)=>{
      const pattern = /(^[0-9]{2}\/[0-9]{2}$)/g;
      return pattern.test(text);
    }
    return (
      <div className={`${className} grid sm:p-8 p-6 bg-white gap-4 rounded-xl`}>
        <div className="heading mb-2">
          <h1 className="text-dark text-xl font-bold">Payment Method</h1>
          <p className="text-secondary-300 mt-1">
            Please Select your Payment Method
          </p>
        </div>
  
        <div className="method-group bg-gray-100 p-4 rounded-md">
          <div className="method-name flex gap-4 ">
            <input
              type="radio"
              id="credit_card"
              name="payment-method"
              value="credit_card"
              onChange={(e) => {
                setMethod(0);
              }}
            ></input>
            <label htmlFor="credit_card" className="font-semibold">Credit Card</label>
          </div>
          <div
            className="method-data grid gap-6 lg:grid-cols-2"
            data-visible={Method === 0}
          >
            <div>
              <p className="font-semibold text-dark mb-2">Card Number</p>
              <TextBox placeholder="Card Number" inputClassName="bg-white" isValidable validationHandler={isCCNumber} errorMsg={"Please Enter a Valid Card Number"} />
            </div>
            <div>
              <p className="font-semibold text-dark mb-2">Expiration Date</p>
              <TextBox placeholder="MM/YY" inputClassName="bg-white" isValidable validationHandler={isMMYY} errorMsg={"Please Enter a Valid Exp. Date"}/>
            </div>
            <div>
              <p className="font-semibold text-dark mb-2">Card Holder</p>
              <TextBox placeholder="Card Holder" inputClassName="bg-white" />
            </div>
            <div>
              <p className="font-semibold text-dark mb-2">CVC</p>
              <TextBox placeholder="CVC" inputClassName="bg-white" isValidable validationHandler={isCVC} errorMsg={"Please Enter a Valid CVC"}/>
            </div>
          </div>
        </div>
  
        <div className="method-group bg-gray-100 p-4 rounded-md">
          <div className="method-name flex gap-4 ">
            <input
              type="radio"
              name="payment-method"
              value="paypal"
              id="paypal"
              onChange={(e) => {
                setMethod(1);
              }}
            ></input>
            <label htmlFor="paypal" className="font-semibold">Paypal</label>
          </div>
        </div>
      </div>
    );
  }