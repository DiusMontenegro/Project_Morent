import { useRef } from "react";
import useDraggableScroll from "use-draggable-scroll";
import { getCarArray } from "../Helpers/CarsProvider";
import { CatalogueCard } from "../Components/Cards/Cards";
import "./CarDisplay.css";
import { BuAccent } from "../Components/Buttons/Buttons";

export function ScrollDisplay() {
  const ref = useRef(null);
  const { onMouseDown } = useDraggableScroll(ref);
  return (
    <section className="flex flex-col gap-4 ">
      <div className="flex flex-row justify-between">
        <p className="text-light">Popular Cars</p>
        <a href="#" className="fw-semibold">
          View All
        </a>
      </div>
      <div
        onMouseDown={onMouseDown}
        ref={ref}
        className="scrollable flex flex-row gap-6 overflow-scroll scroll"
      >
        {getCarArray(4).map((car, index) => (
          <CatalogueCard car={car} key={index} />
        ))}
      </div>
    </section>
  );
}

export function GridDisplay() {
  return (
    <section className="flex flex-col gap-4 mt-6">
      <p className="text-light">Recommended</p>
      <div className=" grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-6">
        {getCarArray(10).map((car, index) => (
          <CatalogueCard car={car} key={index} />
        ))}
      </div>
      <BuAccent
        text="View More"
        className="py-4 px-6  rounded-sm m-auto mt-4"
      />
    </section>
  );
}
