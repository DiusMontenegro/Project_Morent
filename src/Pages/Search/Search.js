import { useState } from "react";
import { CatalogueCard } from "../../Components/Cards/Cards";
import CheckBox from "../../Components/FormControls/CheckBox";
import RangeSlider from "../../Components/FormControls/RangeSlider";
import { getCarArray } from "../../Helpers/CarsProvider";
import getIcon from "../../Helpers/IconsHelper";
import { BuMinimal } from "../../Components/Buttons/Buttons";
import "./Search.css";
import { Footer, NavbarTop } from "../../Components/Navigation/Navigation";

function CatalogueGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,_minmax(20rem,_1fr))] gap-8 gap-y-16 justify-items-center items-center">
      {getCarArray(10).map((car, index) => (
        <CatalogueCard car={car} key={index} />
      ))}
    </div>
  );
}

function FilterCheckElement(props) {
  return (
    <div className="flex gap-4 font-semibold">
      <CheckBox></CheckBox>
      <p className="">{props.title}</p>
      <p className="text-secondary-300">({props.count})</p>
    </div>
  );
}

function FilterGroup(props) {
  return (
    <div className="filter__group">
      <p className="text-secondary-300 text-sm tracking-widest font-semibold">
        {props.title}
      </p>
      <div className="flex flex-col gap-4 mt-8">{props.children}</div>
    </div>
  );
}

function SideBarFilter(props) {
  return (
    <div className="sidebar lg:w-1/4 md:w-1/3 md:max-w-[18rem] w-full" data-visible={props.visible}>
    <div className="backdrop md:hidden w-full h-full bg-secondary-700 opacity-50" onClick={props.toggle}></div>
    <div className="filter bg-white w-full h-full p-4 flex flex-col gap-12 " >
      <FilterGroup title="TYPE">
        <FilterCheckElement title="Sport" count={24}></FilterCheckElement>
        <FilterCheckElement title="SUV" count={24}></FilterCheckElement>
        <FilterCheckElement title="SEDAN" count={24}></FilterCheckElement>
        <FilterCheckElement title="CUV" count={24}></FilterCheckElement>
        <FilterCheckElement title="Hatchback" count={24}></FilterCheckElement>
        <FilterCheckElement title="Micro" count={24}></FilterCheckElement>
        <FilterCheckElement title="Roadster" count={24}></FilterCheckElement>
        <FilterCheckElement title="Coupe" count={24}></FilterCheckElement>
      </FilterGroup>

      <FilterGroup title="SEATS">
        <FilterCheckElement title="2 Persons" count={24}></FilterCheckElement>
        <FilterCheckElement title="4 Persons" count={24}></FilterCheckElement>
        <FilterCheckElement title="6 Persons" count={24}></FilterCheckElement>
        <FilterCheckElement title="8 or more" count={24}></FilterCheckElement>
      </FilterGroup>
      <FilterGroup title="PRICE">
        <RangeSlider 
          initialMin={0}
          initialMax={1000}
          min={0}
          max={1000}
          step={10}
          priceCap={10}
        ></RangeSlider>
      </FilterGroup>
    </div>
    </div>
  );
}

export default function Search(props) {
    const [sidebarVisible,setSidebarVisible] = useState(false);
    const toggleSidbar = (prevState) =>{
        setSidebarVisible(!prevState)
    }
  return (
    <>
    <NavbarTop></NavbarTop>
    
    <div className="page md:flex md:gap-4">
      <SideBarFilter className="" visible={""+sidebarVisible} toggle={()=>{toggleSidbar(sidebarVisible)}} LeftIcon={getIcon("funnel")}></SideBarFilter>

      <section className="recommended flex flex-col gap-4 mt-6 flex-1 p-4 pr-6">
        <div className="flex justify-end gap-8">
        <p className="text-light mr-auto">1075 Results</p>
        <BuMinimal text="Filter" className="rounded-sm  md:hidden flex" onClick={()=>{toggleSidbar(sidebarVisible)}} LeftIcon={getIcon("funnel")}></BuMinimal>
        <BuMinimal text="Sort" className="rounded-sm" LeftIcon={getIcon("sort")}></BuMinimal>

        </div>
        <CatalogueGrid></CatalogueGrid>
      </section>
    </div>
    <Footer></Footer>
    </>
  );
}
