import getIcon from "../../Helpers/IconsHelper";
import { BuMinimal } from "../Buttons/Buttons";

export function NavSearch(props){
    return (
        <form className={"search-form flex gap-2 bg-white w-f border border-secondary-100 py-2 px-4 rounded-xl " + props.className}>
            <BuMinimal className="search-form__btsearch"  LeftIcon={getIcon("search")}>
            </BuMinimal>
            <input type="text" className=" focus:outline-none" placeholder="Search something here" />
            <BuMinimal className="search-form__btsearch ml-auto"  LeftIcon={getIcon("settings")}>
            </BuMinimal>
        </form>
    )
}