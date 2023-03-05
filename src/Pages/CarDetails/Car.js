import { Footer, NavbarTop } from "../../Components/Navigation/Navigation";
import { ScrollDisplay } from "../CarDisplayViews";
import CarSection from "./CarSection";
import ReviewsSection from "./ReviewsSection";



export default function Car() {

  return (
    <>
      <NavbarTop></NavbarTop>
      <div className="content m-auto my-8 px-4 max-w-[72rem] flex flex-col gap-12">
        <CarSection/>
        <ReviewsSection/>
        <ScrollDisplay/>
      </div>
      <Footer></Footer>
    </>
  );
}

