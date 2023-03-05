

import AVATAR from "../../assets/avatar.jpg";
import { BuMinimal } from "../../Components/Buttons/Buttons";
import getIcon from "../../Helpers/IconsHelper";


export default function ReviewsSection() {
  return (
    <div className="reviews p-6 grid gap-8 rounded-xl bg-white">
        <div className="flex gap-4">
            <p className="text-lg font-semibold text-dark">Reviews</p>
            <p className="py-1 px-4 rounded-md bg-accent-500 text-white text-sm">31</p>
        </div>
      <Review />
      <Review />
      <Review />
     <BuMinimal text="show all" RightIcon={getIcon("chevron_down")} className="mt-4 py-1"/>
    </div>
  );
}

function Review() {
  return (
    <div className="flex gap-4">
      <img
        src={AVATAR}
        alt=""
        className="h-10 w-10 md:h-12 md:w-12 rounded-full"
      />
      <div className="review__container flex flex-col gap-2 flex-1">
        <div className="review__header grid md:grid-cols-2 ">
          <p className="review__user text-lg font-bold text-dark -order-2 md:order-none">
            Alex Stanton
          </p>
          <p className="review__date md:text-end text-sm">15/09/2022</p>
          <p className="review__user-occupation -order-1 md:order-none text-sm">CEO at GlobalCorp</p>
          <ReviewStars className="md:ml-auto" />
        </div>
        <p className="review-text">
          We are very happy with the service from the MORENT App. Morent has a
          low price and also a large variety of cars with good and comfortable
          facilities. In addition, the service provided by the officers is also
          very friendly and very polite.
        </p>
      </div>
    </div>
  );
}



function ReviewStars(props) {
  return (
    <svg
    className={props.className}
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
