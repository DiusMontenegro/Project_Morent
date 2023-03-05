import { BuAccent, BuSecondary } from "../../Components/Buttons/Buttons";
import TextBox from "../../Components/FormControls/TextBox";
export default function RentalSummary(props) {
  return (
    <div
      className={`${props.className} summary bg-white grid md:grid-cols-3 rounded-xl py-6 px-4 sm:p-8 gap-y-1 `}
    >
      <h1 className="text-dark text-xl font-bold col-span-3">Rental Summary</h1>
      <p className="text-secondary-300 col-span-3 mb-8">
        The Summary of your order
      </p>
      <img
        src={props.car.image}
        className="
          col-span-3
          row-span-1
          lg:col-span-1
          lg:row-span-2 self-center p-2"
      />
      <h2 className=" font-bold text-dark text-lg lg:col-span-2 col-span-3 self-end">
        Nissan GT-R 2021
      </h2>
      <div className="car__rating flex flex-wrap gap-2 items-center lg:col-span-2 col-span-3 self-start">
        <ReviewStars></ReviewStars>
        <p className="text-sm text-secondary-300">+440 Reviews</p>
      </div>
      <span className="col-span-3 border border-gray-100 my-4 mt-8"></span>
      <PriceRow name="Price Per Day" value={`${props.car.price}$`} />
      <PriceRow name="Days" value="1" />
      <PriceRow name="Subtotal" value={`${props.car.price}$`} />
      <PriceRow name="Tax" value={`0$`} />
      <TextBox
        className="col-span-2 my-4"
        inputClassName="rounded-r-none"
        placeholder="Coupon Code"
      />
      <BuSecondary text="apply" className="rounded-lg rounded-l-none my-4" />
      <h2 className="text-dark text-lg font-bold col-span-2 self-end">
        Total Price
      </h2>
      <p className="text-2xl text-dark font-bold  self-center ml-auto row-span-2">
        80.00$
      </p>
      <p className="text-secondary-300 col-span-2 self-start">
        including taxes and discounts
      </p>
    </div>
  );
}
function PriceRow(props) {
  return (
    <>
      <p className="text-secondary-300 col-span-2 font-medium mb-2">
        {props.name}
      </p>
      <p className="ml-auto text-dark font-semibold mb-2">{props.value}</p>
    </>
  );
}

function ReviewStars() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="108"
      height="20"
      fill="none"
      viewBox="0 0 108 20"
    >
      <g clipPath="url(#a)">
        <path
          fill="#FBAD39"
          fillRule="evenodd"
          d="M9.167 2.658a.9.9 0 0 1 1.716 0l1.55 4.767h5a.908.908 0 0 1 .534 1.667l-4.059 2.941 1.55 4.775a.9.9 0 0 1-1.391 1.009L10 14.842l-4.058 2.95a.9.9 0 0 1-1.392-1.009l1.55-4.775-4.058-2.941A.908.908 0 0 1 2.575 7.4h5l1.592-4.742Zm22 0a.9.9 0 0 1 1.716 0l1.55 4.767h5a.908.908 0 0 1 .534 1.667l-4.059 2.941 1.55 4.775a.9.9 0 0 1-1.391 1.009L32 14.842l-4.058 2.95a.9.9 0 0 1-1.392-1.009l1.55-4.775-4.058-2.941a.908.908 0 0 1 .533-1.667h5l1.592-4.742Zm22 0a.9.9 0 0 1 1.716 0l1.55 4.767h5a.908.908 0 0 1 .534 1.667l-4.059 2.941 1.55 4.775a.9.9 0 0 1-1.391 1.009L54 14.842l-4.058 2.95a.9.9 0 0 1-1.392-1.009l1.55-4.775-4.058-2.941a.908.908 0 0 1 .533-1.667h5l1.592-4.742Zm22 0a.9.9 0 0 1 1.716 0l1.55 4.767h5a.908.908 0 0 1 .534 1.667l-4.059 2.941 1.55 4.775a.9.9 0 0 1-1.391 1.009L76 14.842l-4.058 2.95a.9.9 0 0 1-1.392-1.009l1.55-4.775-4.058-2.941a.908.908 0 0 1 .533-1.667h5l1.592-4.742Z"
          clipRule="evenodd"
        />
        <path
          stroke="#C3D4E9"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M97.167 2.658a.9.9 0 0 1 1.716 0l1.55 4.767h5a.906.906 0 0 1 .891 1.21.906.906 0 0 1-.357.457l-4.059 2.941 1.55 4.775a.898.898 0 0 1-1.391 1.009L98 14.842l-4.058 2.95a.9.9 0 0 1-1.392-1.009l1.55-4.775-4.058-2.941a.908.908 0 0 1 .533-1.667h5l1.592-4.742Z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h108v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}
