import getIcon from "../../Helpers/IconsHelper";
import { BuAccent, BuMinimal } from "../Buttons/Buttons";
import "./Cards.css";

export function CatalogueCard(props) {
  const {
    image,
    name,
    type,
    isFavorite,
    price,
    oldPrice,
    seats,
    transition,
    fuel,
  } = props.car;
  const FuelIcon = getIcon("fuel");
  const TransitionIcon = getIcon("transition");
  const PersonsIcon = getIcon("persons");
  return (
    <div className="catalogue-card flex flex-col gap-6 rounded-xl md:p-5 p-4 bg-white h-96 w-80 ">
      <div className="flex flex-row justify-between items-start">
        <div>
          <p className="text-almost-black fw-bold fs-xl">{name}</p>
          <p className="fw-bold fs-sm text-light">{type}</p>
        </div>
        <BuMinimal
          className="bu-square "
          RightIcon={getIcon("heart")}
          data-isFavorite={isFavorite}
        />
      </div>
      <div className="flex flex-col gap-4 items-center flex-1">
        <img onMouseDown={(e)=>{e.preventDefault()}} className="catalogue-card__pircture flex-1 my-4  w-56 object-contain" src={image} alt={name} />
        <div className="catalogue-card__specs flex flex-row gap-4 justify-between text-light">
          <div className="spec-group flex flex-row gap-2 items-end">
            <FuelIcon />
            <p className="fs-sm fw-medium ">{fuel}L</p>
          </div>
          <div className="spec-group flex flex-row gap-2 items-end">
            <TransitionIcon />
            <p className="fs-sm fw-medium ">{transition}</p>
          </div>
          <div className="spec-group flex flex-row gap-2 items-end">
            <PersonsIcon />
            <p className="fs-sm fw-medium ">{seats}People</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-between items-end gap-6">
        <div className="flex-1">
          <p className="text-almost-black fw-bold fs-xl">
            $
            {price.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
            /<span className="fs-sm text-light fw-base">day</span>
          </p>
          {oldPrice>0 && (
            <p className="fw-bold fs-regular text-linethrough text-light">
              $
              {oldPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </p>
          )}
        </div>
        <BuAccent
          className=" bu-med fw-base flex-1 rounded-sm py-8"
          text="Rent Now"
        />
      </div>
    </div>
  );
}
