import NissanGTR from "../../assets/cars/gtr/2020_Nissan_GT-R_22.jpg";
import NissanGTR_dash from "../../assets/cars/gtr/2021_nissan_gt_r_dashboard.jpg";
import NissanGTR_front from "../../assets/cars/gtr/2021_nissan_gt_r_frontseat.jpg";
import { useState } from "react";
import { BuAccent } from "../../Components/Buttons/Buttons";

export default function CarSection() {
  return (
    <div className="car grid md:grid-cols-2 md:grid-rows-1 grid-rows-[auto_auto] grid-cols-1 gap-6 justify-items-center">
      <CarPictures></CarPictures>
      <CarDetails></CarDetails>
    </div>
  );
}

function SpecGroup(props) {
  return (
    <div className="spec__group flex justify-between lg:text-lg text-md font-medium">
      <p className="text-secondary-300">{props.name}</p>
      <p>{props.value}</p>
    </div>
  );
}

function CarDetails() {
  return (
    <div className="car__details p-6 rounded-2xl flex flex-col bg-white  md:mr-auto drop-shadow-md">
      <h2 className=" font-bold text-dark lg:text-3xl text-2xl">
        Nissan GT-R 2021
      </h2>
      <div className="car__rating flex flex-wrap gap-2 items-center mt-2">
        <ReviewStars></ReviewStars>
        <p className="text-sm text-secondary-300">+440 Reviews</p>
      </div>
      <p className="car__description tex-lg lg:mt-8 mt-4 leading-loose">
        Nissan challenged convention at every point of the Nissan GT-R’s
        development. Instead of a large, heavy engine thirsty for fuel, the now
        sold out Nissan GT-R is powered by an ideally sized, twin-turbocharged
        3.8-L V6 that produces a prodigious 565 hp and equally immense 467 lb-ft
        of torque.
      </p>
      <div className="car__specs grid l xl:grid-cols-1 grid-cols-1  gap-x-8 md:gap-y-4 gap-y-4 lg:mt-auto my-4">
        <SpecGroup name="Car Type" value="Sport"></SpecGroup>
        <SpecGroup name="Capacity" value="2Persons"></SpecGroup>
        <SpecGroup name="Transimission" value="Auto"></SpecGroup>
        <SpecGroup name="Gas" value="70L"></SpecGroup>
      </div>

      <div className="car__actions mt-auto">
        <div className="flex md:flex-row flex-col justify-between md:items-end lg:gap-6 gap-4">
          <div className="flex-1">
            <p className="text-almost-black fw-bold fs-xl">
              $80.00 /<span className="fs-sm text-light fw-base">day</span>
            </p>

            <p className="fw-bold fs-regular text-linethrough text-light">
              $90.00
            </p>
          </div>
          <BuAccent
            className=" bu-med fw-base flex-1 rounded-sm py-8"
            text="Rent Now"
          />
        </div>
      </div>
    </div>
  );
}

function CarPictures() {
  const [activePic, setActivePic] = useState(0);
  const CARPICS = [NissanGTR, NissanGTR_dash, NissanGTR_front];
  const ActiveBorder = (index) => {
    return index === activePic ? " border-2 border-accent-500 " : "";
  };
  return (
    <div className="car__pictures grid grid-cols-3 gap-4 grid-rows-4  self-start md:ml-auto">
      <img
        className="block m-auto col-span-3 row-span-3 rounded-2xl border border-secondary-200"
        src={CARPICS[activePic]}
      ></img>
      <img
        className={"rounded-2xl" + ActiveBorder(0)}
        src={CARPICS[0]}
        onClick={() => {
          setActivePic(0);
        }}
      ></img>
      <img
        className={"rounded-2xl" + ActiveBorder(1)}
        src={CARPICS[1]}
        onClick={() => {
          setActivePic(1);
        }}
      ></img>
      <img
        className={"rounded-2xl" + ActiveBorder(2)}
        src={CARPICS[2]}
        onClick={() => {
          setActivePic(2);
        }}
      ></img>
    </div>
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
